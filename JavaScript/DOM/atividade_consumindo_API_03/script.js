/* =========================================================
   PROJETO: Meus Eventos
   API utilizada: Nager.Date (feriados/eventos por país)
   Documentação: https://date.nager.at/Api
   Não precisa de chave (API key) para funcionar.
========================================================= */

// Guardo os elementos da página em variáveis para não ficar
// procurando eles várias vezes no código
const selectPais = document.getElementById("pais");
const selectAno = document.getElementById("ano");
const btnBuscar = document.getElementById("btnBuscar");
const inputPesquisa = document.getElementById("pesquisa");
const selectOrdenar = document.getElementById("ordenar");
const divFerramentas = document.getElementById("ferramentas");
const divMensagem = document.getElementById("mensagem");
const divListaEventos = document.getElementById("listaEventos");
const divListaFavoritos = document.getElementById("listaFavoritos");
const textoSemFavoritos = document.getElementById("semFavoritos");
const contador = document.getElementById("contador");
const divListaEventosInternos = document.getElementById("listaEventosInternos");

// Essa variável vai guardar os eventos que a API retornou,
// para eu poder filtrar/ordenar sem precisar chamar a API de novo
let eventosAtuais = [];

// Favoritos ficam salvos no localStorage do navegador,
// assim eles continuam lá mesmo se a página for recarregada
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];


/* =========================================================
   1) Ao carregar a página: preencher o select de anos
   e buscar a lista de países na API
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  preencherAnos();
  carregarPaises();
  mostrarFavoritos();
  carregarEventosInternos(); // busca os eventos da API interna
});


/* =========================================================
   0) API INTERNA
   Busca os eventos do arquivo local eventos-internos.json,
   que funciona como se fosse um "backend" próprio da escola.
   Mesmo sendo um arquivo local, usamos fetch() do mesmo jeito
   que usaríamos para uma API interna de verdade.
========================================================= */
async function carregarEventosInternos() {
  try {
    const resposta = await fetch("evento_externo.json");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os eventos externo.");
    }

    const eventosInternos = await resposta.json();

    // Ordena os eventos internos por data antes de mostrar
    eventosInternos.sort((a, b) => new Date(a.data) - new Date(b.data));

    renderizarEventosInternos(eventosInternos);

  } catch (erro) {
    divListaEventosInternos.innerHTML = `<p>Erro ao carregar eventos internos: ${erro.message}</p>`;
    console.error(erro);
  }
}

// Desenha os cards dos eventos internos na tela
function renderizarEventosInternos(lista) {
  divListaEventosInternos.innerHTML = "";

  lista.forEach((evento) => {
    const card = document.createElement("div");
    card.classList.add("card-evento", "interno");

    const categoria = document.createElement("span");
    categoria.classList.add("categoria");
    categoria.textContent = evento.categoria;

    const titulo = document.createElement("h3");
    titulo.textContent = evento.nome;

    const data = document.createElement("p");
    data.classList.add("data");
    data.textContent = "📅 " + formatarData(evento.data);

    const local = document.createElement("p");
    local.classList.add("local");
    local.textContent = "📍 " + evento.local;

    const descricao = document.createElement("p");
    descricao.classList.add("tipo");
    descricao.textContent = evento.descricao;

    card.appendChild(categoria);
    card.appendChild(titulo);
    card.appendChild(data);
    card.appendChild(local);
    card.appendChild(descricao);

    divListaEventosInternos.appendChild(card);
  });
}

// Cria as opções de ano (dos últimos 2 anos até o próximo ano)
function preencherAnos() {
  const anoAtual = new Date().getFullYear();
  for (let ano = anoAtual - 2; ano <= anoAtual + 1; ano++) {
    const opcao = document.createElement("option");
    opcao.value = ano;
    opcao.textContent = ano;
    if (ano === anoAtual) opcao.selected = true;
    selectAno.appendChild(opcao);
  }
}

// Busca na API a lista de países disponíveis
async function carregarPaises() {
  try {
    const resposta = await fetch("https://date.nager.at/api/v3/AvailableCountries");

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar a lista de países.");
    }

    const paises = await resposta.json();

    // Limpo o select antes de preencher
    selectPais.innerHTML = "";

    // Coloco o Brasil como primeira opção, se existir na lista
    paises.sort((a, b) => a.name.localeCompare(b.name));

    paises.forEach((pais) => {
      const opcao = document.createElement("option");
      opcao.value = pais.countryCode;
      opcao.textContent = pais.name;
      selectPais.appendChild(opcao);
    });

    // Deixa o Brasil selecionado por padrão, se ele existir
    selectPais.value = "BR";

  } catch (erro) {
    divMensagem.textContent = "Erro ao carregar países: " + erro.message;
    console.error(erro);
  }
}


/* =========================================================
   2) Buscar eventos (feriados) do país/ano escolhido
========================================================= */
btnBuscar.addEventListener("click", buscarEventos);

async function buscarEventos() {
  const pais = selectPais.value;
  const ano = selectAno.value;

  if (!pais) {
    divMensagem.textContent = "Escolha um país antes de buscar.";
    return;
  }

  divMensagem.textContent = "Carregando eventos...";
  divListaEventos.innerHTML = "";
  divFerramentas.style.display = "none";

  try {
    const url = `https://date.nager.at/api/v3/PublicHolidays/${ano}/${pais}`;
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("Não foi possível buscar os eventos desse país/ano.");
    }

    const dados = await resposta.json();

    if (dados.length === 0) {
      divMensagem.textContent = "Nenhum evento encontrado para esse país/ano.";
      return;
    }

    // Guardo os eventos na variável global para poder filtrar depois
    eventosAtuais = dados;

    divMensagem.textContent = "";
    divFerramentas.style.display = "flex";

    renderizarEventos(eventosAtuais);

  } catch (erro) {
    divMensagem.textContent = "Erro: " + erro.message;
    console.error(erro);
  }
}


/* =========================================================
   3) Renderizar (desenhar) os cards de eventos na tela
========================================================= */
function renderizarEventos(lista) {
  // Limpa a lista antes de desenhar de novo
  divListaEventos.innerHTML = "";

  contador.textContent = `${lista.length} evento(s) encontrado(s)`;

  lista.forEach((evento) => {
    const card = criarCardEvento(evento, false);
    divListaEventos.appendChild(card);
  });
}

// Função que cria o card (elemento HTML) de um evento
// ehFavorito serve para saber se o botão deve ser "adicionar" ou "remover"
function criarCardEvento(evento, ehFavorito) {
  const card = document.createElement("div");
  card.classList.add("card-evento");

  const titulo = document.createElement("h3");
  titulo.textContent = evento.localName;

  const data = document.createElement("p");
  data.classList.add("data");
  data.textContent = "📅 " + formatarData(evento.date);

  const tipo = document.createElement("p");
  tipo.classList.add("tipo");
  tipo.textContent = evento.name !== evento.localName ? evento.name : "Feriado nacional";

  const botao = document.createElement("button");

  if (ehFavorito) {
    botao.textContent = "Remover dos favoritos";
    botao.classList.add("btn-remover");
    botao.addEventListener("click", () => removerFavorito(evento));
  } else {
    botao.textContent = "⭐ Favoritar";
    botao.classList.add("btn-favoritar");
    botao.addEventListener("click", () => adicionarFavorito(evento));
  }

  card.appendChild(titulo);
  card.appendChild(data);
  card.appendChild(tipo);
  card.appendChild(botao);

  return card;
}

// Deixa a data no formato dia/mes/ano
function formatarData(dataTexto) {
  const partes = dataTexto.split("-"); // formato que vem da API: AAAA-MM-DD
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


/* =========================================================
   4) Pesquisa e ordenação dos eventos já carregados
========================================================= */
inputPesquisa.addEventListener("input", aplicarFiltros);
selectOrdenar.addEventListener("change", aplicarFiltros);

function aplicarFiltros() {
  const termo = inputPesquisa.value.toLowerCase();

  // Filtra pelo nome do evento
  let listaFiltrada = eventosAtuais.filter((evento) =>
    evento.localName.toLowerCase().includes(termo)
  );

  // Ordena de acordo com a opção escolhida
  if (selectOrdenar.value === "nome") {
    listaFiltrada.sort((a, b) => a.localName.localeCompare(b.localName));
  } else {
    listaFiltrada.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  renderizarEventos(listaFiltrada);
}


/* =========================================================
   5) Sistema de favoritos (adicionar / remover / salvar)
========================================================= */
function adicionarFavorito(evento) {
  // Verifica se o evento já está nos favoritos (evita duplicado)
  const jaExiste = favoritos.some(
    (fav) => fav.date === evento.date && fav.localName === evento.localName
  );

  if (jaExiste) {
    alert("Esse evento já está nos favoritos!");
    return;
  }

  favoritos.push(evento);
  salvarFavoritos();
  mostrarFavoritos();
}

function removerFavorito(evento) {
  favoritos = favoritos.filter(
    (fav) => !(fav.date === evento.date && fav.localName === evento.localName)
  );
  salvarFavoritos();
  mostrarFavoritos();
}

function salvarFavoritos() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function mostrarFavoritos() {
  divListaFavoritos.innerHTML = "";

  if (favoritos.length === 0) {
    textoSemFavoritos.style.display = "block";
    return;
  }

  textoSemFavoritos.style.display = "none";

  favoritos.forEach((evento) => {
    const card = criarCardEvento(evento, true);
    divListaFavoritos.appendChild(card);
  });
}