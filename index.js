// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short desciption of your project:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },


    ,
    "Please write a short desciption of your project:",
    "What knd of license should your project have?",
    "What command should be run to install dependencies?",
    "What does the user need to know about using the repo?",
    "What does the user need to know contributing to the repo?",
    "Generating README..."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
