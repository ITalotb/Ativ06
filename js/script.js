function tabuada() {
    let saida = document.getElementById('saida')
    let n = Number(document.getElementById('fnum').value)

    saida.innerHTML = `<h2>Tabuada de ${n}</h2>`
    if (n <=10) {
        let c = 1
    while (c <=10) {
        saida.innerHTML += `${n} * ${c} = <strong>${n * c}</strong><br>`
        c ++
    }
}else{
    saida.innerHTML += `<p><strong>ERRO!!</strong> informe um número até 10!</p>`
}
}