// 7. Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
// a conta do usuário deve ser criada já com um saldo positivo. O
// usuário precisa informar a quantidade de dinheiro que deseja
// retirar, esse valor deve ser um número positivo, múltiplo de 5 e
// menor do que o saldo. Cada saque eletrônico cobra uma taxa de
// R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
// certo com o saque, e se o usuário informar um valor maior que o
// saldo deve ser informado ao usuário que o mesmo não tem dinheiro
// suficiente em conta para realizar o saque.
// OBS: Na verificação se o valor do saque é maior que o saldo deve
// ser considerado e também contabilizado o valor da taxa a ser
// cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
// da taxa do saque não pode ser maior que o saldo disponível.

let conta = Number(prompt('Digite um valor.'));
if (conta > 0) {
    console.log(`conta criada com sucesso, saldo: ${conta}`);
    let saque = Number(prompt('Digite um valor para saque.'));
    if (saque % 5 == 0 && (saque + 4.5) <= conta) {
        console.log(`Saque efetuado com sucesso. Saldo: ${conta - (saque + 4.5)}`)
    } else {
        console.log(`Valor indisponível para saque. Saldo: ${conta}`)
    }
} else {
    console.log('Valor precisa ser positivo e maior que zero');
}
