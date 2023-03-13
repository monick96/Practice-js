/*
¿Podrías decirnos cuál es el resultado de ejecutar el siguiente pseudocódigo? (suponiendo que la máquina tiene los recursos suficientes para terminar de ejecutarlo). Por favor no olvides comentarnos cuál fue tu razonamiento para llegar al resultado.

function puzzle(N) {

.A = 1

.B = 1

.C = 1

.D = 1

.repeat N times {

....X = D + 2 * C + 3 * B + 4 * A

....A = B

....B = C

....C = D

....D = X

.}

return D % 10000000000 // últimos 10 dígitos de D

}

print puzzle(10)

print puzzle(100)

print puzzle(pow(2022, 100)) // 2022 elevado a la 100

*/

function puzzle(n){
    let nums = {
        a: 1,
        b: 1,
        c: 1,
        d: 1
    }
    
    for (i=1; i<=n;i++){
        let x = nums.d +2 * nums.c+3*nums.b+4*nums.a;
        nums.a = nums.b;
        nums.b = nums.c;
        nums.c= nums.d;
        nums.d = x;
    }

    return nums.d% 10000000000
}

console.log(puzzle(10));
console.log(puzzle(100));
//const BigNumber = require('bignumber.js');
//const num = new BigNumber('3.7854291794289350733630628154912e+330');
//console.log(puzzle(num))
//const result = puzzle(Math.pow(2022,100));
//let result =Math.pow(2022,100)
//console.log(result.toExponential());
//console.log(result.toExponential());
//usar tofix() para los decimales
