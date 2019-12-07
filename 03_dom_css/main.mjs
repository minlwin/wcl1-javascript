import { Patient } from "./modules/patients-model.mjs"
import { MODEL } from "./modules/patients-model.mjs"

function search() {

    $('#result').empty()

    let list = MODEL.search($('#sch-gender').val(), $('#sch-name').val(), $('#sch-phone').val())

    for(let p of list) {
        $('#result').append(getTableRow(p))
    }

    $('.edit-link').on('click', edit)
}

function addNew() {
    $('#edit-title').text('Add New Patient')
    $('#modal-add').modal('show')
}

function edit(event) {
    let id = $(event.target).text()

    let patient = MODEL.findById(id)

    console.log(patient)
    $('#name').val(patient.name)

    $('#edit-title').text('Edit Patient')
    $('#modal-add').modal('show')
}

function getTableRow(patient) {
    let row = $('<tr>')
    $(row).append($('<td>').append(
        $('<a>').text(patient['id'])
            .attr("href", "#")
            .attr('class', 'edit-link')
    ))
    $(row).append($('<td>').text(patient['name']))
    $(row).append($('<td>').text(patient['gender']))
    $(row).append($('<td>').text(patient['dob']))
    $(row).append($('<td>').text(patient['phone']))
    $(row).append($('<td>').text(patient['address']))
    return row
}

function save() {

    let name = $('#name').val()
    let gender = $('#male').select() ? 'Male' : 'Female'
    let dob = $('#dob').val()
    let phone = $('#phone').val()
    let address = $('#address').val()

    let patient = new Patient(name, gender, dob, phone, address)

    MODEL.save(patient)
    clearInputs()
    $('#modal-add').modal('hide')
}

function clearInputs() {
    $('#name').val("")
    $('#male').prop('check', true)
    $('#dob').val("")
    $('#phone').val("")
    $('#address').val("")
}

window.onload = () => {

    document.getElementById('searchBtn')
        .addEventListener('click', search)
    document.getElementById('saveBtn').addEventListener('click', save)
    document.getElementById('addBtn').addEventListener('click', addNew)
}

