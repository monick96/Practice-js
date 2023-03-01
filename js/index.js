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
13.	Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
14.	Crear un array llamado números con un mínimo de 5 elementos y mostrar por consola el array completo y cada uno de los elementos por separado.
15.	Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el array completo y cada uno de los elementos por separado.
16.	Crear una variable llamada textoAleatorio formando una frase con el segundo elemento del array del punto 13, el cuarto elemento del punto 14 y el quinto objeto del array del punto 15.
17.	Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar por consola los resultados de comparar los valores y guardarlos en variables llamadas por ejemplo: edadesIguales, soyMayor, soyMenor, etc. Y mostrar mensajes en consola como los siguientes:
a.	Mi edad es igual a la de mi compañero: false
b.	Mi edad es mayor a la de mi compañero: true
c.	Mi edad es menor a la de mi compañero: false
18.	Compare su edad ingresada por pantalla con prompt() con el numero 18 y guardarlo en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga: Soy mayor de edad y el valor de la variable.
19.	Introducir por pantalla la edad y la altura de una persona y guardarlas en variables separadas y en una variable llamada puedeSubir el resultado de la operación resultante de si la persona es mayor de 6 años y además tiene una altura mínima de 120cm y mostrar por consola un mensaje como el siguiente: Puede subir a la atracción y el valor de la variable resultante.
20.	Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o “LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable llamada puedePasar guardar el resultado de la operación resultante de si la persona tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La persona puede pasar y el resultado de la variable.


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

/* --------------------------------*/
//13
let frutas =["peras","manzanas","ciruelas","uvas","anana"];
let nums =[1,2,3,4,5];
let madre =  { nombre: "Maria", edad: 45, ocupacion: "Ama de casa" };
let padre = { nombre: "Juan", edad: 50, ocupacion: "Albañil" };
let hermano = { nombre: "Miguel", edad: 22, ocupacion: "Estudiante" };
let hermana1 = { nombre: "Marlen", edad: 22, ocupacion: "Estudiante" };
let hermana2 = { nombre: "Celia", edad: 25, ocupacion: "Reclutadora de talentos" };
let familia = [madre,padre,hermano,hermana1,hermana2]
let textoAleatorio = `Me gustan las ${frutas[1]}, creo que mi numero de la suerte es ${nums[3]} y mi hermana favoritas es ${familia[4].nombre}`
//input = prompt("Ingrese ingrese su edad y la de su compañero separado por comas y en ese orden");
//let edades= input.split(",");
//edad1 = parseInt(edades[0]);
//edad2 = parseInt(edades[1]);
//let soyMayorDeEdad = edad1 >= 18;
/*let edadesIguales = edad1 == edad2;
let soyMayor = edad1 > edad2;
let soyMenor = edad1 < edad2;*/

/*input = prompt("Ingrese ingrese su edad y su altura en centimetros separado por comas y en ese orden");
let datos= input.split(",");
edad = parseInt(datos[0]);
altura = parseInt(datos[1]);
let puedeSubir = edad >6 && altura >= 120;*/
/*
input = prompt("Ingrese ingrese su tipo de pase  y su saldo separado por comas y en ese orden");
let pases= input.split(",");
let pase = pases[0];
let saldo = parseInt(pases[1]);
let puedePasar = pase =="vip" || saldo >1000;
*/



console.log(frutas);
console.log(frutas[0], frutas[1], frutas[2], frutas[3], frutas[4]);
console.log(nums);
console.log(nums[0], nums[1], nums[2], nums[3], nums[4]);
console.log(familia);
console.log(familia[0], familia[1], familia[2], familia[3], familia[4]);
console.log(textoAleatorio);
//console.log(edades);
//console.log(`a.	Mi edad es igual a la de mi compañero: ${edadesIguales}. b.	Mi edad es mayor a la de mi compañero: ${soyMayor}. c.	Mi edad es menor a la de mi compañero: ${soyMenor}`)
//console.log(`Soy mayor de edad?: ${soyMayorDeEdad}`)
//console.log(`Puede subir a la atracción?: ${puedeSubir}`);
//console.log(`Puede subir a la atracción?: ${puedeSubir}`);



/*-----------------------------------------------------------------*/
/*Estructuras de control*/



