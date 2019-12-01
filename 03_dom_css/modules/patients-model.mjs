const STORAGE = 'com.jdc.patients'

export function Patient(id, name, gender, dob, phone, address) {
    this.id = id
    this.name = name
    this.gender = gender
    this.dob = dob
    this.phone = phone
    this.address = address
}

class PatientModel {

    constructor() {
        let str = localStorage.getItem(STORAGE)
        this.patients = str ? JSON.parse(str) : []
    }

    search(gender, name, phone) {
        return this.patients.filter(p => {
            
            if(gender != '0' && gender != p.gender) {
                return false
            } 

            if(name && !p.name.toLowerCase().startWith(name.toLowerCase())) {
                return false
            }

            if(phone && !p.phone.startWith(phone)) {
                return false
            }

            return true
        })
    }

    addNew(patient) {
        this.patients.push(patient)
        let str = JSON.stringify(this.patients)
        localStorage.setItem(STORAGE, str)
    }
}

export const MODEL = new PatientModel