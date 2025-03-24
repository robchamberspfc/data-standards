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


    html = `---
layout: basic
title: Home
---

<main role="main" id="content" tabindex="-1">
    <div class="container">
        <div class="row">
            <div class="col-md-8 mt-5">
                <h1 class="display-3 fw-bold text-body-emphasis mt-5">Housing data standards support service</h1>
                <p class="lead mt-5 mb-5">Content supporting the adoption and use of API and data standards within the
                    social housing sector.</p>
            </div>
        </div>
        <h2 class="mt-5 mb-5">${data.topSection.name}</h2>
        <div class="row mb-3">${topSection}
        </div>
        <h2 class="mt-5 mb-5">Get standards</h2>
        <div class="row mb-5 pb-5">
            <div class="col-12 col-md-4 p-md-4">
                <div class="row pb-2">
                    <div class="card mb-4 card-navigation rounded-0">
                        <div class="card-body">
                            <div class="col-md-10">
                                <h3 class="card-text">
                                <a href="procurement" class="stretched-link card-navigation">
                                    Service areas</a></h3>
                                <p class="card-text">Find data standards relating repairs and maintenance etc</p>
                            </div>
                            <p class="pb-0 pt-5"><i class="bi bi-arrow-right-short h2"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 p-md-4">
                <div class="row pb-2 ">
                    <div class="card mb-4 card-navigation rounded-0">
                        <div class="card-body">
                            <div class="col-md-10">
                                <h3 class="card-text">
                                <a href="procurement" class="stretched-link card-navigation">
                                    All data standards</a></h3>
                                <p class="card-text">See all data standards and guidance</p>
                            </div>
                            <p class="pb-0 pt-5"><i class="bi bi-arrow-right-short h2"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>`

    return html

}