/*
1.	Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo.
2.	Realizar un programa que dado 2 números imprima por consola si los numeros son iguales o si son diferentes.
3.	Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros es el mas grande o si son iguales.
4.	Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas chico.
5.	Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad.
6.	Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo.
7.	Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida.
8.	Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera mas eficiente.
9.	Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años), adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando si en realidad tiene esa edad.
10.	Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho trampa.
11.	Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado.
12.	Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0.
13.	Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.


*/
//let input = parseInt(prompt("Ingrese dos nuemeros separados por comas: "));
//let nums = input.split(",");
//let num1 = nums[0];
//let num2 = nums[1];
num1=5;
num2=4;
num3 = 8;
if(num1>num2){
    console.log(`el primer numero: (${num1}) es mayor al segundo numero: (${num2})`)
}else if (num1<num2){
    console.log(`el segundo numero: (${num2}) es mayor al primer numero:( ${num1})`)
} else if (num1===num2){
    console.log(`el numero (${num2}) igual al numero( ${num1})`)
}
if (num1 !== num2){
    console.log(`el primer numero: (${num1}) es distinto al segundo numero: (${num2})`)
}else {
    console.log(`el primer numero: (${num1}) es igual al segundo numero: (${num2})`)
}

if(num1<num2 && num1<num3){
    document.write(`el primer numero: (${num1}) es el menor numero`)
}else if (num2<num1 && num2<num3){
    document.write(`el segundo numero: (${num2}) es el menor numero`)
} else {
    document.write(`el tercer numero: (${num2}) es el menor numero`)
}
document.write("<br>");

let persona = [
    {nombre: "Juan", 
    edad: 40, 
    altura: 165
    },

    {nombre: "Leila", 
    edad: 35, 
    altura: 170
    }
]

if (persona[0].altura > persona[1].altura){
    document.write(`por mayor altura gana ${persona[0].nombre}` )
} else if (persona[1].altura > persona[0].altura){
    document.write(`por mayor altura gana ${persona[1].nombre}` )
}
document.write("<br>");
if (persona[0].edad > persona[1].edad){
    document.write(`por mayor edad gana ${persona[0].nombre}` )
} else if (persona[1].edad > persona[0].edad){
    document.write(`por mayor edad gana ${persona[1].nombre}` )
}

document.write("<br>");
/*
let nombre = prompt("Ingrese su nombre: ")
let edad1 = prompt("Ingrese su edad: ")
let altura1 = prompt("Ingrese su altura en cm: ")
let vision = prompt("Que tan claro puede ver del 1 al 10: ")
if (edad1 >18 && altura1>150 && vision >=8){
    document.write(`${nombre} estas capacitado para conducir`)
}else{
    document.write(`${nombre} no estas capacitado para conducir`)
}
*/
/* punto 7
let nombre = prompt("Ingrese su nombre: ")
let pase = prompt("Ingrese su tipo de pase, vip o normal?: ")


if (nombre === "monica" || pase =="vip"){
    document.write("Bienvenid@! puede pasar:)")
} else if(nombre !== "monica" || pase !== "vip"){
    let entrada = prompt("posee entrada?: ")
    if (entrada == "si") {
        entrada = true
    }else{
        entrada = false
    }
    if (entrada){
        resp = prompt("quiere utilizarla?:" )
        if (resp="si"){
            document.write("Bienvenid@! puede pasar:)")
        }else{
            document.write("los esperamos la proxima vez:)")
        }
    }else if (!entrada){
        resp = prompt("quiere comprar una entrada?:" )
        if (resp = "si"){
            saldo = parseFloat(prompt("Cuanto dinero tiene:? "))
            if (saldo>= 1000){
                document.write("Venta exitosa")
                document.write("<br>");
                document.write("Bienvenid@! puede pasar:)")
            }else{
                document.write("Venta rechazada")
                document.write("<br>");
                document.write("los esperamos la proxima vez:)")
            }
        }else{
            document.write("lo esperamos la proxima vez:)")
        }
    }
}
*/
/* punto 8
let numeroIncognita = 5;
resp = parseInt(prompt("Bievenido al juego: adivine el numero! ingrese un numero del 1 al 10, cuenta con tres intentos: "))
if (resp !== numeroIncognita){
    if (resp>numeroIncognita){
        console.log(" el numero ingresado es mayor")
        console.log(" Vuelve a intentarlo")
    } else{
        console.log(" el numero ingresado es menor")
        console.log(" Vuelve a intentarlo")
    }

    resp = parseInt(prompt("ingrese un numero del 1 al 10, es el segundo intento de 3 intentos: "))
    if (resp !== numeroIncognita){
        if (resp>numeroIncognita){
            console.log(" el numero ingresado es mayor")
            console.log(" Vuelve a intentarlo")
        } else{
            console.log(" el numero ingresado es menor")
            console.log(" Vuelve a intentarlo")
        }
    
        resp = parseInt(prompt("ingrese un numero del 1 al 10, es el tercer y ultimo intento de 3 intentos: "))
        if (resp !== numeroIncognita){
            if (resp>numeroIncognita){
                console.log(" el numero ingresado es mayor")
                console.log(" perdiste:(")
            } else{
                console.log(" el numero ingresado es menor")
                console.log(" perdiste:(")
            }
        }else{
            console.log("Ganaste!")
        }
    }else{
        console.log("Ganaste!")
    }
}else{
    console.log("Ganaste!")
}
*/

/* punto 9 */
/*
edad = parseInt(prompt("Ingrese su edad: "))
switch(true){
    case(edad>=0 && edad<= 12):
    console.log("Eres un bebé");
    break;
    case(edad>=13 && edad<= 18):
    console.log("Eres un adolescente");
    break;
    case(edad>=19 && edad<= 45):
    console.log("Eres un joven mayor");
    break;
    case(edad>45 && edad<= 100):
    console.log("Eres un anciano");
    break;
    default:
    document.write("Realmente es tu edad?");
    break;
}
*/
/* punto 10*/
/*
piedra gana tijera
tijera gana papel
papel gana piedra
*/
/*
palyer1 = prompt("Binvenidos al juego PIEDRA,PAPEL O TIJERA! jugador 1 ingrese su eleccion:  ")
palyer2 = prompt("Binvenidos al juego PIEDRA,PAPEL O TIJERA! jugador 2 ingrese su eleccion:  ")
resp = ["piedra","papel","tijera"]

if(palyer1 == resp[0] && palyer2 == resp[2]){
    console.log("Player 1 gana!")
}else if(palyer1 == resp[2] && palyer2 == resp[1]){
    console.log("Player 1 gana!")
}else if(palyer1 == resp[1] && palyer2 == resp[0]){
    console.log("Player 1 gana!")
}else if(palyer2 == resp[0] && palyer1 == resp[2]){
    console.log("Player 2 gana!")
}else if(palyer2 == resp[2] && palyer1 == resp[1]){
    console.log("Player 2 gana!")
}else if(palyer2 == resp[1] && palyer1 == resp[0]){
    console.log("Player 2 gana!")
}else if (palyer1 !== resp[0] || palyer1 !== resp[1] || palyer1 !== resp[2] || palyer2 !== resp[0] || palyer2 !== resp[2] || palyer2 !== resp[2] ){
    console.log("Alguno de los jugadores hizo trampa")
}else{
    console.log("Es un empate")
}
*/

/*11*/
/*
color = prompt("ingrese un color: ")

switch (color) {
    case "negro":
    case "blanco":
        console.log("Falta de color");
        break;
    case "verde":
        console.log("El color de la naturaleza");
        break;
    case "azul":
        console.log("El color del agua");
        break;
    case "amarillo":
        console.log("El color del sol");
        break;
    case "rojo":
        console.log("El color del fuego");
        break;
    case "marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente eleccion, no lo teniamos pensado");
        break;
}
*/
/*12*/
/*
valor1 = parseInt(prompt("ingrese un numero"));
valor2 = parseInt(prompt("ingrese otro numero"));
op= prompt("ingrese que operacion quiere realizar entrew los dos numeros, (+),(-),(*),(/)");
if (op == "+"){
    console.log(valor1 + valor2)
} else if (op == "-"){
    console.log(valor1 - valor2)
}else if (op == "*"){
    console.log(valor1 * valor2)
}else if (op == "/" ){
    if (valor2 === 0){
        console.log("No se puede dividir por cero")
    }else {
        console.log(valor1 / valor2)
    }
}
*/
/*13 */

input = prompt("Ingrese todos los datos de su dni separado por coma en este orden: nombre, apellido, numero de dni, fecha de nacimiento ej: 16/01/1996: ");
datos_dni = input.split(",");
datos_ok = prompt(`Los datos ingresados son: ${input}. Es correcto?`);

if(datos_ok === "si"){
    dni = {
        nombre: datos_dni[0],
        apellido:datos_dni[1],
        nro_dni: datos_dni[2],
        fecha_nacimiento: datos_dni[3]
    }
    console.table(dni)
    console.log("Registro exitoso")
}else{
    console.log("vuelva a intentarlo en un mes")
}




