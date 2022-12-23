const Manager = require('../lib/Manager.js')
const berry = new Manager('berry', '20', 'b@email.com', '1') 

describe('testing Manager class', ()=>{
   it('testing employee name key', ()=>{
    expect(berry.name).toBe('berry');
   })
   it('testing Manager office number method', ()=>{
    expect(berry.getOfficeNumber()).toBe('1');
   })
   it('testing Managerid key', ()=>{
      expect(berry.id).toBe('20')
   })
   it('testing Manager email key', ()=>{
      expect(berry.email).toBe('b@email.com');
   })
   it('testing Manager officeNumber key', ()=>{
      expect(berry.officeNumber).toBe('1');
   })
   it('testing Manager role method', () => {
      expect(berry.getRole()).toBe('Manager')
   })


})