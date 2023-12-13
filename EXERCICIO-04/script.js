// 4. O custo de um carro novo ao consumidor é a soma do custo de
// fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever um
// algoritmo para ler o custo de fábrica de um carro,calcular e escrever
// o custo final ao consumidor.

let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro"));

let percentualDistribuidor = custoFabrica * 0.45;
console.log(percentualDistribuidor, "Percentual distribuidor");

let percentualImpostos = custoFabrica * 0.28;
console.log(percentualImpostos, "Percentual impostos");

let custoConsumidor = custoFabrica + percentualDistribuidor + percentualImpostos;

console.log(custoConsumidor, "Custo consumidor");