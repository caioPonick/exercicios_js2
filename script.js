/// ex 011 
/*
function verificarSinal(num) {
    if (num = 0) {
        console.log("Seu número é 0");
    } else if (num>0){
        console.log("Seu número é maior que zero.")
    } else {
        console.log("Seu número é menor que zero.")
    }
}
verificarSinal(prompt("Digite um número: "))
*/

///ex012
/*
function converterTemperatura(celsius){
    faren = (celsius* (9/5))+32;
    console.log("A conversão em farenheit é " + faren);
}
converterTemperatura(prompt("Quanto graus está? (Celsius): "));
*/

///ex013
/*
let n = 0
let soma = 0
while(n < 100) {
    n++;
    soma = soma + n;
}
console.log(soma);
*/

///ex014
/*
function substituirPalavra(str){
    console.log(str.replace("azul", "vermelho"));
}
substituirPalavra(prompt("Digite uma frase com azul: "));
*/

///ex015
/*
function verificarTamanho(str){
    comprimento = str.length;
    if(comprimento > 10) {
        console.log("Sua frase tem mais de 10 caracteres!");
    } else {
        console.log("Sua frase tem menos de 10 caracteres!");
    }
}
verificarTamanho(prompt("Digite uma frase: "));
*/

///ex016
/*
let frutas = ["banana", "maçã", "manga", "melão", "uva"];
console.log(frutas[2]);
*/

///ex017
/*
function saudacao(nome, mensagem="Bem-vindo(a) "){
    console.log(mensagem + nome + "!");
}
saudacao(prompt("Qual o seu nome: "));
*/

///ex018
/*
function verificarAprovacao(nota) {
    if (nota<6){
        console.log("Você foi reprovado!");
    } else { 
        console.log("Você foi aprovado!");
    }
}
verificarAprovacao(prompt("Qual foi sua nota?"));
*/

///ex019
for(let n = 0; n <= 30; n++){
    if (n % 2 === 0) {
        console.log(n + " é um número par!");
    } else {
        console.log(n + " é um número ímpar!");
    }
}