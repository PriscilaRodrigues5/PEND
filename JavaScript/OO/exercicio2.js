// classe
class Aluno {

    // construtor - metodo q coloca os atributos em um objeto.
    constructor(nome, idade, curso, matricula) {
    
        // atributos - this , "este objeto", guarda dados dentro do objeto.
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    //metodo
    aprender() {
        console.log("O aluno está aprendendo!");
    }
    //metodo
    estudar() {
        console.log("O aluno está estudando!");
    }
    
    apresentar() {
        console.log(`${this.nome} .`);
    }    
}

// instancia do objeto
const aluno1 = new Aluno("Fernanda", 20, "Psicologia", "12345");
console.log("Aluno 1: ", aluno1);

// instancia do objeto
const aluno2 = new Aluno("Paulo", 22, "Desenvolvimento do Sistema", "67890");
console.log("Aluno 2: ", aluno2);


// instancia do objeto
const aluno3 = new Aluno("Anitta", 21, "Pedagogia", "11111");
console.log("Aluno 3: ", aluno3);


console.log("---------------------------------");
console.log("Atributos do aluno 1: ");
console.log("-", aluno1.nome);
console.log("-", aluno1.idade);
console.log("-", aluno1.curso);
console.log("-", aluno1.matricula);
console.log("---------------------------------");

//
aluno1.aprender();
//
aluno1.estudar();
//
aluno1.apresentar();

console.log("---------------------------------");
console.log("Atributos do aluno 2: ");
console.log("-", aluno2.nome);
console.log("-", aluno2.idade);
console.log("-", aluno2.curso);
console.log("-", aluno2.matricula);
console.log("---------------------------------");

//
aluno2.aprender();
//
aluno2.estudar();
//
aluno2.apresentar();

console.log("---------------------------------");
console.log("Atributos do aluno 3: ");
console.log("-", aluno3.nome);
console.log("-", aluno3.idade);
console.log("-", aluno3.curso);
console.log("-", aluno3.matricula);
console.log("---------------------------------");

//
aluno3.aprender();
//
aluno3.estudar();
//
aluno3.apresentar();