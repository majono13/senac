const altura = document.querySelector('#altura');
const lista = [];
let maior = 0;


function validaDados() {
    if (altura.length === 0) {
        return false;
    } else {
        return true;
    }
};

function adicionar() {
    if (validaDados()) {
        lista.push(Number(altura.value));
        altura.value = '';
        altura.focus();
        verificar(lista);
    } else {
        alert('[ERRO] Tente novamente');
    }
};

function verificar(lista) {
    maior = lista[0];
    for (let i in lista) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    };
};

function exibeResultado() {
    const res = document.querySelector('#res');

    res.innerHTML = `A maior altura é: ${maior}`
}