/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.

2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".

3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.

4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.

5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um numeros de números, encontre o maior valor.
Tarefas:
Crie um numeros como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.

6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um numeros com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.

7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um numeros.
Tarefas:
Crie um numeros como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.

8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".

9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.

10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.

11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.

13. Substituir Números Negativos por Zero
Descrição:
Dado um numeros de números, substitua todos os números negativos por zero.
Tarefas:
Crie um numeros como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o numeros no console.

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um numeros de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do numeros e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um numeros e exiba-o no console.
*/

// 01
/*
let num1 = parseFloat(prompt("Digite o Primeiro número: "));
let num2 = parseFloat(prompt("Digite o Segundo número: "));

function Soma(num1, num2) {
    return num1 + num2;
}

let resultadoSoma = Soma(num1, num2);
alert("Resultado da Soma: " + resultadoSoma);

// 02
let num = parseFloat(prompt("Digite o número para verificar: "));
function Verificar(num) {
    if (num%2 === 0) {
        return "O número é par";
    } 
    else {
        return "O número é ímpar";
    }
}

alert(Verificar(num));

// 03
for (let x = 1; x <= 10; x++){
    console.log(x);
}

// 04
let num = parseFloat(prompt("Informe um número para ver a tabuada:"));
for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}

// 05 
const numeros = [3, 7, 2, 9, 5];
const maiorNumero = Math.max(...numeros);
console.log(maiorNumero);

// 06
function invertePalavra(palavra) {
    return palavra.split('').reverse().join('');
  }
  
  const palavra = prompt("Digite uma palavra:");
  
  const palavraInvertida = invertePalavra(palavra);
  console.log("Palavra invertida:", palavraInvertida);


// 07
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((a, b) => a + b, 0);
console.log(soma);
*/