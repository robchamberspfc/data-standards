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
        cards += `<div class="col-4 ps-4 pe-4">
                    <div class="row">
                        <div class="card mb-4 card-navigation rounded-0">
                            <div class="card-body">
                                <div class="col-md-10">
                                    <a href="${data.tiles[k].url}" class="stretched-link card-navigation">
                                        <p class="card-text h3">${data.tiles[k].title}</p>
                                        <p class="card-text">${data.tiles[k].description}</p>
                                </div>
                                <p class="pb-0 pt-5"><i class="bi bi-arrow-right-short h2"></i></p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
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
            <h1 class="mt-5 pt-4 mb-5 pb-4">${data.name}</h1>
        <div class="row pt-3 pb-4 mt-5">
                    ${cards}
            </div>
        </div>
    </div>
</main>`

    return html
}