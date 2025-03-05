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

    let html = marked.parse(markdown);

    //add styles
    html = html.replaceAll("<ul>", '<ul class="list">');
    // html = html.replaceAll("<li>",'<li class="list-group-item">');


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

    // console.log(html)

    const output = sanitizeHtml(html, {
      allowedClasses: {
        'ul': ['list', ]
      },
      allowedAttributes: {
        'h2': ["id"],
        'a': ["href"]
      },
    });

    console.log("Output HTML")
    fs.writeFileSync(`./_includes/markdown-${name}.html`, output);
  });
}