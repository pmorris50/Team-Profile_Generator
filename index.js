//const Employee = require('./Employee')
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');
const questions = require('./questions');
const fs = require('fs');
const team = [];

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
addManager(team.manager) {
    return `<div class = row>
    <div class="card" >
        <div class="card-body">
          <h5 class="card-title">${team.manager.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">ID: ${team.manager.id}</li>
                <li class="list-group-item">Email: ${team.manager.email}</li>
                 <li class="list-group-item">Office number: ${team.manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`
};


function addEngineer() {
    inquirer.prompt(questions.engineer)
        .then(data => {
            let employee = new Engineer(data.name, data.id, data.email, data.github)
            team.push(employee)
            console.log(team)
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
            console.log(team)
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
    fs.writeFileSync('./dist/team.html', managerCard(team.manager), (err) => err ? console.log(err) : console.log('success'))
    // call at end of each addEmployee function at else


}


function init() {


}