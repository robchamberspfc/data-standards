module.exports = (data) => {

    //create cards
    topSection = ''

    for (k = 0; k < data.topSection.items.length; k++) {
        topSection += `
            <div class="col-12 col-md-4 p-md-4">
                <div class="row pb-2">
                    <div class="card mb-4 card-navigation rounded-0">
                        <div class="card-body">
                            <div class="col-md-10">
                                <h3 class="card-text">
                                <a href="${data.topSection.items[k].url}" class="stretched-link card-navigation">
                                    ${data.topSection.items[k].title}</a></h3>
                                <p class="card-text">${data.topSection.items[k].description}</p>
                            </div>
                            <p class="pb-0 pt-5"><i class="bi bi-arrow-right-short h2"></i></p>
                        </div>
                    </div>
                </div>
            </div>`
    }

    //link sections
    linkSection = ''

    for (l = 0; l < data.linkBlocks.length; l++) {
        let linksList = ''
        for (m = 0; m < data.linkBlocks[l].items.length; m++) {
            linksList += `<h3 class="h5"><a href="${data.linkBlocks[l].items[m].url}" class="">
                                    ${data.linkBlocks[l].items[m].title}</a></h3>`
        }

        linkSection += `<div class="col-12 col-md-8">
                <div class="row pb-2">
                    <h2 class="mt-5 mb-5">${data.linkBlocks[l].name}</h2>
                    ${linksList}
                </div>
            </div>
        `
    }

    html = `---
layout: basic
title: Home
---

<main role="main" id="content" tabindex="-1">
    <div class="container">
        <div class="row">
            <div class="col-md-8 mt-5">
                <h1 class="display-3 fw-bold text-body-emphasis mt-5">Adopt social housing data standards</h1>
                <p class="lead mt-5 mb-5">Information, guidance and resources to help social housing providers adopt data standards.</p>
            </div>
        </div>
        <h2 class="mt-5 mb-5">${data.topSection.name}</h2>
        <div class="row mb-3">${topSection}
        </div>
        <div class = "pb-5 mb-5">
            ${linkSection}
        </div>
    </div>
</main>`

    return html

}
