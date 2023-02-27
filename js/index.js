/*
1.	Crear una variable llamada miNombre y guardar en ella su primer nombre.
2.	Crear una variable llamada miApellido y guardar en ella su apellido.
3.	Crear una variable llamada miEdad y guardar en ella su edad.
4.	Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
5.	Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
6.	Visualizar todas las variables dentro de la consola del navegador escribiendo el nombre de cada una de ellas.
7.	Crear una variable llamada nombreCompleto y guardar en ella la concatenación de miNombre y miApellido.
8.	Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido con todas las variables creadas hasta el momento.
9.	Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y calcular sus respectivas operaciones con las variables miEdad y edadMascota.
10.	Realizar la carga de las variables del punto 1 al 5 utilizando prompt() y luego ejecutar el código correspondiente para realizar los puntos del 6 al 9 con los datos cargados.
11.	Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.
12.	Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho objeto utilizando console.table() y también mostrar cada una de las propiedades del objeto por separado.

*/


// // Solicita al usuario que ingrese varias variables separadas por comas
// let input = prompt("Ingrese nombre,apellido,edad,mascota y edad de mascota separadas por comas y en ese orden");
// // Divide la entrada en diferentes variables usando la función split()
// let variables = input.split(",");
// let miNombre =variables[0];
// let  miApellido = variables[1];
// let miEdad = parseInt (variables[2]);
// let miMascota = variables[3];
// let edadMascota = parseInt(variables[4]);

let miNombre = "Monica";
let  miApellido = "Melgarejo";
let miEdad = 27;
let miMascota = "no tengo";
let edadMascota = 0;
let  nombreCompleto = `${miNombre} ${miApellido}`;
let textoPresentacion = `Hola soy ${nombreCompleto}, tengo ${miEdad} años. Por el momento, mascotas ${miMascota}.`;
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad -  edadMascota ;
let productoEdades = edadMascota * miEdad;
let divisionEdades = edadMascota / miEdad;
let alumno = {
    nombreCompleto: nombreCompleto,
    curso: "Introduccion al desarrollo Frontend",
    institucion: "Mind Hub",
    presentacionAlumno: textoPresentacion,
    promedioCalificacion: sumaEdades
}
let mascota = {
    nombreCompleto: "Pochita",
    tipoMascota: "demon",
    edadAnios: 2,
    presentacionMascota: "Pochita (ポチタ,, Pochita) es el Demonio Motosierra (チェンソーの悪魔, Chensō no akuma) que encarna el miedo a las motosierras. Era el original Hombre Motosierra (チェンソーマン, Chensō Man) antes de convertirse en el corazón de Denji.",
    habilidades: "Eliminación del demonio: El Demonio Motosierra es capaz de consumir a otros demonios, causando que el miedo que representan desaparezca de la conciencia pública mientras también borra su existencia física, demostrado por el hecho de que Kishibe no sabía sobre cosas históricas como el holocausto, los nazis e incluso la bomba nuclear, lo que significa que el Demonio Motosierra en algún momento consumió a sus respectivos demonios."
}




console.log (`${miNombre}, ${miApellido}, ${miEdad}, ${miMascota}, ${edadMascota}`);
console.log(nombreCompleto);
console.log(textoPresentacion);
console.log(`${sumaEdades}, ${restaEdades}, ${productoEdades}, ${divisionEdades}`);
console.table(alumno);
console.table(mascota);




