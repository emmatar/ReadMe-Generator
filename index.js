// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// // TODO: Create a function to initialize app
function init() {
inquirer
// List of Questions
    .prompt([
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short desciption of your project:"
    },
    {
        type: 'list',
        name: 'license',
        message: "What type of license should your project have?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        default: 'npm i',
        message: "What command should be run to install dependencies?"
    },
    {
        type: 'input',
        name: 'test',
        default: 'node index.js',
        message: "What command should be run to test application?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What does the user need to know about using the repo?"
    },
    {
        type: 'input',
        name: 'credits',
        message: "What does the user need to know about contributing to the repo?"
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the test instructions?",
    }
]).then((responses) => {
    const markdown = generateMarkdown(responses);

    fs.writeFile('./NewREADME/README.md', markdown, (err) => 
    err ? console.log(err) : console.log("Successfully generated ReadMe.")
    )
})
}
// // Function call to initialize app
init();
