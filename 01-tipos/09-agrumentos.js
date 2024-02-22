//se llaman parametros el echo de poner una variable dentro de las funciones
function suma(a, b) { 
   console.log(arguments); //poder acceder a todos los valores / no recomendado
    return a + b; 
}//las funciones pueden recibir muchos argumentos y muchos parametros
//Agregamos un valor a la funcion suma y se llaman argumentos a = 5
let resultado = suma(5,6,1,2,4);
console.log(resultado);
//dice que es tipo function
console.log(typeof suma);