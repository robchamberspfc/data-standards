const fs = require('node:fs');
const location = require('./page-templates/location.js');
const navigation = require('./page-templates/navigation.js');
const simpleContent = require('./page-templates/simple-content.js');

const includes = fs.readdirSync('./_includes');

//load config js file
fs.readFile(`./helpers/new-pages.json`, 'utf8', (err, newPages) => {
    if (err) {
        console.error(err);
        return;
    }

    newPages = JSON.parse(newPages)

    //loop through pages file
    for (i = 0; i < newPages.length; i++) {

        console.log(`${newPages[i].name}: Creating`)

        // if not a navigation page we need to check markdown exists
        if (newPages[i].type != "navigation") {

            markdownExists = includes.indexOf(`_markdown-${newPages[i].fileName}.html`)

            if (markdownExists != -1) {

                //create folder structure
                let includePage = simpleContent(newPages[i])

                //write page to location
                fs.writeFileSync(`./_includes/${newPages[i].fileName}.html`, includePage);

                //create folder structure
                fs.mkdirSync(newPages[i].location, {
                    recursive: true
                }, (err) => {
                    if (err) throw err;
                });

                //create location page
                let locationPage = location(newPages[i].fileName)

                //write page to location
                fs.writeFileSync(`${newPages[i].location}/index.html`, locationPage);

            }

        } else {

            //create folder structure
            fs.mkdirSync(newPages[i].location, {
                recursive: true
            }, (err) => {
                if (err) throw err;
            });

            //create location page
            let locationPage = location(newPages[i].fileName)

            //write page to location
            fs.writeFileSync(`${newPages[i].location}/index.html`, locationPage);

            //create include page
            let includePage = navigation(newPages[i])

            //write page to location
            fs.writeFileSync(`./_includes/${newPages[i].fileName}.html`, includePage);
        }

        console.log(`${newPages[i].name}: Finished`)
    }
})