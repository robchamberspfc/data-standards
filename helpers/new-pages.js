const fs = require('node:fs');

//load config js file
fs.readFile(`./helpers/new-pages.json`, 'utf8', (err, newPages) => {
    if (err) {
        console.error(err);
        return;
    }

    newPages = JSON.parse(newPages)

    //loop through
    for (i = 0; i < newPages.length; i++) {

        if (newPages[i].type != "navigation") {

            console.log(`${newPages[i].name}: Creating`)

            //check markdown page exists - eleventy will crash if not
            fs.readFile(`./_includes/_markdown-${newPages[i].fileName}.html`, 'utf8', (err, newPages) => {
                if (err) {
                    console.log(`${err}
                Markdown file missing. Ensure it exists and convert-markdown.js has been run.`)
                }
            });

            console.log(`${newPages[i].name}: Creating folder structure`)
            //create folder structure
            fs.mkdirSync(newPages[i].location, {
                recursive: true
            }, (err) => {
                if (err) throw err;
            });

            console.log(`${newPages[i].name}: Creating location page`)
            //create location page
            let locationPage = `---
layout: ${newPages[i].fileName}
---
`
            //write page to location
            fs.writeFileSync(`${newPages[i].location}/index.html`, locationPage);

            console.log(`${newPages[i].name}: Creating include page`)
            //create breadcrumb
            breadcrumb = ''

            for (j = 0; j < newPages[i].breadcrumb.length; j++) {
                breadcrumb += `
                <li class="breadcrumb-item"><a href="${newPages[i].breadcrumb[j].url}">${newPages[i].breadcrumb[j].title}</a></li>`
            }

            breadcrumb += `
                <li class="breadcrumb-item active" aria-current="page">${newPages[i].name}</li>`

            let includePage = `---
layout: basic
title: ${newPages[i].name}
---

<main role="main" id="content" tabindex="-1">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>${breadcrumb}
            </ol>
        </nav>
        <h1 class="pb-2">${newPages[i].name}</h1>
        <div class="row">
            <div class="col-md-7">
                    <div class="row pb-2">
                        {% include "_markdown-${newPages[i].fileName}.html" %}
                    </div>
            </div>
        </div>
    </div>
</main>`


            fs.writeFileSync(`./_includes/${newPages[i].fileName}.html`, includePage);
        } else {
            //TODO: create a navigation page
            // console.log(newPages[i].name)
        }
    }
})