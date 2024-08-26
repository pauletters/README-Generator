// These are the required packages for this project
import inquirer from 'inquirer';
import fs from 'fs';
import  generateMarkdown  from './utils/generateMarkdown.js';
import { type } from 'os';

// These are the array of questions that will be asked to the user along with a function to fill the template with the user's answers
function promptUser() {
    const questions = [
        {
            name: 'title',
            type: "input",
            message: "What is the title of your project?"
        },
        {
            name: 'description',
            type: "input",
            message: "Please provide a description of your project:"
        },
        {
            name: 'installation',
            type: "input",
            message: "Please provide installation instructions:"
        },
        {
            name: 'usage',
            type: "input",
            message: "Please provide usage information:"
        },
        {
            name: 'license',
            type: "list",
            message: "Please select a license:",
            choices: ['MIT', 'Apache', 'GPL', 'BSD']
        },
        {
            name: 'contributing',
            type: "input",
            message: "Please provide contribution guidelines:"
        },
        {
            name: 'tests',
            type: "input",
            message: "Please provide test instructions:"
        },
        {
            name: 'github',
            type: "input",
            message: "Please provide your GitHub username:"
        },
        {
            name: 'email',
            type: "input",
            message: "Please provide your email address:"
        }
    ];

    // const answers = await inquirer.prompt(questions);
    // const markdown = generateMarkdown(answers);
    // fs.writeFileSync('README.md', markdown);

    inquirer.prompt(questions).then((answers) => {
        const userReadMe = fillTemplate(answers);
        writeFile(userReadMe);
        // generateMarkdown(answers);
    });
}
// Function to initialize app
function fillTemplate(answers) {
    return`
${generateMarkdown(answers)}

# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

 ## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
`;
};

function writeFile(userReadMe) {
    fs.writeFile('README.md', userReadMe, (err) =>
        err ? console.error(err) : console.log('A README.md was created!')
    );
}

// Function call to initialize app
promptUser();

