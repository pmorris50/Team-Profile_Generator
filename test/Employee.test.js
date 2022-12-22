const Employee = require('../lib/Employee.js')
const berry = new Employee('berry', '20', 'b@email.com') 

describe('testing Employee class', ()=>{
   it('testing employee name key', ()=>{
    expect(berry.name).toBe('berry')
   })
   it('testing employee name method', ()=>{
    expect(berry.getName()).toBe('berry')
   })

})
