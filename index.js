// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'Description',
            message: 'What is the description of your Readme?',
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Enter a list of contents'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Describe how to install application'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Describe how the application can be used'
        },
        {
            type: 'input',
            name: 'License',
            message: 'choose from the following license options',
        }
        

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
