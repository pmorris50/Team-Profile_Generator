const questions = {
    manager: [
        {
            type: 'input',
            name: 'name',
            message: "'What is the Manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the Manager's office number?"
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Would you like to add another team Member?",
            choices: ["Add an Engineer", "Add an Intern" , "Finish Building my team"]
        }
    ],
    engineer: [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: "id",
            message: "What is the engineer's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github?"
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Would you like to add another team Member?",
            choices: ["Add an Engineer", "Add an Intern" , "Finish Building my team"]
        }
      
    ],
    intern: [
        {
            type: 'List',
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: "id",
            message: "What is the intern's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'List',
            name: "school",
            message: "What school did the intern go to?"
        },
        {
            type: 'list',
            name: 'addTeamMember',
            message: "Would you like to add another team Member?",
            choices: ["Add an Engineer", "Add an Intern" , "Finish Building my team"]
        }
        
     ]
}
module.exports = questions

