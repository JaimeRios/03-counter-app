
// Desestructuracion
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre,edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const suseContext = ({clave, nombre, edad, rango='Capitán'})=>{
    
    //console.log( edad, clave, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.1232,
            lng: -12.2365
        }
    }
}

const {nombreClave,anios, latlng: { lat, lng } } = suseContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
