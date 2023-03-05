/*
1 - Crear un array con un mínimo de 10 elementos numéricos, un array con un mínimo de 10
strings y un array con un mínimo de 10 objetos {edad, nombre, altura, peso, sexo}
*/
nums = [15,64,6,5,85,56,16,2,9,8];
generos_movies = ["romanticos","terror","ciencia ficcion", "thriller","accion","comedia","suspenso","psicologico","animados","aventura"];
datos = [
    {edad: 22, nombre: "Roxan", altura: 170, peso: 65, sexo: "femenino"},
    {edad: 25, nombre: "Alina", altura: 175, peso: 70, sexo: "femenino"},
    {edad: 21, nombre: "Romina", altura: 150, peso: 55, sexo: "femenino"},
    {edad: 28, nombre: "Lila", altura: 171, peso: 66, sexo: "femenino"},
    {edad: 22, nombre: "Deisy", altura: 160, peso: 59, sexo: "femenino"},
    {edad: 22, nombre: "Ricardo", altura: 170, peso: 70, sexo: "masculino"},
    {edad: 24, nombre: "Richard", altura: 172, peso: 71, sexo: "masculino"},
    {edad: 23, nombre: "Sergio", altura: 180, peso: 75, sexo: "masculino"},
    {edad: 27, nombre: "Sandro", altura: 178, peso: 85, sexo: "masculino"},
    {edad: 20, nombre: "Julian", altura: 173, peso: 80, sexo: "masculino"},
]

/*
2 - Crear una función que sume todos los números del array de números o concatene el array de
strings.
*/
function suma_arrays(array){
    let result = 0;
    for (el in array){
        result += array[el]
    }
    return result 
}
/*
console.log(suma_arrays(nums))
console.log(suma_arrays(generos_movies))
*/

/*
3 - Crear una función que muestre una propiedad especifica de todos los objetos del array de
objetos.
*/

/*
4- Crear una función que sume solo los números impares.
5 - Crear una función que me muestre las palabras con más de 10 letras.
6 - Crear una función que imprima las personas mayores de 30 años con una altura menor a
170cm.
7 - Crear una función que imprima el número más chico de los números.
8 - Crear una función que me imprima el número más grande de los números.
9 - Crear una función que me imprima el primer número PAR.
10 - Crear una función que me imprima el primer menor de 30 años con más de 1.70 metros.
11 - Crear una función que me imprima el porcentaje de Hombres y Mujeres que hay en el array
de Objetos.
*/
