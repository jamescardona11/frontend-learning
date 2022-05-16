
// Funciones en JS
// const saludar = function( nombre ) {
//     return `Hola, ${ nombre }`;
// }



export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();
// console.log(user);

// Tarea
export const getActiveUser = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})
