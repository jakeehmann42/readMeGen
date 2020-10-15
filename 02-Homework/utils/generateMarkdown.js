// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license, data.github, data.title)}

  ## Description

  
  ${data.description}



  ## Table of Contents


  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [License](#license)

  * [Questions](#questions)



  ## Installation

  
  ${response.installation}



  ## Usage


    ${response.usage}



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


function generateProjectURL() {

}




function renderLicenseBadge() {

}

// gonna be honest not sure how to use these functions.

function renderLicenseSection() {

}



module.exports = generateMarkdown;
