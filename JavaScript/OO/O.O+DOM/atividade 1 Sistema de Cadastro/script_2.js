class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100);
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.exibirNaTela();
    }

    exibirNaTela() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach(produto => {

            resultado.innerHTML += `
            <div class="produto">
                <p><strong>Nome:</strong> ${produto.nome}</p>
                <p><strong>Preço:</strong> ${produto.preco}</p>
                <p><strong>Categoria:</strong> ${produto.categoria}</p>
                <p><strong>Desconto:</strong> ${produto.desconto}%</p>

                <button type="button" onclick="estoque.excluirProduto(${this.produtos.indexOf(produto)})">
                    Excluir
                </button>

                <hr>
            </div>
        `;
        });

    }
}

const estoque = new Estoque();
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");

botaoCadastrar.addEventListener("click", function () {

    if (
        nome.value.trim() === "" ||
        preco.value === "" ||
        categoria.value.trim() === "" ||
        desconto.value === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    const produto = new Produto(
        nome.value.trim(),
        Number(preco.value),
        categoria.value.trim(),
        Number(desconto.value)
    );

    estoque.adicionarProduto(produto);

    estoque.exibirNaTela();

    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";

    nome.focus();
});
