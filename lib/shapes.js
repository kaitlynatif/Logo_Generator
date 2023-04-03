// Constructor functions written with assistance from Activities 1 & 2 in Module 10

// Parent Class Shape
class Shape {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }
}

// Extends the code in the child class Circle.
class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render(text, color, background) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${background}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`
    }
}

// Extends the code in the child class Triangle.
class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render(text, color, background) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${background}"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`
    }
}

// Extends the code in the child class Square.
class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    }
    render(text, color, background) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="20" width="150" height="150" fill="${background}"/>
        <text x="175" y="110" font-size="60" text-anchor="middle" fill="${color}">${text}</text>
        </svg>`
    }
}

module.exports = {Circle, Triangle, Square};