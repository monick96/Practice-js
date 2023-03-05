/*
1 - Crear un array con un mínimo de 10 elementos numéricos, un array con un mínimo de 10
strings y un array con un mínimo de 10 objetos {edad, nombre, altura, peso, sexo}
*/
nums = [15,64,6,5,85,56,16,2,9,8];
generos_movies = ["romanticos","terror","ciencia ficcion", "thriller","accion","comedia","suspenso","psicologico","animados","aventura"];
datos = [
    {edad: 22, nombre: "Roxan", altura: 170, peso: 65, sexo: "femenino"},
    {edad: 25, nombre: "Alina", altura: 175, peso: 70, sexo: "femenino"},
    {edad: 31, nombre: "Romina", altura: 150, peso: 55, sexo: "femenino"},
    {edad: 38, nombre: "Lila", altura: 171, peso: 66, sexo: "femenino"},
    {edad: 22, nombre: "Deisy", altura: 160, peso: 59, sexo: "femenino"},
    {edad: 22, nombre: "Ricardo", altura: 170, peso: 70, sexo: "masculino"},
    {edad: 24, nombre: "Richard", altura: 172, peso: 71, sexo: "masculino"},
    {edad: 43, nombre: "Sergio", altura: 160, peso: 75, sexo: "masculino"},
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
// function ver_propiedad_obj(array,propiedad){
//     let results = [];
//     for (let el of array){
//         results.push(el[propiedad])
//     }
//     return results;
// }
function ver_propiedad_obj(array,propiedad){
    let results = [];
    for (let el in array){
        results.push(array[el][propiedad])
    }
    return results;
}

// console.log(ver_propiedad_obj(datos,"edad"));
/*
4- Crear una función que sume solo los números impares.
*/

function suma_impares(array){
    let result = 0;
    inpar = [];
    for (i=0;i<array.length;i++){
        if(array[i]%2 !== 0){
            result += array[i];
            inpar.push(array[i])
        }
    }
    return [inpar, result]
    
}
//console.log(suma_impares(nums));

/*
5 - Crear una función que me muestre las palabras con más de 10 letras.
*/
function palabrasMasDeDiezLetras(array){
    let words = [];
    for (word of array){
        if(word.length > 10)
        words.push(word);
    }
    return words;
}

//console.log(palabrasMasDeDiezLetras(generos_movies))
/*
6 - Crear una función que imprima las personas mayores de 30 años con una altura menor a
170cm.
*/
function filter_people(array){
    let result = [];
    for (let people of array){
        if(people.edad>30 && people.altura< 170){
            result.push(people)
        }
    }
    return result
}
//console.log(filter_people(datos))
/*
7 - Crear una función que imprima el número más chico de los números.
*/
function el_mas_chico(array){
    let result = array[0];
    for(num of array){
        if (num <= result){
            result = num;
        }
        
    }
    return result;
}
//console.log(el_mas_chico(nums))
/*
8 - Crear una función que me imprima el número más grande de los números.
*/
function el_mas_grande(array){
    let result = array[0];
    for(num of array){
        if (num >= result){
            result = num;
        }
        
    }
    return result;
}
//console.log(el_mas_grande(nums))

/*
9 - Crear una función que me imprima el primer número PAR.
*/
function el_primer_par(array){
    let result = [];
    for(num of array){
        if(num % 2 == 0){
            result = num;
            break;
        }
        
    }
    return result
}
//console.log(el_primer_par(nums))
/*
10 - Crear una función que me imprima el primer menor de 30 años con más de 1.70 metros.
*/
function filter_people2(array){
    let result = [];
    for (let people of array){
        if(people.edad<30 && people.altura> 170){
            result.push(people)
            break;
        }
    }
    return result
}
//console.log(filter_people2(datos))

/*
11 - Crear una función que me imprima el porcentaje de Hombres y Mujeres que hay en el array
de Objetos.
*/

function porcentaje_sexo(array){
    let total = array.length;
    let cant_mujeres = 0;
    let cant_hombres = 0;
    let porc_hombres = 0;
    let porc_mujeres= 0;
    for(people of array){
        if(people.sexo === "femenino"){
            cant_mujeres +=1;
        }else {
            cant_hombres += 1;
        }
    }
    porc_hombres = (cant_hombres/total*100)
    porc_mujeres = (cant_mujeres/total*100)
    return [porc_hombres,porc_mujeres]

}

console.log(porcentaje_sexo(datos))
