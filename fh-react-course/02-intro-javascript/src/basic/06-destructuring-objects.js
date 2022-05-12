// Desestructuración
// asignación desestructurante


const person = {
  name: 'Tony',
  age: 45,
  pass: 'asjio19'
};

const {name, age} = person;

console.log(name);

const returnPerson = ({name, age, range = 'Captain'}) => {
  console.log(name, age, range);
}

returnPerson(person);

