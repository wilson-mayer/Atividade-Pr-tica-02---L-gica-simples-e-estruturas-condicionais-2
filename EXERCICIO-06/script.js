// 6. Escreva um algoritmo que solicite 2 números e uma operação
// matemática. O algoritmo deve realizar o cálculo com os 2 números
// digitados conforme a operação informada.


let primeiroNumero = parseFloat(prompt("Digite o primeiro número"));
let segundoNumero = parseFloat(prompt("Digite o segundo número"));
let operacao = prompt("Digite a operação desejada");
let resultado;

switch (operacao) {
    case '+':
        resultado = primeiroNumero + segundoNumero;
        console.log(resultado)
        break;

    case '-':
        resultado = primeiroNumero - segundoNumero;
        console.log(resultado);
        break;

    case '*':
        resultado = primeiroNumero * segundoNumero;
        console.log(resultado)
        break;

    case '/':
        resultado = primeiroNumero / segundoNumero;
        console.log(resultado)
        break;

    default:
        console.log("Operação inválida");
        break;
    
}