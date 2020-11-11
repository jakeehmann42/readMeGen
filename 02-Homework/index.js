const inquirer = require ('inquirer');
const  fs = require ('fs');
const util = require ('util');

const path = require ('path')

const generateMarkdown = require ('./utils/generateMarkdown')

// const writeFileAsync = util.promisify(fs.writeFile);

const questions = [


        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your desription of the project?",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps required for installation?",
            name: "installation"
        },
        {
            type: "input",
            message: "Instructions on how to use",
            name: "instructions"
        },
        {
            type: "input",
            message: "Contributors?",
            name: "contribution"
        },
        {
            type: "checkbox",
            message: "Type of License?",
            choices: [
                "Apache",
                "MIT",
                "GNU GPLv3"
            ],
            name: "license"
        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address",
            name: "email"
        },
]





// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Creating README...");
        writeToFile("README.md", generateMarkdown({
            ...answers
        })) 
    })
}

// function call to initialize program
init();
