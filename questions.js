const questions = [
    {
        type: 'input',
        name: 'name',
        message: "what is the employee's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?"

    },
    {
        type: 'list',
        name: 'title',
        message: "what is the employee's title?",
        choices: ['Manager', 'Engineer', 'Intern',]
    },
    {
        type: 'input',
        name: 'school',
        message: "what School did this Employee go to?"
    },
    {
        type: 'list',
        name: 'office',
        message: "Where is the Employee's office?",
        choices: ['1', '2', '3', '4', 'intern-bay']
    }
]