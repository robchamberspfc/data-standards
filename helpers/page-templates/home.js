module.exports = (data) => {

    //create cards
    topSection = ''

    for (j = 0; j < data.topSection.length; j++) {

        let sections = ''
        for (k = 0; k < data.topSection[j].items.length; k++) {

            let pill = ''

            if (data.topSection[j].items[k].pill != null) {
                pill = `<span class="badge local p-2 rounded-0">${data.topSection[j].items[k].pill}</span>`
            }

            sections += `
            <div class="col col-12 col-lg-4 col-md-6 pb-4">
                    <div class="card card-navigation rounded-0 h-100">
                        <div class="card-body">
                            <div class="col-md-10">
                                <h3 class="card-text">
                                <a href="${data.topSection[j].items[k].url}" class="stretched-link card-navigation">
                                    ${data.topSection[j].items[k].title}</a></h3>
                                <p class="card-text">${data.topSection[j].items[k].description}</p>
                            </div>
                        </div>
                        <div class="card-footer card-navigation border-0">
                            <div class="row pb-0">
                                <div class="col-md-8">
                                    <i class="bi bi-arrow-right-short h2"></i>
                                </div>
                                <div class="col-md-4 mt-1">${pill}</div>
                            </div>
                        </div>
                    </div>
                </div>`
        }
        topSection += `<h2 class="mt-5 mb-5">${data.topSection[j].name}</h2>
                    <div class="row mb-3">
                        ${sections}
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
            ${topSection}
        <div class = "pb-5 mb-5">
            ${linkSection}
        </div>
    </div>
</main>`

    return html

}