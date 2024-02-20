// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, github, email) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Contact](#)

  ## Installation
    ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits 
  ${data.credits}

  ## License 
  ${data.license}

  ## Tests 
    ${data.test}

  ## Contact
  
  To see more of my projects or how to contribute, click on my GitHub username here --> [${github}](https://github.com/${github})

  ...aaaaand...

  If you REALLY need to get intouch with me, send me an email here --> ${email}


  

  `
}
// above github and email need to display in contact section of readme. Both currently read "undefined"



module.exports = generateMarkdown;
