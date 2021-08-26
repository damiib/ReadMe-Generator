// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require ('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
        default: 'npm i'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using your project?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a lincense',
        choices:['MIT', 'Apache 2.0', 'GPL 3.0', 
    'Boost Software', 'none']
      },
      {
        type: 'input',
        name: 'test',
        message: 'What are your test instructions?', default: 'npm test'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'What does reader needs to know about contributing to your project?',
      },
      

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=>{
        console.log(data);
        writeToFile('README.md', generateMarkdown({ ...data }))
    })
}

// Function call to initialize app
init();




//