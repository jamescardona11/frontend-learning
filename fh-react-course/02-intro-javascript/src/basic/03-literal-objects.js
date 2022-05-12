console.log('Hola Mundo')


const me = {
  name: 'James',
  surname: 'Cardona',
  age: 29,
  address: {
    city: 'Medelling',
    zip: '05001000'
  }
};

console.log({ me });

// Asignación de referencia
const me2 = me;
me2.name = 'Jhon';

console.log(me2);


/// nueva referencia
console.log({...me});


