class Estoque {
    constructor() {
        this.marca = document.querySelector('.marca');
        this.modelo = document.querySelector('.modelo');
        this.cor = document.querySelector('.cor');
        this.anoFab = document.querySelector('.anoF');
        this.anoMod = document.querySelector('.anoM');
        this.km = document.querySelector('.km');
        this.valor = document.querySelector('.valor')
        this.carro = []
    }

    //validação de campos no input
    validaDados() {
        if (
            this.marca.value.length !== 0 && this.modelo.value.length !== 0 && this.cor.value.length !== 0 && this.anoFab.value.length !== 0 && this.anoMod.value.length !== 0 && this.km.value.length !== 0 && this.valor.value.length
        ) return true;
        return false;
    }

    //cria objeto com informações do carro que será adicionado ao array
    criaObjt() {
        const infoCarro = {}

        infoCarro.modelo = this.modelo.value;
        infoCarro.marca = this.marca.value;
        infoCarro.cor = this.cor.value;
        infoCarro.anoFab = this.anoFab.value;
        infoCarro.anoMod = this.anoMod.value;
        infoCarro.km = this.km.value;
        infoCarro.valor = this.valor.value

        console.log(infoCarro)
        return infoCarro
    }
    adicionar() {
        if (this.validaDados()) {
            const info = this.criaObjt();
            this.carro.push(info);
            this.exibeCadastro();
            this.limpaInput();
        } else {
            alert('Vefifique se todos os campos foram preenchidos');
        }
    }

    //Limpa input para nova entrada de dados
    limpaInput() {
        document.querySelector('.marca').value = '';
        document.querySelector('.modelo').value = '';
        document.querySelector('.cor').value = '';
        document.querySelector('.anoF').value = '';
        document.querySelector('.anoM').value = '';
        document.querySelector('.km').value = '';
        document.querySelector('.valor').value = '';

        document.querySelector('.marca').focus()
    }

    //exibe cadastro no html
    exibeCadastro() {
        const lista = document.querySelector('.lista')
        const carro = this.criaObjt()
        let i = 0
        lista.innerHTML = ''
        for (i in this.carro) {
            lista.innerHTML += `<h1>Carro ${Number(i) + 1}</h1>`
            lista.innerHTML += `<p>Marca: ${carro.marca}</p>`;
            lista.innerHTML += `<p>Modelo: ${carro.modelo}</p>`;
            lista.innerHTML += `<p>Cor: ${carro.cor}</p>`;
            lista.innerHTML += `<p>Ano de fabricação: ${carro.anoFab}</p>`;
            lista.innerHTML += `<p>Ano do modelo: ${carro.anoMod}</p>`;
            lista.innerHTML += `<p>Km: ${carro.km}</p>`;
            lista.innerHTML += `<p>Valor: ${carro.valor}</p>`;
        }
    }

    excluir() {
        this.carro.pop()
        this.exibeCadastro()
    }
}


const estoque = new Estoque();