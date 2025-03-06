const marked = require('marked');
const sanitizeHtml = require('sanitize-html');
const fs = require('node:fs');
const files = fs.readdirSync('./helpers/input');

console.log("Starting markdown conversion")

//loop through all files in directory one at a time
for (i = 0; i < files.length; i++) {

  let name = files[i]
  name = name.replace(/.md/g, "");

  //read each markdown file
  fs.readFile(`./helpers/input/${files[i]}`, 'utf8', (err, markdown) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${name}: Reading markdown`)

    //changes to markdown pre-conversion
      // converter seems to only like 1 dash type for lists, so convert to the one it likes
      markdown = markdown.replace(/— /g, "- ");

    //convert to html
    let html = marked.parse(markdown);

    //changes to html post conversion
      //add styles
      html = html.replaceAll("<ul>", '<ul class="list">');
      html = html.replaceAll("<table>", '<table class="table table-striped">');
      html = html.replaceAll("<thead>",'<thead class="thead-dark">');

      //strip out google tags and make them IDs
      temp = (html.match(/<h2>/g) || []).length;
      for (i = 0; i < temp; i++) {

        // let startPos = html.indexOf("</h2>") + "</h2>".length;
        // let endPos = html.indexOf("<h2>");
        // let targetText = html.substring(startPos,endPos).trim();

        let startPos = html.indexOf("}") + "}".length;
        let endPos = html.indexOf("{");
        let targetText = html.substring(startPos, endPos).trim();

        html = html.replace(targetText, "")

        targetText = targetText.replace("{#", "")
        targetText = targetText.replace("}", "")

        let id = `<h2 id="${targetText}">`

        html = html.replace("<h2>", id)
      }

    //sanitise HTML to make sure no nasties
    const output = sanitizeHtml(html, {
      allowedClasses: {
        'ul': ['list'],
        'table': ['table','table-striped'],
        'thead': ['thead-dark']
      },
      allowedAttributes: {
        'h2': ["id"],
        'a': ["href"]
      },
    });

    console.log(`${name}: Output HTML`)

    //write files to location to be included in app
    fs.writeFileSync(`./_includes/markdown-${name}.html`, output);
  });
}