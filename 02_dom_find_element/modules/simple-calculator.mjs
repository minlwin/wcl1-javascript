class SimpleCalculator {

    constructor(d1, d2) {
        this.digit1 = Number.parseFloat(d1)
        this.digit2 = Number.parseFloat(d2)
    }
    
    plus() {
        return this.digit1 + this.digit2
    }

    minus() {
        return this.digit1 - this.digit2
    }

    multiply() {
        return this.digit1 * this.digit2
    }

    divide() {
        return this.digit1 / this.digit2
    }

}

export class SimpleCalculatorFactory {

    static getCalculator(d1, d2) {
        return new SimpleCalculator(d1, d2)
    }
}