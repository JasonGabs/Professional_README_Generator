// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "") {
    return `- [License](#license)`;
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `## License`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## decription
  ${data.description}
  ## Table of Contents
  ${renderLicenseBadge(data.badges)}
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink("")}

## Installation  
${data.installation}
## Usage

## Credits

${renderLicenseSection("blah")}

## Badges
${renderLicenseBadge(data.badges)}
## Features

## How to Contribute

## Tests

## Contact
- ${data.email}
- ${data.github}
`;
}

module.exports = generateMarkdown;
