let num = [5, 1, 3, 8, 2, 4, 9 ,0 , 7]
num.push(6)
num.sort()
let find = num.indexOf(6)
let largura = num.length

console.log(`${largura}`) 
console.log(`${num}`) 

if (find < 0) {
    console.log('Essa variável não se encontra presente no vetor')
} else {
    console.log(`o valor está na posição ${find}`)
}

/*
console.log(`Essa é a variável ${num}`)

num [11] = 12 <- Adiciona uma posição especifica ao vetor
num.push(13) <- Adiciona uma posição  forçadamente ao vetor
num.length = 5 <- Limita o tamanho/quantidade de números do vetor
num.sort() <- Organiza em ordem crescente o vetor
*/

/*
let num = [5, 1, 3, 8, 2, 4, 9 ,0 , 6, 7]

console.log(`O vetor tem ${num.length} de comprimento`)
console.log(`O quarto valor do vetor é ${num[3]}`)

for (let pos = 0; pos<num.length; pos++) {
    console.log(`Na posição ${pos} está o valor ${num[pos]}`)
} console.log(`Acabou`)

for(let pos in num) {
    console.log(`Na posição ${pos} está o valor ${num[pos]}`)
}
*/