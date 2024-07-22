const form = document.getElementById("form_contato")
const imgTelefone = "<img src='./images/telefone-vermelho.png' alt='Emoji telefone' />"
const NomeContatos = []
const numeroContatos = []

let linhas = ""

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato")
    const inputNumeroContato = document.getElementById("numero-contato")

    if (NomeContatos.includes(inputNomeContato.value)) {
        alert(`O Contato ${inputNomeContato.value} já foi inserido`)
    } else {
        if (inputNumeroContato.value.length < 11) {
            alert(`O numero deve conter o DDD`)
        } else {
            NomeContatos.push(inputNomeContato.value)
            numeroContatos.push(inputNumeroContato.value)

            let ddd = inputNumeroContato.value[0] + inputNumeroContato.value[1]
            const numeroSemDDD = inputNumeroContato.value.replace(ddd,'');

            let linha = '<tr>'
            linha += `<td>${inputNomeContato.value}</td>`
            linha += `<td>${imgTelefone} (${ddd})${numeroSemDDD} </td>`
            linha += `</tr>`
            
            console.log(numeroSemDDD)

            linhas += linha;
        }
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

function limpaInputs() {
    document.getElementById("nome-contato").value = ""
    document.getElementById("numero-contato").value = ""
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    limpaInputs()
})
