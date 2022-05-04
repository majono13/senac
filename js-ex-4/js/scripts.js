const num = document.querySelector('.number');
const numeros = [];
const res = document.querySelector('#res')

function adicionar() {
    if (validaDados(numeros)) {
        numeros.push(Number(num.value));
        res.innerHTML += `${num.value} - `

        //limpa input para receber novo valor
        num.value = '';
        num.focus();

        if (numeros.length === 5) encontraMaior(numeros);
    } else {
        alert('[ERRO]');
    }
}

function validaDados(vetor) {
    if (num.value.length === 0 || vetor > 5) {
        return false;
    } else {
        return true;
    }
}

function encontraMaior(vetor) {
    let maior = vetor[0];
    for (let i in vetor) {
        if (maior < vetor[i]) {
            maior = vetor[i]
        }
    }

    exibeValores(maior, vetor);
}

function exibeValores(maior, vetor) {
    res.innerHTML += `</br>O maior valor é: ${maior}`
}