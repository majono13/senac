
class Pedidos {
    constructor() {
        this.itensForm = document.querySelectorAll('.itens');
        this.nome = document.querySelector('#nome');
        this.itens = [];
    }

    recebeComanda() {

        if (this.validaDados()) {
            for (const check of this.itensForm) {
                if (check.checked) {
                    this.itens.push(check.value)
                    this.novoPedido();
                    this.criaPedido();
                    console.log(this.itens)
                }
            }
        } else {
            alert('[ERRO] Digite seu nome e escolha um item para prosseguir')
        }
    }

    //valida dados
    validaDados() {
        let itensCheck = 0;

        for (const check of this.itensForm) {
            if (check.checked) { //verifica se ao menos um item foi marcado
                itensCheck++
            }
        }

        if (itensCheck !== 0 && this.nome.value.length !== 0) return true
        return false
    }

    //desabilita botão após formulário ser enviado
    novoPedido() {
        const button = document.querySelector('.button')
        button.innerText = 'Fazer novo pedido';

        button.addEventListener('click', function (e) {
            const el = e.target;

            if (el.classList.contains('button')) {

                document.querySelector('#nome').value = '';

            }
        })
    }


    somaTotal() {
        let total = 0
        const valores = [];
        for (let i in this.itens) {
            valores[i] = this.itens[i].replace(/\D/g, '')
            valores[i] = Number(valores[i])
        }
        for (let i in valores) {
            total += valores[i] / 100
        }
        return total.toFixed(2);
    }

    criaPedido() {
        const pedido = {};
        pedido.nome = this.nome;
        pedido.itens = this.itens;
        pedido.total = this.somaTotal();

        exibePedido(pedido)
    }
}

function exibePedido(pedido) {
    const divPedido = document.querySelector('.pedido');

    divPedido.innerHTML = ''
    divPedido.innerHTML += `<h1>${pedido.nome.value.toUpperCase()}</h1>`

    for (let i in pedido.itens) {
        divPedido.innerHTML += `<p>${pedido.itens[i].toUpperCase()}</p>`
    }

    divPedido.innerHTML += `<p>TOTAL: R$${pedido.total}</p>`
}
const pedido = new Pedidos();

console.log(pedido)