const button = document.querySelector('.btn-postar');

button.addEventListener('click', () => {
    if (button.className === 'btn-postar') {
        post.postar()
    }
})

class Post {

    constructor() {
        this.nome = document.querySelector('#nome');
        this.conteudo = document.querySelector('#texto');
        this.id = 0
        this.postagem = [];
    }

    postar() {
        if (this.validaDados()) {
            const postagem = this.criaPostagem();
            this.postagem.push(postagem);
            this.exibeMensagem(this.postagem);
            this.limpaImput();
            this.id++
        } else {
            this.exibeErro();
        }
    }

    validaDados() {
        if (this.nome.value.length == 0 || this.conteudo.value.length == 0) return false;
        return true;
    }

    criaPostagem() {
        const postagem = {
            nome: this.nome.value,
            mensagem: this.conteudo.value,
            id: this.id
        }
        return postagem;
    }

    exibeErro() {
        if (this.nome.value.length == 0) {
            alert('Campo nome não pode estar vazio')
        } else {
            alert('Campo conteúdo não pode estar vazio')
        }
    }

    limpaImput() {
        this.nome.value = '';
        this.conteudo.value = '';
        this.nome.focus();
    }

    excluir(id) {
        for (let i in this.postagem) {
            if (id === this.postagem[i].id) {
                this.postagem.splice(i, 1)
                exibeMensagem(this.postagem)
            }
        }
    }

    editar(id) {


        button.className = "atualizar"

        button.innerText = 'Atualizar'

        this.nome.value = this.postagem[id].nome
        this.conteudo.value = this.postagem[id].mensagem

        button.addEventListener('click', () => {
            if (button.classList.contains('atualizar')) {
                let novArray = this.postagem.map(() => {
                    this.postagem[id].mensagem = this.conteudo.value
                })
                this.exibeMensagem(this.postagem)
                this.limpaImput()
                return
            }
        })



    }

    exibeMensagem(postagem) {
        console.log(this.postagem)
        const sectionP = document.querySelector('.postagens')

        sectionP.innerHTML = ''


        for (let i in postagem) {
            //cria divs e buttons da postagem
            const div = document.createElement('div');
            const divImg = document.createElement('div')
            const excluir = document.createElement('button')
            const editar = document.createElement('button')
            const img = document.createElement('img');

            img.src = 'img/usuario.png'

            //adciona classe a div e buttons
            divImg.className = 'div-img'
            img.className = 'img-user'
            div.className = 'postagem';
            excluir.className = 'btn-excluir';
            editar.className = 'btn-editar';

            //exibe nome autor
            div.innerHTML += `<h2>@${postagem[i].nome} diz:</h2>`;

            //cria div pai e div com imagem
            div.appendChild(divImg)
            divImg.appendChild(img)
            sectionP.appendChild(div);

            //exibe a mensagem e cria os botões
            div.innerHTML += `<p>${postagem[i].mensagem}</p> </br>`;
            excluir.innerText = 'Excluir';
            editar.innerText = 'Editar';
            div.appendChild(excluir);
            div.appendChild(editar);

            //captura evento de click nos botões
            excluir.addEventListener('click', () => {
                this.excluir(postagem[i].id)
            });

            editar.addEventListener('click', () => {
                this.editar(postagem[i].id)
            })
        }
        button.innerText = "Postar";
        button.className = 'btn-postar'

    }

}

const post = new Post();

