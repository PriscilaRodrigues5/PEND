// ==========================================
// PEGANDO OS ELEMENTOS DO HTML
// ==========================================

const roupas = document.querySelectorAll(".roupa");

const carrinho = document.querySelector("#carrinho");

const botaoInspiracao =
    document.querySelector("#inspiracao");

const botaoAvaliar =
    document.querySelector("#avaliar");

const botaoLimpar =
    document.querySelector("#limpar");

const resultado =
    document.querySelector("#resultado");

const mensagem =
    document.querySelector("#mensagem");


// ==========================================
// DRAG START
// Quando o jogador começa a arrastar
// ==========================================

roupas.forEach(function (roupa) {

    roupa.addEventListener("dragstart", function (event) {

        // Guarda o ID da roupa
        event.dataTransfer.setData(
            "text/plain",
            roupa.id
        );

        console.log(
            "Arrastando:",
            roupa.id
        );

    });

});


// ==========================================
// DRAG OVER
// Permite colocar a roupa no carrinho
// ==========================================

carrinho.addEventListener("dragover", function (event) {

    // Impede o comportamento padrão
    event.preventDefault();

    console.log(
        "Pode soltar a roupa aqui!"
    );

});


// ==========================================
// DROP
// Quando o jogador solta a roupa
// ==========================================

carrinho.addEventListener("drop", function (event) {

    event.preventDefault();


    // Pega o ID da roupa
    const id =
        event.dataTransfer.getData(
            "text/plain"
        );


    // Procura a roupa pelo ID
    const elemento =
        document.getElementById(id);


    // Verifica se encontrou a roupa
    if (!elemento) {

        return;

    }


    // Verifica se a roupa já está no carrinho
    if (carrinho.contains(elemento)) {

        return;

    }


    // Coloca a roupa dentro do carrinho
    carrinho.appendChild(elemento);


    // Muda a mensagem
    mensagem.textContent =
        "✨ Seu look está ficando lindo!";


    // Limpa o resultado anterior
    resultado.textContent = "";

});


// ==========================================
// BOTÃO INSPIRAÇÃO
// ==========================================

botaoInspiracao.addEventListener(
    "click",
    function () {

        const estilos = [

            "🌸 Look romântico",

            "💜 Look moderno",

            "☀️ Look para um dia ensolarado",

            "🎉 Look para uma festa",

            "🏖️ Look de verão",

            "👟 Look casual",

            "✨ Look elegante",

            "💕 Look fofo",

            "🔥 Look estiloso"

        ];


        // Escolhe uma inspiração aleatória
        const numero =
            Math.floor(
                Math.random() * estilos.length
            );


        // Mostra a inspiração
        resultado.textContent =
            "💡 Inspiração: " +
            estilos[numero];

    }
);


// ==========================================
// AVALIAR LOOK
// ==========================================

botaoAvaliar.addEventListener(
    "click",
    function () {

        // Pega as roupas que estão no carrinho
        const pecas =
            carrinho.querySelectorAll(
                ".roupa"
            );


        // Se não tiver nenhuma roupa
        if (pecas.length === 0) {

            resultado.textContent =
                "👗 Arraste algumas roupas primeiro!";

            return;

        }


        // Começa a pontuação
        let pontos = 0;


        // Soma os pontos de cada roupa
        pecas.forEach(function (peca) {

            pontos += Number(
                peca.dataset.pontos
            );

        });


        // Bônus por quantidade de peças

        if (pecas.length >= 3) {

            pontos += 10;

        }


        if (pecas.length >= 5) {

            pontos += 10;

        }


        // ======================================
        // RESULTADO DA AVALIAÇÃO
        // ======================================

        if (pontos >= 60) {

            resultado.textContent =
                "🏆 " +
                pontos +
                " pontos! LOOK PERFEITO! ✨";

        }

        else if (pontos >= 40) {

            resultado.textContent =
                "🌟 " +
                pontos +
                " pontos! Você arrasou!";

        }

        else {

            resultado.textContent =
                "😊 " +
                pontos +
                " pontos! Continue montando!";

        }

    }
);


// ==========================================
// BOTÃO LIMPAR
// ==========================================

botaoLimpar.addEventListener(
    "click",
    function () {

        // Pega as roupas que estão no look
        const pecas =
            carrinho.querySelectorAll(
                ".roupa"
            );


        // Guarda-roupa
        const guardaRoupa =
            document.querySelector(
                ".roupas"
            );


        // Devolve as roupas
        pecas.forEach(function (peca) {

            guardaRoupa.appendChild(
                peca
            );

        });


        // Volta a mensagem inicial
        mensagem.textContent =
            "Arraste suas roupas para cá!";


        // Limpa o resultado
        resultado.textContent = "";

    }
);