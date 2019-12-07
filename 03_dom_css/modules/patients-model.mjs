const STORAGE = 'com.jdc.patients'

export function Patient(name, gender, dob, phone, address) {
    this.name = name
    this.gender = gender
    this.dob = dob
    this.phone = phone
    this.address = address
}

const PATIENT_ID_KEY = "com.jdc.patient.id"

let IdGenerator = {

    generate() {
        let id = localStorage.getItem(PATIENT_ID_KEY)
        id = id ? Number.parseInt(id) + 1 : 1
        localStorage.setItem(PATIENT_ID_KEY, id)
        return id
    }
}

class PatientModel {

    constructor() {
        let str = localStorage.getItem(STORAGE)
        this.patients = str ? JSON.parse(str) : []
    }

    search(gender, name, phone) {
        return this.patients.filter(p => {
            
            if(gender != '0') {
                let schGender = gender == '1' ? 'Male' : 'Female'
                return schGender == p.gender
            } 

            if(name && !p.name.toLowerCase().startsWith(name.toLowerCase())) {
                return false
            }

            if(phone && !p.phone.startsWith(phone)) {
                return false
            }

            return true
        })
    }

    findById(id) {

        for(let p of this.patients) {
            if(p.id == id) {
                return p
            }
        }
    }

    save(patient) {

        if(patient.id) {

            for(let i = 0; i < this.patients.length; i ++) {
                if(patient.id == this.patients[i].id) {
                    this.patients[i] = patient
                }
            }

        } else {
            patient.id = IdGenerator.generate()
            this.patients.push(patient)
        }

        let str = JSON.stringify(this.patients)
        localStorage.setItem(STORAGE, str)            
    }
}

export const MODEL = new PatientModel

