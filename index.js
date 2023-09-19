var inquirer = require('inquirer');
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "list",
        name: "badges",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache", "Mozilla"]
    },
    {
        type: "input",
        name: "intallation",
        message: "How do you install the project?"
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use your project?"
    },
    {
        type: "input",
        name: "credits",
        message: "Who are the accreditors of your project?"
    },
    {
        type: "input",
        name: "features",
        message: "What are the features of your project?"
    },
    {
        type: "input",
        name: "contributions",
        message: "How can someone contribute to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How can you run tests on the project?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email for the project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your github account name with the project?"
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README file!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);
      writeToFile("./utils/README.md", markdownContent);
    })
}

// Function call to initialize app
init();
