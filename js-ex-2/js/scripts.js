(function () {
    const res = document.querySelector('#res');

    for (let num = 0; num <= 100; num++) {
        if (num % 2 === 0 && num !== 0) {
            res.innerText += `${num} - `
        }
    }
})();
