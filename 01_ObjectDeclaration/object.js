/**
 * Object Declaration
 */
let student = {
    // Instance Variable
    _name: "Thidar",
    // Function as Instance Variable (Method)
    greet: function() {
        return `My name is ${this.name}`
    },
    // Method Notation
    sayHello(name) {
        return `Hello ${name}, I am ${this.name}`
    },
    // Accessors
    get name() {
        return this._name
    },
    set name(name) {
        this._name = name 
    }
}

/**
 * Constructor
 */
function Person(name) {
    // Instance Variable
    this.name = name
    // Function as Instance Variable (Method)
    this.greet = function() {
        return `My name is ${this.name}`
    }
}

/**
 * Using Class
 */
class Dog  {

    constructor(name, color, age) {
        this.name  = name
        this.color = color
        this.age = age
    }

    sayName = function () {
        return `I am ${this.color} ${this.name}`
    }

    greet() {
        return  `I am ${this.name}`
    }

    get wow() {
        return "Wow Wow Wow"
    }

    set nameAndColor(value) {
        let array = value.split(",")
        this.name = array[0]
        this.color = array[1]
    }
}