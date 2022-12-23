const Engineer = require('../lib/Engineer.js')
const berry = new Engineer('berry', '20', 'b@gmail.com', 'bgithub') 

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
      expect(berry.email).toBe('b@gmail.com');
   })
   it('testing employee id method', ()=>{
      expect(berry.getGitHub()).toBe('bgithub');
   })
   it('testing employee role method', () => {
      expect(berry.getRole()).toBe('Engineer');
   })


})