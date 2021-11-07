import { FormuT } from './FormuT';

describe('FormuT', () => {
   //prueba 1, con numero positivos y enteros

   it('Fuerza 5 por distancia 7 = 35', () => { 
    
     const result = FormuT(5,7);
     expect(result).toBe(35);

   })

   //prueba 2, con numero negativos y enteros

   it('Fuerza -2 por distancia -3 = 6', () => {

     const result = FormuT(-2,-3);
     expect(result).toBe(6);
   })

   //prueba 3, numeros negativos por positivos
    it('Fuerza -2 por distancia 2 = error', () => {
	    
     const result = FormuT(-2,2);
     expect(result).toBe('error');
    })
})

