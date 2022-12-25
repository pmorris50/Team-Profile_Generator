const Engineer = require('../lib/Engineer.js')
const berry = new Engineer('berry', '20', 'b@gmail.com', 'bgithub', 'URL') 

describe('testing engineer class', ()=>{
   it('testing engineer name key', ()=>{
    expect(berry.name).toBe('berry');
   })
   it('testing engineer name method', ()=>{
    expect(berry.getName()).toBe('berry');
   })
   it('testing engineer id key', ()=>{
      expect(berry.id).toBe('20')
   })
   it('testing engineer email key', ()=>{
      expect(berry.email).toBe('b@gmail.com');
   })
   it('testing engineer id method', ()=>{
      expect(berry.getGitHub()).toBe('bgithub');
   })
   it('testing engineer role method', () => {
      expect(berry.getRole()).toBe('Engineer');
   })
   it('testing engineer gitHubURL method', () =>{
      expect(berry.getGitHubURL()).toBe('URL');
   })


})