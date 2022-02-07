

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;



export const retornaArreglo = () =>{
    return ['ABC', 123];
}

//const [letras, numeros] = retornaArreglo();


// Tarea
// 1. el primer valor del arr se llamará nombre
// 1. el segundo valor del arr se llamará setNombre
const suseState = ( valor ) =>{
    return [ valor, ()=>{console.log('Hola Mundo') } ];
}

