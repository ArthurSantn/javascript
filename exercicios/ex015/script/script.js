function aplicar () {
let adicionar = document.getElementById('numid')
let numeros = document.getElementById('numsid')
let butaof = document.getElementById('finalizar')
let final = document.getElementById('final')

if (adicionar.value.length == 0 || adicionar.value > 500 || adicionar.value < 0) {
    window.alert('O valor digitado é invalido')
} else {

//adicionar valores no Select

    //let add = Number(adicionar.value)
    let options = document.createElement(`option`)
    numeros.appendChild(adicionar)
    
}

}