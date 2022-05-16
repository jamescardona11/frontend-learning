
import {getUser, getActiveUser} from '../base/05-funciones'

describe('testing file for 5-funciones', () => { 
  test('getUser should return an object', () => { 
    //arrange
    const initialObject = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };

    //act    
    const result = getUser();

    // assert
    expect(result).toEqual(initialObject);
   })

  test('getActiveUser should return an object with the given <name>', () => {

    //arrange
    const name = 'James';
    const initialObject = {
        uid: 'ABC567',
        username: name
    };

    //act    
    const result = getActiveUser(name);

    // assert
    expect(result).toEqual(initialObject);
    })
 })