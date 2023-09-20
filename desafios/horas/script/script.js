function carregar() {

    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `

    if (hora >= 0 && hora < 12) {
        img.src= '../imagens/diar.png'
    } else if (hora >= 12 && hora < 18) {
        img.src= '../imagens/tarder.png'
    } else {
        img.src= '../imagens/noiter.png'
    }
}

