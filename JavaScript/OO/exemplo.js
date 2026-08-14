// classe
class Carro {

    // construtor - metodo q coloca os atributos em um objeto.
    constructor(marca, modelo, ano, cor) {
    
        // atributos - this , "este objeto", guarda dados dentro do objeto.
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    //metodo
    ligar() {
        console.log("O carro está ligado!");
    }
    //metodo
    acelerar() {
        console.log("O carro está acelerando!");
    }
    
    frear() {
        console.log(`${this.modelo} freiou.`);
    }    
}

// instancia do objeto
const carro1 = new Carro("Volkswagem", "Gol", 2022, "Roxo");
console.log("Carro 1: ", carro1);

// instancia do objeto
const carro2 = new Carro("toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);


// instancia do objeto
const carro3 = new Carro("Honda", "Civic", 2023, "Branco");
console.log("Carro 3: ", carro3);


console.log("---------------------------------");
console.log("Atributos do carro 1: ");
console.log("-", carro1.marca);
console.log("-", carro1.modelo);
console.log("-", carro1.ano);
console.log("-", carro1.cor);
console.log("---------------------------------");

//
carro1.ligar();
//
carro1.acelerar();
//
carro1.frear();

console.log("---------------------------------");
console.log("Atributos do carro 2: ");
console.log("-", carro2.marca);
console.log("-", carro2.modelo);
console.log("-", carro2.ano);
console.log("-", carro2.cor);
console.log("---------------------------------");

//
carro2.ligar();
//
carro2.acelerar();
//
carro2.frear();

console.log("---------------------------------");
console.log("Atributos do carro 3: ");
console.log("-", carro3.marca);
console.log("-", carro3.modelo);
console.log("-", carro3.ano);
console.log("-", carro3.cor);
console.log("---------------------------------");

//
carro3.ligar();
//
carro3.acelerar();
//
carro3.frear();