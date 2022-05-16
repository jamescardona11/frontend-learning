import {getSaludo} from '../../base/02-template-string'

describe('testing file for 02-template-string', () => { 
  test('getSaludo should return Hola <name>', () => {  

    // arrange
    const name = 'James';

    // act
    const result = getSaludo(name);
    
    // assert
    expect(result).toBe('Hola '+ name);

  })
 })