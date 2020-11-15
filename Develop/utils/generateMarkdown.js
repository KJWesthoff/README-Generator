licenses = require('./licenseList');  



// function to generate markdown for README
function generateMarkdown(data) {
  licenseObj = licenses[data.license]; 

  return `
  # Project Title: ${data.title} 
  ### [![License](${licenseObj.iconLink})](${licenseObj.link})
  
  ## Table of contents:
  1. [Title](#Project-Title)
  1. [License](#License)
  1. [Project Description](#Project-Description)
  1. [Installation](#Installation-Instructions)
  1. [Useage](#How-To-Use)
  1. [How to Contribute](#How-to-Contribute)
  1. [Test Instructions](#Test-Instructions)
  1. [Questions](#Questions)

  ## License: 
  ### This project is licensed under ${licenseObj.name} (click on icon near the top):
  or here: [${licenseObj.name}](${licenseObj.link})
 

  ## Project Description:
  ${data.description}
  ## Installation Instructions:
  ${data.installation}
  ## How To Use
  ${data.useage}
  ## How to Contribute:
  * ${data.contributing}
  * Checkout the github repo and please raise any issues with ${data.title} you come across 
  * Even better - help with bugfixes and features by submitting your solutions in pull requrets for the repo 
  ## Test Instructions
  ### The testing strategy is as follows
  #### ${data.testinstructions}

  ## Questions
  ### Github page:
  [GitHub](${data.githubrepolink})
  ### email:
  [${data.email}](mailto:${data.email}) 
`;
}


module.exports = generateMarkdown;
