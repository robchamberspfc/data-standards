module.exports = (data) => {
    //create breadcrumb
    breadcrumb = ''

    if (data.breadcrumb != null) {
        for (j = 0; j < data.breadcrumb.length; j++) {
            breadcrumb += `
                <li class="breadcrumb-item"><a href="${data.breadcrumb[j].url}">${data.breadcrumb[j].title}</a></li>`
        }
    }
    
    breadcrumb += `
                <li class="breadcrumb-item active" aria-current="page">${data.name}</li>`

    //create cards
    cards = ''

    for (k = 0; k < data.tiles.length; k++) {
        cards += `<div class="card mb-4">
                        <div class="card-body">
                            <h2 class="card-title">${data.tiles[k].title}</h2>
                            <p class="card-text">${data.tiles[k].description}</p>
                            <a href="${data.tiles[k].url}" class="btn local">${data.tiles[k].title}</a>
                        </div>
                    </div>`
    }

    let html = `---
layout: basic
title: ${data.name}
---

<main role="main" id="content" tabindex="-1">
    <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>${breadcrumb}
            </ol>
        </nav>
            <h1 class="pb-4">${data.name}</h1>
            <p>Guidance for...</p>
        <div class="row">
            <div class="col-md-8">
                <div class="row pb-2">
                    ${cards}
                </div>
            </div>
        </div>
    </div>
</main>`

    return html
}