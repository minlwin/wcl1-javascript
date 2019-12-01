function search() {

}

function addNew() {
    alert("Add New")
}

function save() {

}

window.onload = () => {

    document.getElementById('searchBtn')
        .addEventListener('click', search())

    document.getElementById('addBtn').addEventListener('click', addNew)
}

