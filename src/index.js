// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?

const idade = 25;
console.log(idade); 

/*Resposta: Variáveis do tipo 'const' recebem um valor constante, portanto, não podem ser atualizadas 
nem declaradas novamente dentro do mesmo escopo. Não é possível declarar uma 'const' com mesmo nome de uma 
variável ou função que estão no mesmo bloco. Ao criar uma segunda 'const' com o mesmo nome e atribuir
outro valor, ocorre um erro e o código não é executado. 

const idade = 25;
console.log(idade);
const idade = 30;
console.log(idade);

O mesmo acontece com 'let'. 

let idade = 25;
console.log(idade);
let idade = 30;
console.log(idade);

Com a variável 'var', o código é executado normalmente, desde que não haja outra variável no mesmo escopo, 
sendo 'let' ou 'const', com o mesmo nome.

var idade = 25;
console.log(idade);
var idade = 30;
console.log(idade); 
*/


////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
  let x = 10;
   console.log(x); 
}

// console.log(x);

/*Resposta: O código apresenta um erro porque a variável fora do escopo não recebe nenhuma atribuição. 
Devido ao erro, o que está dentro do escopo também não é executado. Mas quando 'let x' fora do escopo recebe
uma atribuição, ambas são executadas independentemente, até com o mesmo valor e nome.

{
    let x = 15;
    console.log(x); 
  }
  
    let x = 15;
    console.log(x);
*/


///////////////////////////////////////////////////////////////////////


//Ainda sobre escopo explique a diferença dos console.log

{
    let x = 10;
    var y = 20;
}

console.log(x);
console.log(y);

/* Resposta: somente a variável 'var' é executada, pois ela possui escopo global, sendo acessível também
fora do escopo delimitado */


///////////////////////////////////////////////////////////////////////


//O que acontece nessa declaração, explique sobre o Hoisting

//console.log(a); 
//var a = 5;
//console.log(b);
//let b = 10;

/* Resposta: O conceito de Hoisting define o comportamento padrão de JS de mover as declarações para o topo do
escopo atual, mas náo é inicializada. O 'console.log(a)' retorna 'undefined' e o 'console.log(b)' retorna um erro.
*/


/////////////////////////////////////////////////////////////////////////////////


//No código abaixo apresenta um erro, qual?

var x = 5;
var x = 10;
console.log(x); 

// let y = 15;
// let y = 20; 
// console.log(y); 

/* Resposta: As variáveis apresentam o mesmo nome, no caso de 'var' a última sobrescreve a primeira. Para 'let'
é retornado um erro. 
*/

//// Escreva um programa que print a primeira letra dessa variavel 

let nomeCompleto = 'eduardo';
let print = nomeCompleto.slice(0,1);
console.log(print);

//sua lógica para pegar a primeira letra 
const letraInicial = nomeCompleto.charAt(0);
console.log(letraInicial)
