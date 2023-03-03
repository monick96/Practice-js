/*
Ejercicios
1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).
2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.
3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.
4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.
5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.
6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.
7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.
8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.
9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.
10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.
11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.
12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.
13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.
14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.
16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)
*/

/*1 */
/*
let num = parseInt(prompt("Ingrese el numero que dess para obtener sus primeros 10 multiplos: "));
for(i=1;i<=10;i++){
    console.log(`${num} * ${i} = ${num * i}`)
}
*/

/*2*/
/*
let num = parseFloat(prompt("ingrese un numero : "))
let nums = []
while(num !==0){
    nums.push(num);
    num = parseFloat(prompt("ingrese otro numero : "))
}
console.log(`Los numeros ingresados son : ${nums}`)
*/

/*3 */
/*
alert("Bienvenido al juego , adivine el numero entero, pista esta en el rango de 1 a 100");
let num_incognita = 5;
let num_input = parseInt(prompt("ingrese un numero: "));
let cont_input = 1;
while(num_input !== num_incognita){
    if(num_input>num_incognita){
        console.log("el numero ingresado es mayor, intentelo nuevamente")
        num_input = parseInt(prompt("ingrese un numero: "));
        cont_input += 1;
    }else{
        console.log("el numero ingresado es menor, intentelo nuevamente")
        num_input = parseInt(prompt("ingrese un numero: "));
        cont_input += 1;
    }
}
console.log(`Felicidades adivino en el intento numero: ${cont_input}`)
*/

/*4 */
/*
let num = parseInt(prompt("ingrese un numero, veremos si es primo"))
let divisores = 0;
for (i=1;i<=100;i++){
    if(num % i === 0){
        divisores +=1;
    }
}
if (divisores>2){
    console.log(`${num} no es primo tiene ${divisores} divisores`)
}else{
    console.log(`${num} es primo `)
}
*/

/*5 */
/*
alert("bienvenido, vamos a averguar todos los divisores del numero que elijas!")
let num = parseInt(prompt("Ingrese un numero: "))
let divisores = []
*/
/*
La expresión Math.floor(Math.sqrt(numero)) se utiliza para obtener el número entero más grande menor o igual a la raíz cuadrada de numero. Esto es útil porque, como mencioné anteriormente, cualquier divisor que sea mayor que la raíz cuadrada del número tiene un cociente que es menor que la raíz cuadrada, y por lo tanto ya ha sido comprobado.

for (i=1;i<= Math.floor(Math.sqrt(num));i++){
    if(num % i === 0){
        divisores.push(i)
    }
    if (i !== num / i) {
        divisores.push(num / i);
    }
}
*/
/*
for (i=1;i<= 100;i++){
    if(num % i === 0){
        divisores.push(i)
    }
}
console.log(divisores);
*/
/*6*/
/*
let animales = ["perro", "gato", "conejo", "tigre", "elefante", "león", "jirafa", "mono", "oso", "hipopótamo"];

for (animal in animales){
    console.log(animales[animal])
}
*/

/*7 */
/*
let nums = [1,2,3,4,5,6,7,8,9,10]
for(num in nums){
    console.log(nums[num]*2)
}
*/
/*8 */
/*
let family = [
    { rol: "madre", nombre: "Maria", edad: 45, ocupacion: "Ama de casa", signo: "geminis"},
    { rol: "padre", nombre: "Juan", edad: 50, ocupacion: "Albañil", signo: "cancer" },
    { rol: "hijo", nombre: "Miguel", edad: 22, ocupacion: "Estudiante", signo: "Escorpio" },
    { rol: "hija", nombre: "Marlen", edad: 22, ocupacion: "Estudiante", signo: "Escorpio" },
    { rol: "hija", nombre: "Celia", edad: 25, ocupacion: "Reclutadora de talentos", signo: "Virgo" }
] 
console.log(family[0])
for(i=0;i<family.length;i++){
    console.log(`el nombre del/la ${(family[i].rol)} es ${family[i].nombre}, tiene ${family[i].edad}, es ${family[i].ocupacion}, su signo es ${family[i].signo} `)
}
*/
/*9 */
/*
let nums = [1,2,3,4,5,6,7,8,9,10]
for (i=0;i<nums.length;i++){
    if(nums[i]%2 !==0){
        console.log(nums[i])
    }
    
}
*/
/*10 */
/*
let input= parseInt(prompt("Ingrese un numero"))
let nums=[]
let par = [];
let inpar = [];
let suma_par = 0
let suma_inpar = 0
while(input !==0){
    nums.push(input)
    input= parseInt(prompt("Ingrese un numero"))
}

for (i=0;i<nums.length;i++){
    if(nums[i]%2 === 0){
        par.push(nums[i])
        suma_par += nums[i]
    }else {
        inpar.push(nums[i])
        suma_inpar += nums[i]
    }
}
console.log(par);
console.log(inpar);
console.log(`la suma de los numeros pares ingresados es: ${suma_par}`);
console.log(`la suma de los numeros inpares ingresados es: ${suma_inpar}`);
*/
/*11 */
/*

let nums = [50,2,3,4,5,6,7,8,9,100]
let mayor = 0;
for (i=0;i<nums.length;i++){
    if(nums[i]>mayor){
        mayor = nums[i]
    }
}
console.log(`el mayor numero es ${mayor}`)
*/
/*12 */
/*
let nums = [50,2,3,4,5,6,7,8,9,100]
let menor = nums[0]

for (i=1;i<nums.length;i++){
    if(nums[i]<menor){
        menor = nums[i]
    }
}
console.log(`el menor numero es ${menor}`)
*/
/*13 */
/*
let player1 = prompt("ingrese su nombre jugador numero 1: ")
let player2 = prompt("ingrese su nombre jugador numero 2: ")
alert("Bienvenidos al piedra, papel o tiejera, a jugar!..")
let resp1 = prompt(`${player1} ingrese su eleccion: `)
let resp2 = prompt(`${player2} ingrese su eleccion: `)
resp = ["piedra","papel","tijera"]

while(resp1 === resp2){
    console.log('empate!')
    resp1 = prompt(`${player1} ingrese su eleccion: `)
    resp2 = prompt(`${player2} ingrese su eleccion: `)
}

if(resp1 == resp[0] && resp2 == resp[2]){
    console.log(`${player1} gana!`)
}else if(resp1 == resp[2] && resp2 == resp[1]){
    console.log(`${player1} gana!`)
}else if(resp1 == resp[1] && resp2 == resp[0]){
    console.log(`${player1} gana!`)
}else if(resp2 == resp[0] && resp1 == resp[2]){
    console.log(`${player2} gana!`)
}else if(resp2 == resp[2] && resp1 == resp[1]){
    console.log(`${player2} gana!`)
}else if(resp2 == resp[1] && resp1 == resp[0]){
    console.log(`${player2} gana!`)
}else if (resp1 !== resp[0] || resp1 !== resp[1] || resp1 !== resp[2] || resp2 !== resp[0] || resp2 !== resp[2] || resp2 !== resp[2] ){
    console.log("Alguno de los jugadores hizo trampa")
}
*/
/*14 */
/*let altura =5;
for (fila=1; fila<=altura;fila++){
    let asterisck = "";
    for(i=1;i<=fila;i++){
        asterisck += "*";
    }

console.log(asterisck);
}
*/
/*15 */
let altura =5;
for (fila=altura; fila>=1;fila--){
    let asterisck = "";
    for(i=1;i<=fila;i++){
        asterisck += "*";
    }

console.log(asterisck);
}


/*16 */
/*
let nums = [1,8,12,4,6,9];
order_nums= [];
// Recorremos el array de números desordenados con un ciclo for
for (i=0;i<nums.length; i++){
    // Recorremos el array de números ordenados con otro ciclo for
    for (j = 0; j < order_nums.length; j++){
        // Si el número actual es menor que el número en la posición j del array ordenado, lo insertamos en esa posición
        if (nums[i] < order_nums[j]) {
            order_nums.splice(j, 0, nums[i]);
            break;
        }
    }
    // Si llegamos al final del array ordenado y no se insertó el número, lo agregamos al final
    if (j === order_nums.length) {
        order_nums.push(nums[i]);
    }
} 
console.log(order_nums);
*/











