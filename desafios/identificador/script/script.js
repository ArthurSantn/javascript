function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var born = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (born.value.length == 0 || born.value > ano) {
        window.alert("Os dados inseridos não são válidos")
    } else {
        var sex = document.getElementsByName('optsex')
        var idade = ano - Number(born.value)
        var gênero = ``
        if (sex[0].checked) {
            gênero = `um Homem`
        } else if (sex[1].checked)  {
            gênero = `uma Mulher`
        }
        res.innerHTML = `Parece que você é ${gênero} com ${idade} anos.`
    }

}