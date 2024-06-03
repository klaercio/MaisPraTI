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