
describe('Pruebas en el demo file', () => {  

  test('Deben ser iguales los strings', () => { 

  // arange
  const text = 'Hola';

  // act
  const toLowerCase = text.toLowerCase();

  // assert
    expect( text.toLowerCase() ).toBe( toLowerCase );
 });
})

