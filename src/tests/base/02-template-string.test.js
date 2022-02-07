import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-Template-string";

describe('Pruebas en  02-template-string.test.js', ()=>{

    test('getSaludo debe de retornar hola Jaime!',()=>{
        const nombre = 'Jaime';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe( 'Hola '+nombre+'!');
    })

    test('getSaludo debe de retornar hola Carlos! si no hay argumento nombre',()=>{

        const saludo = getSaludo();

        expect(saludo).toBe( 'Hola Carlos!');
    })
});