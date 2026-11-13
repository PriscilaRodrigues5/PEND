
// FUNÇÃO DO BOTÃO COMPRAR
function comprar(produto) {

    alert("Você escolheu: " + produto);

    alert("Obrigado por comprar na TechStore!");

}


// FORMULÁRIO DE CONTATO
document.getElementById("formContato").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value;

    alert("Obrigado pelo contato, " + nome + "! Sua mensagem foi recebida.");

    // Limpar formulário
    this.reset();

});
