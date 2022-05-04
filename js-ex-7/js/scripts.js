const nota = document.querySelector('.number');
let notas = []


function adicionaNotas() {

    //limpa HTML
    res.innerHTML = ''

    if (nota.value.length !== 0) {
        notas.push(Number(nota.value));

        //limpa input após valor ser digitado
        nota.value = '';
        nota.focus();

    } else {
        alert('[ERRO] Digite a nota antes de prosseguir');
    }
}

function mostraMedia() {
    let media = 0
    const res = document.querySelector('.res');
    if (notas.length === 0) {
        alert('[ERRO] Adicione uma nota antes de prosseguir');
    } else {
        for (let i in notas) {
            media += notas[i] / notas.length
        }
    }
    //confere se o aluno foi aprovado ou não
    if (media >= 6) {
        res.innerHTML = `A media do aluno é: ${media.toFixed(2)}, o aluno foi aprovado`
    } else {
        res.innerHTML = `A media do aluno é: ${media.toFixed(2)}, o aluno foi reprovado`
    }
    //exclui valores do array
    notas = []
}
