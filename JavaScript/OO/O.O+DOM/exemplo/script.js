class Aluno{
    constructor(nome, idade, curso, matricula) {

        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    estudar() {
        console.log(`${this.nome} está estudando...`);
    }

    apresentar() {
        console.log(`${this.nome}, está fazendo uma ótima apresentação!`);
    }

    // exibirNaTela() {
    //     const resultado = document.querySelector("#resultado");

    // resultado.innerHTML = `
    //     <p>Nome: ${this.nome}<p/>
    //     <p>Idade: ${this.idade}<p/>
    //     <p>Curso: ${this.curso}<p/>
    //     <p>Matrícula: ${this.matricula}<p/>
    //     `;
    // }
    
//mostrar todos os alunos cadastrados
//     exibirNaTela() {

//         const resultado = document.querySelector("#resultado");

//         resultado.innerHTML = "";
    
//         alunos.forEach(aluno => {
        
//             resultado.innerHTML += `
//             <div>
//                 <p>Nome: ${aluno.nome}</p>
//                 <p>Idade: ${aluno.idade}</p>
//                 <p>Curso: ${aluno.curso}</p>
//                 <p>Matrícula: ${aluno.matricula}</p>
//             </div>
//         `;
//     });
// }

}

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirAlunos() {
        const resultado = document.querySelector("#resultado");
        
        resultado.innerHTML = "";

        this.alunos.forEach(aluno => {
            resultado.innerHTML += `
            <div>
                <p>Nome: ${aluno.nome}</p>
                <p>Idade: ${aluno.idade}</p>
                <p>Curso: ${aluno.curso}</p>
                <p>Matrícula: ${aluno.matricula}</p>
            </div>
        `;
    });
}
}

// const turma = new Turma
const turma = new Turma();
//const alunos = [];
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matricula = document.querySelector("#matricula");
const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function() {

    const aluno = new Aluno(nome.value, parseInt(idade.value), curso.value, matricula.value);
    turma.adicionarAluno(aluno);
    turma.exibirAlunos();
    
    // alunos.push(aluno); //
    // console.log(alunos);
    // aluno.exibirNaTela();
    // aluno.estudar();
    // aluno.apresentar();
    // aluno.exibirNaTela();

});

