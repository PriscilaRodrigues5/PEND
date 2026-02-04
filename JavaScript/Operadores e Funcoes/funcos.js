function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

//funco sem retorno
function nome(nome) {
    console.log("Olá, " + nome )
}

nome ("Priscila");

//funcao com retorno
function somar(a, b) {
    return a + b;
}

console.log (somar(5, 3));

//atividade 7

function imc (ps, alt) {
    return ps / (alt*alt);
}

let ps = 50;
let alt = 1.71;
console.log ("Seu IMC é: " + imc (ps,alt));

//atividade 8
function ImparOuPar(num) {
    if (num % 2 == 0) {
        return "par";
    } else {
        return "ímpar";
    }
}
let num = 7;
console.log ("O número é", ImparOuPar(num));