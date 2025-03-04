# MHCLG Standards website

## Prototype

`npm install`
`npx @11ty/eleventy --serve` to run locally on hot reloading server


## Hosting

Site is hosted on Netlify at: https://housing-data-standards.netlify.app/

On update to main, the site will regenerate the HTML from markdown and deploy the update to netlify.


## Helpers

### Markdown converter

Reads the content of the markdown files in the `helpers//input` directory and converts them to HTML. Output HTML files are pushed to `../_includes/` for use in the app

Run manually using:

`node helpers/convert-markdown.js`