// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "none") {
    return "";
  }
  return `![Github Badge](https://img.shields.io/badge/license-${license}-blueviolet)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "none") {
    return "";
  }
  return "* [License](#license)";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return "";
  }
  return `## License
  
  This project has a ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //These are the things that we need: section for the description, installation, usage, contributing, test, table of contents, license and questions
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table Of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [Test](#test)

  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  [${data.GitHub}](https://github.com/${data.GitHub})

If you have questions, please contact me at: ${data.Email}

`;
}

module.exports = generateMarkdown;
