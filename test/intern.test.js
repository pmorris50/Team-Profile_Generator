const Intern = require('../lib/Intern.js')
const berry = new Intern('berry', '20', 'b@gmail.com', 'TCU') 

describe('testing Employee class', ()=>{
   it('testing employee name key', ()=>{
    expect(berry.name).toBe('berry');
   })
   it('testing employee school method', ()=>{
    expect(berry.getSchool()).toBe('TCU');
   })
   it('testing employee id key', ()=>{
      expect(berry.id).toBe('20');
   })
   it('testing employee email key', ()=>{
      expect(berry.email).toBe('b@gmail.com');
   })
   it('testing employee school key', ()=>{
      expect(berry.school).toBe('TCU');
   })
   it('testing employee role method', () => {
      expect(berry.getRole()).toBe('Intern');
   })


})