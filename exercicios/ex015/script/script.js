function aplicar () {
let adicionar = document.getElementById('numid')
let numeros = document.getElementById('numsid')
let botaof = document.getElementById('finalizar')
let final = document.getElementById('final')

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