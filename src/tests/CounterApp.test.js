import CounterApp from "../CounterApp";
import {shallow} from 'enzyme'
import React from 'react';

describe('Pruebas en <CounterApp />', ()=>{

    let wrapper = shallow(<CounterApp />);

    beforeEach(() =>{
        wrapper = shallow(<CounterApp />);
    })

    test('debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {

        const wrapper = shallow(<CounterApp value={100} />);
        expect(wrapper).toMatchSnapshot();
        const textoParrafo = wrapper.find('h2').text().trim();
        expect(textoParrafo).toBe('100');
    });
    
    test('debe de incrementar con el boton de +1', () => {

        wrapper.find('button').at(0).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');

    });

    test('debe de incrementar con el boton de -1', () => {

        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');

    });

    test('debe de colocar el valor por defecto con el btn reset', () => {

        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        let counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('107');
        wrapper.find('button').at(1).simulate('click');
        counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');

    });

})