import {getHeroeByIdAsync} from '../base/09-promesas'
import {heroes} from '../base/08-imp-exp'

describe('testing promise', () => { 
  test('should be return an heroe', (done) => { 

    const id = 1;

    getHeroeByIdAsync(id).then(heroe => {

      expect(heroe ).toBe(heroes[0])
      done();
    });

    
   })
 })