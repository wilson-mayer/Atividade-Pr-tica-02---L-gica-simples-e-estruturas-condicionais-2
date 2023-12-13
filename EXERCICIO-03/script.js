// 3. Crie um programa que peça um número e verifique se ele é positivo,
// negativo ou zero.

let numero = Number(prompt("Digite um número"))
console.log(numero)

if (numero > 0) {
    console.log("O número é positivo");
} else if (numero < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é ZERO")
}
