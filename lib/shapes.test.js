// [SVG Logo Generator Video Tutorial](https://youtu.be/GJYMcLus3v0)
// This video tutorial assisted me in writing my shapes.test.js

const {Circle, Triangle, Square} = require('./shapes');

// Testing Circle Shape
describe('Circle', () => {
    test('should pass if render() is called', () => {
        const shape = new Circle();
        expect(shape.render("Las", "red", "blue")).toEqual(`<svg version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="blue"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Las</text>
        </svg>`
        );
    });
});

// Testing Triangle Shape
describe('Triangle', () => {
    test('should pass if render() is called', () => {
        const shape = new Triangle();
        expect(shape.render("Las", "red", "blue")).toEqual(`<svg version="1.1" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"/>
        <text x="150" y="170" font-size="60" text-anchor="middle" fill="red">Las</text>
        </svg>`
        );
    });
  });

  // Testing Square Shape
describe('Square', () => {
    test('should pass if render() is called', () => {
        const shape = new Square();
        expect(shape.render("Las", "red", "blue")).toEqual(`<svg version="1.1" width="300" height="200">
        <rect x="100" y="20" width="150" height="150" fill="blue"/>
        <text x="175" y="110" font-size="60" text-anchor="middle" fill="red">Las</text>
        </svg>`
        );
    });
});