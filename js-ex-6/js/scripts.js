(function () {
    const res = document.querySelector('.container');
    const numeros = [];
    const numerosPares = [];
    let cont = 0
    let soma = 0

    for (let i = 0; i <= 50; i++) {
        numeros[i] = i;
        if (i % 2 === 0 && i !== 0) {
            numerosPares[cont] = i
            soma += numerosPares[cont]
            cont++
        };
    };
    //exibe resultado no html
    res.innerHTML = `<p>O número par na posição 3 é: ${numerosPares[2]}, e o número par na posição 6 é: ${numerosPares[5]}</p>`
    res.innerHTML += `<p> A soma de todos os números pares é: ${soma}</p>`
})();