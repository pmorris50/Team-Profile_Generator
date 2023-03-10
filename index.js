//const Employee = require('./Employee')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const questions = require('./questions');
//const htmlMetaAndHeader = require('./htmltemplate')
const fs = require('fs')
const team = []
// let currentManager = team.filter(Manager);
// let currentEngineer = team.filter(Engineer);
// let currentIntern = team.filter(Intern);

function addManager() {
    inquirer.prompt(questions.manager)
        .then(data => {
            //console.table(data);
            let employee = new Manager(data.name, data.id, data.email, data.office)
            // console.log(employee);
            team.push(employee)
            //console.log(team)
            if (data.addTeamMember === 'Add an Engineer') {
                return addEngineer()
            } else if (data.addTeamMember === "Add an Intern") {
                return addIntern();
            } else if (data.addTeamMember === "Finish Building my team") {
                return teamBuilt()
            }
        })
}
addManager();

function managerCard(manager) {
    let managerArray = team.filter((currentEmployee) => {
        return currentEmployee.getRole() == 'Manager';
    })

   // console.log(managerArray)

return managerArray.map((data) =>{
    return `
    <div class="card text-center col-md-6 col-lg-3 m-auto" >
        <div class="card-body">
        <div class = 'card-header'>
          <h5 class="card-title">${data.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
          </div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href ="mailto: ${data.email}"> ${data.email}</a></li>
                 <li class="list-group-item">Office number: ${data.officeNumber}</li>
            </ul>
        </div>
    </div>
`
})
 
};
function engineerCard(engineer) {
    let engineerArray = team.filter((currentEmployee) => {
        return currentEmployee.getRole() == 'Engineer';
    })

   // console.log(engineerArray)

return engineerArray.map((data) =>{
    return `
    <div class="card text-center col-md-6 col-lg-3 m-auto" >
        <div class="card-body">
        <div class = 'card-header'>
          <h5 class="card-title">${data.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
          </div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: <a href ="mailto: ${data.email}"> ${data.email}</a></li>
                 <li class="list-group-item">Github Profile: <a href = "${data.gitHubURL}"> ${data.github}</a></li>
            </ul>
        </div>
    </div>
`
})
 
};
function internCard(){
    let internArray = team.filter((currentEmployee) =>{
        return currentEmployee.getRole() == 'Intern';
    })
    //console.log(internArray)
    return internArray.map((data) =>{
        return `
        <div class="card text-center col-md-6 col-lg-3 m-auto" >
            <div class="card-body">
            <div class = 'card-header'
              <h5 class="card-title">${data.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
              </div>
                 <ul class="list-group list-group-flush">
                     <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href = "mailto: ${data.email}"> ${data.email}</a></li>
                     <li class="list-group-item">School: ${data.school}</li>
                </ul>
            </div>
        </div>
    `
    })
}


function addEngineer() {
    inquirer.prompt(questions.engineer)
        .then(data => {
            let employee = new Engineer(data.name, data.id, data.email, data.github)
            team.push(employee)
            //console.log(team)
            if (data.addTeamMember === 'Add an Engineer') {
                return addEngineer()
            } else if (data.addTeamMember === "Add an Intern") {
                return addIntern();
            } else if (data.addTeamMember === "Finish Building my team") {
                return teamBuilt()
            }
        })


}



function addIntern() {
    inquirer.prompt(questions.intern)
        .then(data => {
            let employee = new Intern(data.name, data.id, data.email, data.school)
            team.push(employee)
           // console.log(team)
            if (data.addTeamMember === 'Add an Engineer') {
                return addEngineer()
            } else if (data.addTeamMember === "Add an Intern") {
                return addIntern();
            } else if (data.addTeamMember === "Finish Building my team") {
                return teamBuilt()
            }

        })

}


function teamBuilt() {

    fs.writeFileSync('./dist/team.html',renderHTML(), (err) => err ? console.log(err) : console.log('success'))
    // call at end of each addEmployee function at else


}



const renderHTML = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Team Profile Generator</title>
    </head>
    <body>
        <header>
            <h1 class ='text-center bg-primary text-white'> My Team</h1>
    <main class = 'container'>
    <div class = 'row'>
    ${managerCard()}
    ${engineerCard()}
    ${internCard()}
    `

}
//console.table(team);