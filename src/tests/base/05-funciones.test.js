import { getUser, getUsuarioActivo } from '../../base/05-funciones'

describe('Pruebas en 05-funciones', ()=>{

    test('getUser debe de retornar un objeto', ()=>{
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    });

    test('getUsuarioActivo debe retorna un objeto', ()=>{
        
        const userTest = {
            uid: 'ABC567',
            username: 'Jshuin'
        }

        const user = getUsuarioActivo('Jshuin');
        expect(user).toEqual(userTest);
    })
})