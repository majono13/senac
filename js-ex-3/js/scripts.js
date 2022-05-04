
function verificar() {
    const anoAtual = document.querySelector('.anoAtual');
    const anoNas = document.querySelector('.anoNas');
    const res = document.querySelector('.res');

    if (anoAtual.value.length !== 0 && anoNas.value.length !== 0) {
        const idade = Number(anoAtual.value) - Number(anoNas.value)

        res.innerHTML = `Sua idade aproximada é: ${idade}</br> obs: o resultado pode variar caso você ainda não tenha feito aniversário`
    } else {
        alert('[ERRO] Não pode haver nenhum campo vazio')
    }

}
