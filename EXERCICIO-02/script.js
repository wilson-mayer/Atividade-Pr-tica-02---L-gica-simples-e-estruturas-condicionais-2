// 2. Crie um programa que peça um número de 1 a 7 e exiba o dia da
// semana correspondente utilizando a estrutura condicional switch.

let escolhaNumero = Number(prompt('Escolha um número de 1 a 7:'))

switch(escolhaNumero) {
    case 1: 
        document.write('1 - Domingo')
        break;
    case 2: 
        document.write('2 - Segunda-feira')
        break;
    case 3: 
        document.write('3 - Terça-feira')
        break;  
    case 4: 
        document.write('4 - Quarta-feira')
        break;    
    case 5: 
        document.write('5 - Quinta-feira')
        break;   
    case 6: 
        document.write('6 - Sexta-feira')
        break;
    case 7: 
        document.write('7 - Sabado')
        break;
    default:
        document.write('Este dia não existe')         
}