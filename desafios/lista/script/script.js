 /*
let adicionar = document.getElementById('numid')
let numeros = document.getElementById('numsid')
let botaof = document.getElementById('finalizar')
let final = document.getElementById('final')
let valores = []


function aplicar () {
if (adicionar.value.length == 0 || adicionar.value > 500 || adicionar.value < 0) {
    window.alert('O valor digitado é invalido')
} else {

    let add = Number(adicionar.value)

    let novo = document.createElement(`option`)
    novo.text = `${add}`
    numeros.appendChild(novo)
    
}

}

function finalizar () {
    
}

*/

let num = document.getElementById('numid') //input
let lista = document.getElementById('numsid') //select
let reposta = document.getElementById('final') //div no final
let valores = [] //lista

//valida o tamanho dos números
function isnumero (n){

    if(Number(n) >= 1 && Number(n) <= 500) {
        return true

    } else {
        return false
    }
}

//identifica se já está dentro da lista
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) { 
        return true

    } else {
        return false
    }
}

function aplicar () {
    if(isnumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))

        //adiciona option
        let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
                lista.appendChild(item)
                    reposta.innerHTML = ''
    } else {
        window.alert('O valor digitado é invalido ou já está na lista')
    }

    //apaga e deixa marcado o campo de adicionar números
    num.value = ''
    num.focus()
}

function finalizar () {
    if(valores.length == 0) {
        window.alert(`Tá errado zé`)
    } else {
        let tamanho = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = valores[0]
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        reposta.innerHTML = ''
        reposta.innerHTML += `<ul><li><p>A lista tem ${tamanho} números</p></li></ul>`
        reposta.innerHTML += `<ul><li><p>Os números são ${valores}</p></li></ul>`
        reposta.innerHTML += `<ul><li><p>O maior valor da lista é ${maior}</p></li></ul>`
        reposta.innerHTML += `<ul><li><p>O menor valor da lista é ${menor}</p></li></ul>`
        reposta.innerHTML += `<ul><li><p>A soma dos valores é ${soma}</p></li></ul>`
        reposta.innerHTML += `<ul><li><p>A média dos valores é ${soma/tamanho}</p></li></ul>`
    }
}