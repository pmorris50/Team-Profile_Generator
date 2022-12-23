const Employee = require('../lib/Employee.js')
const berry = new Employee('berry', '20', 'b@email.com') 

describe('testing Employee class', ()=>{
   it('testing employee name key', ()=>{
    expect(berry.name).toBe('berry');
   })
   it('testing employee name method', ()=>{
    expect(berry.getName()).toBe('berry');
   })
   it('testing employee id key', ()=>{
      expect(berry.id).toBe('20')
   })
   it('testing employee email key', ()=>{
      expect(berry.email).toBe('b@email.com');
   })
   it('testing employee id method', ()=>{
      expect(berry.getId()).toBe('20');
   })
   it('testing employee role method', () => {
      expect(berry.getRole()).toBe('Employee')
   })


})
