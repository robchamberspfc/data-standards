# MHCLG Standards website

## Prototype

`cd app`
`npm install`
`npx @11ty/eleventy --serve` to run locally on hot reloading server


## Hosting

Site is hosted on Netlify at: 

On update to main, the site will regenerate the HTML from markdown and deploy the update to netlify.


## Helpers

### Markdown converter

Reads the content of the markdown files in the `/input` directory and converts them to HTML. Output HTML files are pushed to `../app/_includes/` for use in the app

Run manually using:

`node convert-markdown.js`