const prompt = require('prompt-sync')();
const { color } = require('console-log-colors');


//QUESTÃO 01
console.log(color.greenBright.bold.underline("Questão 01 - Entrada: Temperatura Celsius - Saída: Temperatura Fahrenheit \n"));

let tempCelsius = prompt(color.bold('Digite uma temperatura em graus celsius: '));
console.log(color.cyan.bold(`Temperatura em Fahrenheit: ${tempCelsius * 9/5 + 32}° F \n`));

//QUESTÃO 02
console.log(color.greenBright.bold.underline("Questão 02 - Entrada: número de eleitores, votos brancos, nulos e válidos - Saída: Percentual que cada um representa \n"));

let numEleitores = prompt(color.bold('Digite o número de eleitores do município: '));
let votosBrancos = prompt(color.bold('Digite o número de votos brancos: '));
let votosNulos = prompt(color.bold('Digite o número de votos nulos: '));
let votosValidos = prompt(color.bold('Digite o número de votos válidos: '));

console.log(color.cyan.bold(`${votosBrancos/numEleitores * 100}% de votos brancos`));
console.log(color.cyan.bold(`${votosNulos/numEleitores * 100}% de votos nulos`));
console.log(color.cyan.bold(`${votosValidos/numEleitores * 100}% de votos válidos \n`));

//QUESTÃO 03
console.log(color.greenBright.bold.underline("Questão 03 - Entrada: Quatro números inteiros - Saída: 1°número + 25; 2° número *3; 3° número * 0,12; 4° número = 1° + 2° + 3°  \n"));

let num1 = parseInt(prompt(color.bold('Digite o primeiro número: ')));
let num2 = parseInt(prompt(color.bold('Digite o segundo número: ')));
let num3 = parseInt(prompt(color.bold('Digite o terceiro número: ')));
let num4 = parseInt(prompt(color.bold('Digite o quarto número: ')));

num4 = num1 + num2 + num3;

num1 += 25;
num2 *= 3;
num3 *= 0.12;

console.log(color.cyan.bold(`Primeiro número + 25 = ${num1}`));
console.log(color.cyan.bold(`Segundo número * 3 = ${num2}`));
console.log(color.cyan.bold(`Terceiro número * 0.12 = ${num3}`));
console.log(color.cyan.bold(`Quarto número: 1° + 2° + 3° = ${num4} \n`));

//QUESTÃO 4 e 5
console.log(color.greenBright.bold.underline("Questão 04 e 05 - Entrada: 2 notas - Saída: Aprovado se média >= 6, reprovado  se média < 6  \n"));

let nota1 = parseInt(prompt(color.bold('Digite a primeira nota: ')));
let nota2 = parseInt(prompt(color.bold('Digite a segunda nota: ')));

if(((nota1 + nota2)/2) >= 6) {
    console.log(color.cyan.bold(`PARABÉNS! Você foi aprovado \n`));
}else {
    console.log(color.cyan.bold(`Você foi REPROVADO \n`));
}

//QUESTÃO 6
console.log(color.greenBright.bold.underline("Questão 06 - Entrada: 3 LADOS - Saída: Se forma um triângulo, caso sim, qual o tipo \n"));

let lado1 = parseInt(prompt(color.bold('Digite o primeiro lado: ')));
let lado2 = parseInt(prompt(color.bold('Digite o segundo lado: ')));
let lado3 = parseInt(prompt(color.bold('Digite o terceiro lado: ')));

if((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)) {
    if(lado1 === lado2 && lado2 === lado3) {
        console.log(color.cyan.bold(`\nForma um triângulo equilátero `));
    } else if(lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        console.log(color.cyan.bold(`\nForma um triângulo escaleno `));
    }else {
        console.log(color.cyan.bold(`\nForma um triângulo isósceles`));
    }
} else {
    console.log(color.cyan.bold(`Não é possível formar um triângulo com esses valores fornecidos \n`));
}


//QUESTÃO 7
console.log(color.greenBright.bold.underline("Questão 07 - Entrada: Número de maçãs compradas - Saída: Valor da compra \n"));

let numFrutas = parseInt(prompt(color.bold('Digite o número de maçãs compradas: ')));

numFrutas >= 12? console.log(color.cyan.bold(`\nValor a ser pago: R$ ${numFrutas * 0.25} \n`)): console.log(color.cyan.bold(`\nValor a ser pago: R$ ${numFrutas * 0.30} \n`)) ; 

//QUESTÃO 8
console.log(color.greenBright.bold.underline("Questão 08 - Entrada: Dois valores - Saída: Valores escritos em ordem crescente \n"));

let val1 = Number(prompt(color.bold('Digite o primeiro valor: ')));
let val2 = Number(prompt(color.bold('Digite o segundo valor: ')));

if(val1!==val2) {
    if(val1 > val2) {
        console.log(color.cyan.bold(`\n${val2} - ${val1} \n`));
    } else {
        console.log(color.cyan.bold(`\n${val1} - ${val2} \n`));
    }
}


//QUESTÃO 9
console.log(color.greenBright.bold.underline("Questão 09 - Entrada: Código de origem de um produto - Saída: Região do produto \n"));

let codReg = parseInt(prompt(color.bold('Digite o código da região do produto: ')));

if(codReg === 1) {
    console.log(color.cyan.bold(`\nRegião SUL \n`));
} else if (codReg === 2){
    console.log(color.cyan.bold(`\nRegião Norte \n`));
} else if (codReg === 3){
    console.log(color.cyan.bold(`\nRegião Leste \n`));
} else if (codReg === 4){
    console.log(color.cyan.bold(`\nRegião Oeste \n`));
} else if (codReg === 5 || codReg === 6 || (codReg >=25 && codReg <=50)){
    console.log(color.cyan.bold(`\nRegião Nordeste \n`));
} else if (codReg >= 7 && codReg <= 9){
    console.log(color.cyan.bold(`\nRegião Sudeste \n`));
} else if (codReg >= 10 && codReg <= 20){
    console.log(color.cyan.bold(`\nRegião Centro-Oste \n`));
} else {
    console.log(color.cyan.bold(`\nFora dos intervalos - Produto Importado \n`));
}


//QUESTÃO 10
console.log(color.greenBright.bold.underline("Questão 10 - Entrada: Um número - Saída: O número ser escrito na tela 10 vezes \n"));

let num = parseInt(prompt(color.bold('Digite um número: ')));

for (let i = 0; i < 10; i++) {
    console.log(color.cyan.bold(`${num}`));
}

//QUESTÃO 11
console.log(color.greenBright.bold.underline("Questão 10 - Entrada: Um número - Saída: Par ou Ímpar \n"));

let parOuImpar = Number(prompt(color.bold('Digite um número: ')));

while(parOuImpar !== null && parOuImpar >= 0) {
    parOuImpar % 2 === 0? console.log(color.cyan.bold(`Par \n`)): console.log(color.cyan.bold(`Impar \n`));; 
    parOuImpar = parseInt(prompt(color.bold('Digite um número: ')));
}

//QUESTÃO 12
console.log(color.greenBright.bold.underline("Questão 10 - Saída: Imprime os números entre 1000 e 2000, que divididos por 11 tem resto 5 \n"));

for(let i = 1000; i <= 2000; i++) {
    if(i % 11 === 5) {
        console.log(color.cyan.bold(`\n${i} \n`));    
    }
}

//QUESTÃO 13






