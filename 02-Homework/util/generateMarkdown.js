// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license, data.github, data.title)}

  ## Description

  
  ${data.description}



  ## Table of Contents


  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}

  * [Contributing](#contributing)

  * [License](#license)

  * [Questions](#questions)



  ## Installation

  
  ${response.installation}



  ## Usage


    ${response.usage}


    ${renderLicenseSection(date.license)}

  ## Contributing


    ${response.contribution}



  ## License


    For more information about licenses, please click on the link below.

  - [License](https://opensource.org/licenses/${response.license})



  ## Questions
  

    If you have any questions about my generator feel free to reach my via email at: ${response.email}

    Or you can follow this link below to be directed to my GitHub page:
  - [GitHub Profile](https://github.com/${response.username})

  `;
}


function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `\n* [license] (#license)\n`
    )
  }
  return ""
}




function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license] ()`
  }
  return ""
}


function renderLicenseSection(license) {
  if (license === "None") {
    return (
      `## License

  Your project is licensed under ${license}.`
    )
  }
  return ""
}

module.exports = generateMarkdown;