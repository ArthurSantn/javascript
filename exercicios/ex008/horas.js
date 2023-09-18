var agora = new Date()
var hora = agora.getHours()
var hora = 5
console.log(`Agora são exatamente ${hora}:00 horas.`)
    if (hora < 12 ) {
        console.log('Bom dia!!')
    } else if (hora <= 18) {
        console.log('Boa tarde!!')
    } else if (hora < 6) {
        console.log('Boa Madrugada!!')
    } else {
        console.log('Boa noite')
    }  