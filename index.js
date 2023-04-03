// Install Required Packages
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

// Render the selected shape.
// Function created with assistance from the following source:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
function selectedShape(shape, text, color, background) {
  switch (shape) {
    case "Circle":
        const circle = new Circle();
        return circle.render(text, color, background);
    case "Triangle":
          const triangle = new Triangle();
          return triangle.render(text, color, background);
    case "Square":
          const square = new Square();
          return square.render(text, color, background);
    default:
          console.log("This shape does not exist.");
          return;
  }
}

// Collect User Input to Create Logo
const questions = [
  // Shapes
  {
    type: "list",
    name: "shapes",
    message: "Which shape would you like for your logo?",
    choices: [
      { name: "Circle" },
      { name: "Triangle" },
      { name: "Square" }
    ],
  },
  // Text
  {
    type: "input",
    name: "text",
    message: "Please enter a maximum of three characters.",
    validate(value) {
      return (value.length <= 3) ? true : 'Please enter a maximum of three characters.';
      }
    },
  // Text Color
  {
    type: "input",
    name: "color",
    message: "Please enter your desired text color.",
  },
  // Background Color
  {
    type: "input",
    name: "background",
    message: "Please enter your desired background color.",
  }
]

// Initialize Application
// Function inspiration courtesy of Mini Project 28 in Module 9
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      const { shapes, text, color, background } = response;
      fs.writeFile('./Examples/logo.svg', selectedShape(shapes, text, color, background) , err => {
        if (err) {
          console.error(err);
        }
      });
      console.log('Success! Logo.svg has been generated.');
    });
    }

// Function call to initialize application
init();