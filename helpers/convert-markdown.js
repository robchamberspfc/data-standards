const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const fs = require('node:fs');
const files = fs.readdirSync('./helpers/input');

for (i = 0; i < files.length; i++) {

    let name = files[i]
    name = name.replace(/.md/g, "");

    fs.readFile(`./helpers/input/${files[i]}`, 'utf8', (err, markdown) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Reading markdown file")

        // seems to only like 1 dash type for lists, so convert to the one it likes
        markdown = markdown.replace(/— /g, "- ");

        const html = marked.parse(markdown);
        const output = sanitizeHtml(html);
        console.log("Output HTML")
        fs.writeFileSync(`../_includes/markdown-${name}.html`, output);
    });
}