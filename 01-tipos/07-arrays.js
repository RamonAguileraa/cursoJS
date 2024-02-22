let animales = ['Perro', 'Caballo']; 

console.log(animales);
console.log(animales[0]); // Accerder al primer elemento

//Agregar nuevos valores al arreglo desde el siguiente numero en el indice (0 y 1 ya estan siendo utilizados arriba.)
animales[2] = 'dragon';
console.log(animales);

//detecta que hay espacios vacios y luego ya aparece en la consola el 10, los demas no aparecen pero su longitud es de 11
animales[10] = 'tiburon';
//Mostramos un valor que no existe y detecta undefined
console.log(animales[7]);
//Nos dice que es un objeto pq los arrays se comportan como objetosd y podemos acceder a las propiedades
console.log(typeof animales);
//propiedad lenght devuelve la cantidad de elementos dentro del array en especifico 
console.log( animales.length );