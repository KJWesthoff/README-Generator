const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');
const licenses = require('./utils/licenseList');


// array of inquirer questions objects for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else {
            console.log("please enter your project title");
            return false;
          }
        }
    },
    
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project in a few words',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else {
            console.log("please enter a project description");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write how to install your project',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else {
            console.log("please enter a project description");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Write how to use the application',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else {
            console.log("please write a useage description");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Write how to contribute',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else {
            console.log("please enter a project description");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'testinstructions',
        message: 'Write test instruction',
        validate: nameInput => {
          if(nameInput){
            return true;
          } else {
            console.log("please enter test instructions");
            return false;
          }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this project under (Pick the one that apply)',
        choices: Object.keys(licenses),
        
    },
    {
        type: 'input',
        name: 'githubrepolink',
        message: 'Enter the GitHub link to your project. Either as URL or as /<githubuserame>/<reponame>',
        validate: nameInput => {
            testgithub = /.+(github.com)\/(.+)\/(.*)/.test(nameInput); //regex test if c-p url 
            if(testgithub){
                return true;
            } 
            else if(/\/(.+)\/(.+)/.test(nameInput)) {
                console.log("Is your repo URL https://github.com/"+ nameInput+ "?");
                return true;
            }
                else {
                console.log("please enter a GitHub repo URL");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email for contact regarding the project (Required)',
        validate: nameInput => {
            validemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(nameInput); //regex test for valid email
            
            if(validemail){
                return true;
          } else {
            console.log("please enter a email address");
            return false;
          }
        }
    },


];



const promptUser = () => {  
    return inquirer.prompt(questions);
};



// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName +'.md', data, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: fileName + "File Created"
            });
        });
    });
};

// function to initialize program
function init() {
    promptUser().then(data =>{
        let mdStr = generateMarkdown(data);
        writeToFile("Readme-test", mdStr);
    });
}

// function call to initialize program
init();
