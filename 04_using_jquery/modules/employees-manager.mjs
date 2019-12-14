export class Employee {

    constructor(loginId, name, school, role, phone, email) {
        this.loginId = loginId
        this.name = name
        this.school = school
        this.role = role
        this.phone = phone
        this.email = email
    }
}

const STORAGE = "jdc.app.employees"

export class EmployeeSerivce {

    employees = [] 

    constructor() {
        let value = localStorage.getItem(STORAGE)
        
        if(value) {
            this.employees = JSON.parse(value)
        }
    }

    addNew(employee) {
        this.employees.push(employee)
        localStorage.setItem(STORAGE, JSON.stringify(this.employees))
    }
}