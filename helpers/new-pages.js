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
        //check markdown page exists
        fs.readFile(`./_includes/markdown-${newPages[i].fileName}.html`, 'utf8', (err, newPages) => {
            if (err) {
            console.log(`${err}
                Markdown file missing. Ensure it exists and convert-markdown.js has been run.`)}
        });

        //create folder structure
        fs.mkdirSync(newPages[i].location, {
            recursive: true
        }, (err) => {
            if (err) throw err;
        });

        //create location page
        let locationPage = `---
layout: ${newPages[i].fileName}
---
`
        //write page to location
        fs.writeFileSync(`${newPages[i].location}/index.html`, locationPage);

        // create basic include page
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
                <h1 class="pb-2"></h1>
                    <div class="row pb-2">
                        {% include "markdown-${newPages[i].fileName}.html" %}
                    </div>
            </div>
            <div class="col-md-5 ">
            </div>
        </div>
    </div>
</main>`
        
        //write page to location
        fs.writeFileSync(`./_includes/${newPages[i].fileName}.html`, includePage);
    }
})