function tabuada() {
    let a = document.getElementById('numeroid') 
    let b = document.getElementById('tabuadaid')

    if (a.value.length == 0) { 
        window.alert('Por favor, insira um número')
    }else {
        let x = Number(a.value)
        
        b.innerHTML = ''

        for (c = 1; c <= 10; c++) {
            let item = document.createElement(`option`)
            item.text = `${x} x ${c} = ${x*c}`
            b.appendChild(item)
            }

    }
    

}

function limpar() {
    let clear = document.getElementById('resetid')
    let b = document.getElementById('tabuadaid')

    if (b.value.lenght > 0 ) {
    
    } else {
        b.innerHTML = ''
    }
}

//${x} x ${c} = ${x*c} 