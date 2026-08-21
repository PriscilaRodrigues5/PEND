const nome = document.querySelector("#nome");
const salvar = document.querySelector("#salvar");
const recuperar = document.querySelector("#recuperar");
const excluir = document.querySelector("#excluir");

const resultado = document.querySelector("#resultado");

//SALVAR
salvar.addEventListener("click", function () { 
    
    localStorage.setItem("nome", nome.value);

    resultado.textContent = "Nome salvo!";
});

//RECUPERAR
recuperar.addEventListener("click", function () {
    const nomeRecuperar = localStorage.getItem("nome");

    resultado.textContent = `Nome armazenado/recuperar: ${nomeRecuperar}`;
});

//EXCLUIR
excluir.addEventListener("click", function () {
    localStorage.removeItem("nome");

    resultado.textContent = "Nome excluído!";

});