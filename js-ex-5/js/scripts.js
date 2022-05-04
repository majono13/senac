function geraTabela() {
    const num = document.querySelector('.number');
    const res = document.querySelector('#res');

    res.innerHTML = ''

    if (num.value.length === 0) {
        alert('[ERRO] Por favor, digite um número');
    } else {
        for (let i = 1; i <= 10; i++) {
            res.innerHTML += `${num.value} X ${i} = ${Number(num.value) * i} </br>`
        }
    }
}