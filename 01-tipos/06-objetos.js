// Personaje de TV
let nombre = 'Homero';
let serie = 'The simpsons';
let edad = 46;

let personaje = {
    nombre:'Homero',
    serie:'The simpsons',  //Creamos un objeto con propiedades 
    edad: 46,              //con las llaves que nos indican que hay un objeto y dentro sus propiedades
};


console.log(personaje);
console.log(personaje.edad); // Acceder a una propiedad en especifico
console.log(personaje['serie']); //Con parentesis cuadrados tambien indicamos a la propiedad en especifico

personaje.nombre = 'Marge'; //Actualizamos o modificamos datos

let llave = 'edad';  //Llamamos llave al valor para posteriormente llamarlo para acceder a el abajo recomendable para iterar
personaje [llave] = 43;
delete personaje.edad;
console.log(personaje);