console.log("Olá, JavaScript!");

let a = 10;
let b = 3;

console.log("Soma", a + b);
console.log("Subtração", a - b);
console.log("Multiplicação", a * b);
console.log("Divisao", a / b);
console.log("Resto da divisao", a % b);
console.log("Expoencial", a ** b);

let contador = 5;
contador++; //encremento
console.log(contador);

let y = 3
let w = 2
let z = 1

console.log(y + w + z/3);

let p = 8
let g = 16

console.log(p % g);

// atividade 1 operadoes logicos
let x = 10;
let j = "10";

console.log("Igualdade", x == j);
console.log("Identico", x === j);
console.log("Desigualdade ", x != j);
console.log("Desigualdade Estrita", x !== j);

//atividade 2 operadores logicos
let idade = 18

if(idade >= 18){
    console.log("Então vc é maior de idade", idade);
} else {
    console.log("Então vc é menor de idade;", idade);
}

//atividade 3 operadores logicos
let n1 = 1;
let n2 = 10;

if(n1 > n2){
    console.log("n1");
} else if(n2 > n1){
    console.log("n2");
} else {
    console.log("Iguais");
}

//atividade 4 operadores logicos
console.loh("operadores lógicos");
let idade2 = 20;
let temCarteira = true;

console.log (idade2 >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true; 

console.log (chovendo || guardaChuva)

let ligado = false;
console.log(!ligado);

//operadores logicos
//&& E/ANd
//|| OU/OR 
//! INVESSO/NOT

//atividade 5 operadores logicos

let media = 8;
let frequencia = 75;
if(media >= 7 && frequencia >= 75) {
    console.log("Você está aprovado!");
} else {
    console.log("Você está reprovado")
}

//atividade 6 

let login = true;
let token = false;
console.log(login||token);