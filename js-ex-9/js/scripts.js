class Estoque {
    constructor() {
        this.marca = document.querySelector('.marca');
        this.modelo = document.querySelector('.modelo');
        this.cor = document.querySelector('.cor');
        this.anoFab = document.querySelector('.anoF');
        this.anoMod = document.querySelector('.anoM');
        this.km = document.querySelector('.km');
        this.valor = document.querySelector('.valor');
        this.carro = [];
        this.id = 0;
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
        infoCarro.id = this.id;

        return infoCarro
    }
    adicionar() {
        if (this.validaDados()) {
            const info = this.criaObjt();
            this.carro.push(info);
            this.id++
            exibeCadastro();
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

    remover(id) {

        if (confirm(`Deseja realmente deletar este carro com o ID ${id}?`)) {
            let tbody = document.querySelector('#tbody');

            for (let i = 0; i < this.carro.length; i++) {
                if (this.carro[i].id == id) {

                    this.carro.splice(i, 1)
                    tbody.deleteRow(i);
                }
            }
        }
    }
}

//exibe cadastro no html
function exibeCadastro() {
    const tbody = document.querySelector('#tbody')
    const carro = estoque.carro

    tbody.innerText = ''
    for (let i in carro) {
        const tr = tbody.insertRow();
        let tdMarca = tr.insertCell();
        let tdModelo = tr.insertCell();
        let tdCor = tr.insertCell();
        let tdAnoFab = tr.insertCell();
        let tdAnoMod = tr.insertCell();
        let tdKm = tr.insertCell();
        let tdValor = tr.insertCell();
        let tdRemover = tr.insertCell();

        tdMarca.innerText = carro[i].marca.toUpperCase();
        tdModelo.innerText = carro[i].modelo.toUpperCase();
        tdCor.innerText = carro[i].modelo.toUpperCase();
        tdAnoFab.innerText = carro[i].anoFab;
        tdAnoMod.innerText = carro[i].anoMod;
        tdKm.innerText = carro[i].km;
        tdValor.innerText = carro[i].valor;
        tdRemover.innerText = 'REMOVER';

        tdRemover.classList = 'rem';

        tdRemover.addEventListener('click', function (e) {
            const el = e.target;

            if (el.classList.contains('rem')) {
                estoque.remover(carro[i].id);
            }
        })


    }
}


const estoque = new Estoque();