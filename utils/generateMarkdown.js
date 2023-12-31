function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    return "";
  }
}

function renderLicenseLink(license) {
  if (license !== "") {
    return `- [License](#license)`;
  }
  return ""
}

function renderLicenseSection(license) {
  if (license !== "") {
    return `## License`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  ${renderLicenseBadge(data.badges)}
  - [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Badges](#badges)
- [Features](#features)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseLink("")}
## decription
${data.description}
## Installation  
${data.intallation}
## Usage
${data.usage}
## Credits
${data.credits}
## Badges
${renderLicenseBadge(data.badges)}
## Features
${data.features}
## How to Contribute
${data.contributions}
## Tests
${data.tests}
## Questions
- ${data.email}
${data.github}
`;
}

module.exports = generateMarkdown;
