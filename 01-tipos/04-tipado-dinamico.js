let numero = 42; 
let nombre = 'Hola mundo'; 
let verdadero = true;  
let undef; 
let nulo = null; 

console.log(typeof numero); // bien
console.log(typeof nombre); // bien
console.log(typeof verdadero); // bien
console.log(typeof undef); // bien
console.log(typeof nulo); // devuelve un object porque la implementacion del navegador en valores primitivos nos dice que la funcion de typeoff retorna el valor que nosotros le pasamos y en null object
