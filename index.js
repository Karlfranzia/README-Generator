
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide any testing instructions for this project:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'ISC License', 'No License']
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

// Initializes program
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile('READMEtest.md', markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}


init();
