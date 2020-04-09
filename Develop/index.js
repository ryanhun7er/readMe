const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');

//pull in user input

const gitUsername = userResponse.username;
const projectT = userResponse.projectT;
const projectD = userResponse.projectD;
const contents = userResonse.contents;
const install = userResponse.install;
const instruction = userResponse.instruction;
const licenseName = userResponse.licenseName;
const contributorUserNames = userResponse.contributors;
const tests = userResponse.tests;
    
//retrieve data from git
    
const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
const gitData = gitResponse.data;
const gitName = gitData.login;
const gitEmail = gitData.email;
const gitLocation = gitData.location;
const gitUrl = gitData.html_url;
const gitProfileImage = gitData.avatar_url;
//const contributorUserNamesArray = contributorUserNames.split(",");

//user questions

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
        name: "licenseName",
        message: "Select license used:",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Mozilla Public License 2.0",
            "Apache License 2.0",
            "The Unlicense"            
        ]
    },

    {
        type: "input",
        message: "Please enter any contributers to the project (seperate Github names with a comma)",
        name: "contributors"
    },

    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    }
    ]);

    console.log(userResonse);
}

//script for writing inputs to readme
var userInput = (`

# ${projectT}
*${projectD}

## Table of Contents
*${contents}

## Installation
*${install}

## Instructions for Use
*${instruction}

## License
*${licenseName}

## Contributors
*${contributorUserNames}

## Testing
*${tests}

## Contact
\n![ProfileImage](${gitProfileImage})
*${gitName}
*${gitEmail}
*${gitLocation}
*${gitUrl}


`)

//write and create readme

var writeResult = fs.writeFileSync(README.md, userInput)


    promptUser();




