const formulario = document.getElementById("formContato");


formulario.addEventListener("submit", function(event){

    event.preventDefault();


    let nome = document.getElementById("nome").value.trim();

    let email = document.getElementById("email").value.trim();


    let mensagem = document.getElementById("mensagem");



    if(nome === "" || email === ""){

        mensagem.style.color="red";

        mensagem.innerHTML=
        "Por favor, preencha todos os campos.";

        return;

    }



    if(!email.includes("@") || !email.includes(".")){


        mensagem.style.color="red";

        mensagem.innerHTML=
        "Digite um e-mail válido.";

        return;

    }



    mensagem.style.color="green";


    mensagem.innerHTML=
    "Obrigado pelo contato, " + nome +
    "! Recebi seu e-mail e entrarei em contato em breve.";



    formulario.reset();


});