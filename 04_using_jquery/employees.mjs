import { EmployeeSerivce } from "./modules/employees-manager.mjs"
import { Employee } from "./modules/employees-manager.mjs"

window.onload = function() {

    let employeeSerivce = new EmployeeSerivce

    setTableData(employeeSerivce.employees)

    $('#saveBtn').on('click', () => {
        // create employee object by using form inputs
        let employee = new Employee(
            $('#loginId').val(),
            $('#name').val(), 
            'Yangon',
            $('#role').val(),
            $('#phone').val(),
            $('#email').val()
        )

        // save to local storage with Employee Service
        employeeSerivce.addNew(employee)

        // reload table with employees
        setTableData(employeeSerivce.employees)

        // clear inputs
        $('#loginId').val('')
        $('#name').val('')
        $('#role').val('Teacher')
        $('#phone').val('')
        $('#email').val('')

        // close modal dialog
        $('#employee-edit').modal('hide')
    })
}

function setTableData(employees) {
    $('#employees tbody').empty()

    employees.forEach(emp => {
        let tr = $('<tr>')

        for(let field in emp) {
            $('<td>').text(emp[field]).appendTo($(tr))
        }

        $('#employees tbody').append($(tr))
    });
}
