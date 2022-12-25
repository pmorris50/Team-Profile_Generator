const Employee = require('./Employee')



class Engineer extends Employee {
    constructor(name, id, email, github, gitHubURL) {
        super(name, id, email)
        this.github = github
        this.gitHubURL =gitHubURL
    }
    getGitHub(){
        return this.github
     }
    getRole(){
        return 'Engineer'
    }
    getGitHubURL(){
        return this.gitHubURL
    }
}

module.exports = Engineer