function adicionarMusica(lista, musica) {
    lista.push(musica);
}

function mostrarMusicas(lista) {
    return lista.map(function(musica) {
        return musica.nome + " - " + musica.artista;
    });
}

module.exports = {
    adicionarMusica,
    mostrarMusicas
};