# Standards website

## About

Prototype site for content supporting the adoption and use of API and data standards within the social housing sector.

## Prototype

Static site generated through [Eleventy](https://www.11ty.dev/).

To run:

`npm install`

`npx @11ty/eleventy --serve` to run locally on hot reloading server

## Hosting

Site is hosted on Netlify at: https://housing-data-standards.netlify.app/

On update to main, the site will regenerate the HTML from markdown and deploy the update to netlify.

## Helpers

### Markdown converter

Reads the content of the markdown files in the `helpers/input` directory and converts them to HTML. Output HTML files are pushed to `../_includes/` for use in the app.

Also adds some styles and fixes some markdown issues post conversion.

Run manually using:

`node helpers/convert-markdown.js`

**This is also automatically run on deployment.**

### New pages

Automates the creation of new pages based on the content of `new-pages.json`.

**NOTE: Due to the way Eleventy build templates you need to make sure the markdown file has been added to `helpers/input` and Markdown converter has been run before running.**

Run manually using:

`node helpers/new-pages.js`

Currently uses two page templates (simple and navigation), could be extended to work with more templates. Safe to be rerun with existing pages.