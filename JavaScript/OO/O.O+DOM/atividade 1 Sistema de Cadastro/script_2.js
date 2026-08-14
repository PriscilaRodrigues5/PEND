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
        const produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach(produto => {
            resultado.innerHTML += `
            <div>
                <p>Nome: ${produto.nome}</p>
                <p>Preço: ${produto.preco}</p>
                <p>Categoria: ${produto.categoria}</p>
                <p>Desconto: ${produto.desconto}%</p>
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

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(nome.value, parseFloat(preco.value), categoria.value, parseFloat(desconto.value));
    // produto.aplicarDesconto();
    // produto.exibir();
    estoque.adicionarProduto(produto);
    estoque.exibirProdutos();

});
