const { getSystemErrorName } = require("util");

class Employee {
    constructor(name, id, email, title, school, office){
    this.name = name;
    this.id = id;
    this.email = email
    this.title = title
    this.school = school
    this.office = office
    }
}
function renderEmployee(){
//function to dynamically create new Employee Object    
}
var EmployeeOne = new Employee('Patrick', '58', 'patrickmorris532@gmail.com', 'intern', 'TCU', 'none')

var EmployeeTwo = new Employee('John', '50', 'johnDeere@tractor.com', 'Engineer', 'Texas A&M', '2')

var EmployeeThree = new Employee('Karen', '3', 'KarenCallsThePolice@gmail.com', 'intern', 'Texas Tech', 'none')

var EmployeeFour = new Employee




console.table(EmployeeOne)
console.table(EmployeeTwo);
// }
// askName(){
//     return this.name;
// }
// askId(){
//     return this.id
// }
// askEmail(){
//     return this.email
// }

