// classe
class Produto {

    // construtor - metodo q coloca os atributos em um objeto.
    constructor(nome, preco, estoque) {
    
        // atributos - this , "este objeto", guarda dados dentro do objeto.
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //metodo
    vender() {
        console.log("Vendendo produto!");
    }
    //metodo
    repor() {
        console.log("Reporando produto!");
    }
    
    alterarPreco() {
        console.log(`${this.nome} - Novo preço: R$ ${this.preco}`);
    }    
}

// instancia do objeto
const produto1 = new Produto("Notebook", 3000, 10);
console.log("Produto 1: ", produto1);

// instancia do objeto
const produto2 = new Produto("Celular", 100, 50);
console.log("Produto 2: ", produto2);


// instancia do objeto
const produto3 = new Produto("Relógio", 200, 20);
console.log("Produto 3: ", produto3);


console.log("---------------------------------");
console.log("Atributos do produto 1: ");
console.log("-", produto1.nome);
console.log("-", produto1.preco);
console.log("-", produto1.estoque);
console.log("---------------------------------");

//
produto1.vender();
//
produto1.repor();
//
produto1.alterarPreco();

console.log("---------------------------------");
console.log("Atributos do produto 2: ");
console.log("-", produto2.nome);
console.log("-", produto2.preco);
console.log("-", produto2.estoque);
console.log("---------------------------------");

//
produto2.vender();
//
produto2.repor();
//
produto2.alterarPreco();

console.log("---------------------------------");
console.log("Atributos do produto 3: ");
console.log("-", produto3.nome);
console.log("-", produto3.preco);
console.log("-", produto3.estoque);
console.log("---------------------------------");

//
produto3.vender();
//
produto3.repor();
//
produto3.alterarPreco();