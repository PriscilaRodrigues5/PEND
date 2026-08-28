const produto = document.querySelector('#produto');
const carrinho =  document.querySelector('#carrinho');

//event = objeto fornecido pelo navegador que tem infromação sobre o evento que aconteceu
//dataTransfer = objeto para armazenar e transportar dados durante a operação de arrastr e soltar
produto.addEventListener("dragstart", function (event){
    event.dataTransfer.setData("text", event.target.id);
});

//mudar o padrão
carrinho.addEventListener("dragover", function (event){
    event.preventDefault();
    console("Pode soltar aqui no carrinho...");
});

//soltar
carrinho.addEventListener("drop", function (event){
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id)

    //a div do produto passa a ser filho da div carrinho
    carrinho.appendChild(elemento);
});