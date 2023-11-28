function enviar() {
var start = window.document.getElementById('inicioid')
var end = window.document.getElementById('fimid')
var step = window.document.getElementById('passoid')
var res = window.document.getElementById('container')

if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
    res.innerHTML = 'Não consigo contar...'
} else {

    res.innerHTML = ''

    res.innerHTML = 'Contando: <br>'
    var x = Number(start.value)
    var y = Number(end.value)
    var z = Number(step.value)
    if (z <= 0 ) {
        window.alert('Por favor, o número de passos deve ser no mínimo 1')
        z = 1
    }

    if ( x < y) {
        //contando pra cima

        for(var c = x; c <= y; c += z) {
            res.innerHTML += `${c} \u{1F449}`
        }                                            
    } else {
            //contando pra baixo

            for (var c = x; c >= y; c -= z){
                res.innerHTML += `${c} \u{1F449}`
            }
        }   
        res.innerHTML += `\u{1F3C1}` 
    }
}


