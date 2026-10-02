const criarMusica = require("./musica");
const { adicionarMusica, mostrarMusicas } = require("./lista");

const listaMusicas = [];

adicionarMusica(
    listaMusicas,
    criarMusica("Evidências", "Chitãozinho & Xororó")
);

adicionarMusica(
    listaMusicas,
    criarMusica("Ha Jesus", "julia vitoria")
);

adicionarMusica(
    listaMusicas,
    criarMusica("Medo Bobo", "Henrique & Juliano")
);

console.log("Minha lista de músicas:");

mostrarMusicas(listaMusicas).forEach(function(musica) {
    console.log(musica);
});