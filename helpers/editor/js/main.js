const url = "https://raw.githubusercontent.com/robchamberspfc/data-standards/refs/heads/main/helpers/new-pages.json"
const selectMenu = document.getElementById("pageSelect");

let pages = []

async function pageLoad() {
    const response = await fetch(url);
    pages = await response.json();
    populateSelect(pages)
}

populateSelect = (data) => {
    for (i = 0; i < data.length; i++) {
        selectMenu.options[selectMenu.options.length] = new Option(data[i].name, i);
    }
};

displayPage = () => {
    selectMenu.disabled = true
    let selection = selectMenu.selectedOptions[0].value
    let pageJSON = JSON.stringify(pages[selection], null, 4)
    document.getElementById("edit").hidden = false
    document.getElementById("currentEdit").value = pageJSON

    getExample (pages[selection].type, "Edit")
}

getExample = (type, location) => {
    document.getElementById(`example${location}`).value = examples[type]
}

createPage = () => {
    document.getElementById("new").hidden = false
}

saveEdit = () => {
    let selection = selectMenu.selectedOptions[0].value
    pages[selection] = JSON.parse(document.getElementById("currentEdit").value)
    document.getElementById("edit").hidden = true
    selectMenu.value = "Select page"
    selectMenu.disabled =  false
}

reset = () => {
    selectMenu.disabled =  false
    document.getElementById("edit").hidden = true
    document.getElementById("new").hidden = true
    pageLoad()
}

downloadJSON = () => {
    let jsonse = JSON.stringify(pages, null, 4);
    let blob = new Blob([jsonse], {type: "application/json"});
    let url  = window.URL.createObjectURL(blob);

    let fileName = "pages.json"
    let link = document.createElement('a');
    link.href = url
    link.download = fileName;
    link.click();
}