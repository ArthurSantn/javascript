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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            gênero = `um Homem`
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/kid-m.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './imagens/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-m.png')
            }
            
        } else if (sex[1].checked)  {
            gênero = `uma Mulher`
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', './imagens/kid-f.png')
            } else if (idade < 18) {
                //adolescente
                img.setAttribute('src', './imagens/jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', './imagens/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', './imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.padding = '10px'
        res.innerHTML = `Parece que você é ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}