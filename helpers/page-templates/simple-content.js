module.exports = (data) => {

    //create breadcrumb
    let breadcrumb = ''

    for (j = 0; j < data.breadcrumb.length; j++) {
        breadcrumb += `
                <li class="breadcrumb-item"><a href="${data.breadcrumb[j].url}">${data.breadcrumb[j].title}</a></li>`
    }

    breadcrumb += `
                <li class="breadcrumb-item active" aria-current="page">${data.name}</li>`

    let related = ''

    for (j = 0; j < data.related.length; j++) {
        related += `
                <li class="related-item"><a href="${data.related[j].url}">${data.related[j].title}</a></li>`
    }

    let html = `---
layout: basic
title: ${data.name}
---

<main role="main" id="content" tabindex="-1">
    <div class="container">
        <nav aria-label="breadcrumb" class="mt-4">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>${breadcrumb}
            </ol>
        </nav>
        <h1 class="pt-4 pb-4">${data.name}</h1>
        <div class="row">
            <div class="col-md-7">
                    <div class="row pb-2">
                        {% include "_markdown-${data.fileName}.html" %}
                    </div>
            </div>
            <div class="col-md-5">
                    <div class="row pb-2">
                    <hr>
                    <h2>Related content</h2>
                        ${related}
                    </div>
            </div>
        </div>
    </div>
</main>`

    return html
}