const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

async function promptUser() {
    const userResonse = 
    await inquirer.prompt([
      {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },

    {
        type: "input",
        message: "What is the title of your Project?",
        name: "projectT"
    },

    {
        type: "input",
        message: "What is the description of your project?",
        name: "projectD"
    },

    {
        type: "input",
        message: "List your table of contents here",
        name: "contents"
    },

    {
        type: "input",
        message: "Provide instructions for how to install.",
        name: "install"
    },

    {
        type: "input",
        message: "Provide instructions for use.",
        name: "instruction"
    },

    {
        type: "list",
        message: "Select license used:",
        name: "licenseName"
        choices: [
            "MIT",
            
        ]
    },

    {
        type: "input",
        message: "please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space! )",
        name: "contributorsGitUserName"
    },

    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    }
    ]);

    console.log(userResonse);
}


    promptUser();



// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
