import { counter } from "./modules/select.mjs"
import { SimpleCalculatorFactory } from "./modules/simple-calculator.mjs"

window.onload = () => {

    let count = document.querySelector('#count')
    count.innerText = counter.count

    let btn = document.querySelector('#btn')
    btn.onclick = () => {
        counter.countUp()
        count.innerText = counter.count
    }

    // calculator
    let buttons = document.querySelectorAll("#calculator button[type='button']")
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let message = document.querySelector('p.message')
    
    buttons.forEach(btn => {
        btn.onclick = () => {
            if(d1.value && d2.value) {
                let calculator = SimpleCalculatorFactory.getCalculator(d1.value, d2.value)
                message.innerText = calculator[btn.innerText.toLowerCase()]()
            }
        }
    })

    // Add Element
    document.querySelector('#adder button[type="button"]').onclick = () => {

        let data = document.querySelector('#data').value

        if(data) {
            let li = document.createElement("li")
            li.innerText = data

            document.querySelector('#addResult').appendChild(li)
        }
    }

}