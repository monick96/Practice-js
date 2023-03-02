const simpsons = {
    nombre: "Los Simpsons",
    creador: "Matt Groening",
    personajes: ["Homero", "Marge", "Bart", "Lisa", "Maggie"],
    añoEstreno: 1989,
    temporadaActual: 33,
    episodiosTotales: 706,
    lugarFicticio: "Springfield",
    casaFamiliar: "742 Evergreen Terrace",
    fraseFamosa: "¡Ay, caramba!",
    premios: ["Emmy", "Annie", "Peabody"]
};

const personajesSecundarios = [
    "Apu Nahasapeemapetilon",
    "Krusty el payaso",
    "Sideshow Bob",
    "Moe Szyslak",
    "Barney Gumble",
    "Ned Flanders",
    "Milhouse Van Houten",
    "Nelson Muntz",
    "Principal Skinner",
    "Ralph Wiggum"
];
let simpsonsProps = [
    "Homero",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie",
    "Springfield",
    "742 Evergreen Terrace",
    "Matt Groening",
    1989,
    706
];

console.table(simpsons);
console.log(simpsonsProps);
console.log(simpsonsProps[5]);//imprime x consola el elemento en la posicion 5 del array
console.log(simpsonsProps.length);//imprime x consola el largo del array,la cantidad de elementos que posee.
simpsonsProps.shift(); //elimina el primer elemento, homero fuera!
console.log(simpsonsProps);
simpsonsProps.pop(); //elimina el ultimo elemento, cantidad de episodio fuera!
console.log(simpsonsProps);
simpsonsProps.push(706); //coloca elemento o elementos al final del array , cantidad de episodio adentro!
console.log(simpsonsProps);
simpsonsProps.unshift("Homero"); //coloca elemento o elementos al inicio del array , homero adentro!
console.log(simpsonsProps);
console.log(simpsonsProps.indexOf("Lisa"));
console.log(simpsonsProps.includes("Lisa"));
console.log(simpsonsProps.includes("Moe"));
console.log(simpsonsProps.toString());
console.log(simpsonsProps.join(' - '));
let simpsonsProps2 = simpsonsProps.concat(personajesSecundarios);
console.log(simpsonsProps2);
simpsonsProps.splice(5, 0, ...personajesSecundarios); //coloca el array desde una posicion especifica.  utilizamos el método splice() para agregar los elementos del array "personajesSecundarios" en el índice 5 del array "simpsonsProps". El operador de propagación (...) se utiliza para expandir el array "personajesSecundarios" y pasar sus elementos como argumentos separados al método splice().
console.log(simpsonsProps);







