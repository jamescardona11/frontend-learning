console.log('Hola Mundo')

// Functions
// no es tan recomendable usar function sin asignar a una variable
const sayHello = function(name){
  return `Hello ${name}`;
}

const sayHello2 = (name) => `Hello ${name}`;


console.log(sayHello('James'));
console.log(sayHello2('Jhon'));


const getUser = () =>
  ({
    uid: 'Abasa12',
    username: 'asjasia'
  })

  console.log(getUser());


  // useState
  const useState = (value) => {
    return [value, ()=> {console.log('Hey bro')}];
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState('Goku');

  setName();