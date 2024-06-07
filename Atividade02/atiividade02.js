const prompt = require('prompt-sync')();

/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

let qtdCigarrosDia = prompt('Quantos cigarros você fuma por dia? ');
let qtdAnosFumando = prompt('Há quantos anos você fuma? ');

console.log((10 * qtdCigarrosDia * qtdAnosFumando * 365)/1440, "Dias perdidos devido ao tabagismo");

/* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

let velocidadeCarro = prompt("Digite a velocidade do carro: ")

if(velocidadeCarro > 80) {
    console.log('Você está acima da velocidade, você receberá uma multa no valor de: R$', (velocidadeCarro - 80) * 5);
}

/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

let distanciaParaPercorrer = prompt("Digite a distância que você deseja percorrer em KM: ");

console.log('Valor a ser pago', distanciaParaPercorrer > 200? distanciaParaPercorrer * 0.45: distanciaParaPercorrer * 0.5);

/* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois. */

let lado1 = prompt('Digite o primeiro lado do triângulo: ');
let lado2 = prompt('Digite o segundo lado do triângulo: ');
let lado3 = prompt('Digite o terceiro lado do triângulo: ');

if(lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado2 + lado2) {
    console.log('É possível formar um triângulo com os valores fornecidos');
} else {
    console.log('Não é possível formar um triângulo com os valores fornecidos');
}


/* 5. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

let escolha = prompt('Digite  1 - Papel  2 - Tesoura  3 - Pedra ');
let escolhaRandomica = Math.floor(Math.random() * 3) + 1;

if (escolha == escolhaRandomica) {
    console.log('Empate!! Sua escolha', escolha, 'Escolha da máquina', escolhaRandomica);
} else if ((escolha == 1 && escolhaRandomica == 3) || (escolha == 2 && escolhaRandomica == 1) || (escolha == 3 && escolhaRandomica == 2)){
    console.log('Você ganhou!! Sua escolha', escolha, 'Escolha da máquina', escolhaRandomica)
} else {
    console.log('Você perdeu! Sua escolha', escolha, 'Escolha da máquina', escolhaRandomica)
}

/* 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

let numeroSorteado = Math.floor(Math.random() * 5) + 1;

let palpiteSorteio = prompt('Adivinhe qual número foi sorteado entre 1 e 5 ');
while(palpiteSorteio != numeroSorteado) {
    console.log('Errou!! Tente novamente');
    palpiteSorteio = prompt('Adivinhe qual número foi sorteado entre 1 e 5 ');
}

console.log('Parabéns!!! Você acertou o número sorteado');

/* 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

let carroEscolhido = prompt('Selecione 1 ou 2 para escolher o carro: 1 - Carro popular; 2 - Carro de luxo');
let qtdDias = prompt('Digite a quantidade de dias que você ficou com o carro: ');
let kmPercorrido = prompt('Digite a quantidade de kms percorridos: ');
let calculo = 0;

if (carroEscolhido == 1) {
    kmPercorrido > 100?  calculo = 90 * qtdDias + kmPercorrido * 0.1 : calculo = 90 * qtdDias + kmPercorrido * 0.2;
} else {
    kmPercorrido > 200?  calculo = 150 * qtdDias + kmPercorrido * 0.25 : calculo = 150 * qtdDias + kmPercorrido * 0.3;
}

console.log('Valor a ser pago: ', calculo);

/* 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

let horasAtividadesPorMes = prompt('Digite a quantidade de horas que você fez de atividades físicas no mês');
let qtdPontos = 0;
if(horasAtividadesPorMes <= 10) {
    qtdPontos = horasAtividadesPorMes * 2;
    console.log(`Você fez ${qtdPontos} pontos, o que equivale em dinheiro a :R$ ${qtdPontos * 0.05}`)
}else if(horasAtividadesPorMes > 10 && horasAtividadesPorMes <= 20) {
    qtdPontos = horasAtividadesPorMes * 5;
    console.log(`Você fez ${qtdPontos} pontos, o que equivale em dinheiro a :R$ ${qtdPontos * 0.05}`)
}else {
    qtdPontos = horasAtividadesPorMes * 10;
    console.log(`Você fez ${qtdPontos} pontos, o que equivale em dinheiro a :R$ ${qtdPontos * 0.05}`)
}

/* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário. */

let continua = true;
let totalMasculino = 0, totalFeminino = 0;
let sexo, salario;

while(continua) {
    let sexo = prompt('Digite o sexo conforme a seguir: 1 - Feminino ; 2 - Masculino');
    let salario = prompt('Digite o salário: ');

    if (sexo == 1) 
        totalFeminino += salario;
    else
        totalMasculino += salario;

    let continua = Boolean(prompt('Caso deseja continuar inserindo dados digite "true", caso não digite "false"'));
}

console.log(`Salário total masculino: R$ ${totalMasculino} \n Salário total Feminino: R$ ${totalFeminino}`);

/* 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

/* 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência. */

let primeiroTermoPa = prompt('Digite o primeiro termo da PA');
let razaoPa = prompt('Digite a razão da PA');
let soma = 0;

for(let i = 0; i < 10; i++) {
    console.log(primeiroTermoPa, ' - ');
    soma += primeiroTermoPa;
    primeiroTermoPa+=razaoPa;
}

console.log(`Soma primeiros 10 termos: ${soma}`);

/* 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */
let penultimo = 0;
let ultimo = 1;

for (let i = 0; i < 10; i ++) {
    console.log(ultimo);
    ultimo = ultimo + penultimo;
    penultimo = ultimo - penultimo;
}

/* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
    atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
    da sequência de Fibonacci. */

let sequenciaFibonnaci = [];
let penultimoFibonnaci = 0;
let ultimoFibonnaci = 1;

for (let i = 0; i < 10; i ++) {
    sequenciaFibonnaci.push(ultimo);
    ultimo = ultimoFibonnaci + penultimoFibonnaci;
    penultimo = ultimoFibonnaci - penultimoFibonnaci;
}

/* 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados. */
let pessoasVetor = [];

for (let i = 0; i < 7; i++) {
    pessoasVetor.unshift(prompt(`Digite o nome`));
}

console.log(pessoasVetor);

/* 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados. */
let vetorNumeros = [];

for (let i = 0; i < 10; i++) {
    vetorNumeros.push(prompt('Digite o número: '));
}

for (let i = 0; i < 10; i++) {
    vetorNumeros[i] % 2 == 0? console.log(`Número ${vetorNumeros[i]}, posição no vetor: ${i}`): '';
}

/* 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

/* 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade. */

let nomePessoas = [];
let idadePessoas = [];

for (let i = 0; i < 9; i++) {
    nomePessoas.push(prompt('Digite o nome da pessoa: '));
    idadePessoas.push(prompt('Digite a idade da pessoa: '));
}

for (let  i = 0; i < 9; i++) {
    idadePessoas[i] < 18? console.log(`${nomePessoas[i]} - ${idadePessoas} anos`): '';
}

/* 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro. */

let funcionarioRegistro = {
    nomeFuncionario,
    cargo, 
    salario
}

funcionarioRegistro.nomeFuncionario = prompt('Digite o nome do funcionário:');
funcionarioRegistro.cargo = prompt('Digite o cargo do funcionário:');
funcionarioRegistro.salario = prompt('Digite o salario do funcionário:');

console.log(funcionarioRegistro);

/* 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS. */

/* 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
 */

/* 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

let alt = 0, sexoPessoa;


sexoPessoa = prompt('Digite o sexo da pessoa conforme a tabela: 1 - Masculino; 2 - Feminino');
alt = prompt('Digite a altura da pessoa: ');

function calculaPesoIdeal(altura, sexoPessoa) {
    return sexoPessoa == 1? 72.7 * altura - 58: 62.1 * altura - 44.7
}

console.log('Pessoa ideal: ', calculaPesoIdeal(alt, sexoPessoa, 'KG'));