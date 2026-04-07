var notas = [5.6, 7.6, 8.9];
console.log(notas)

console.log(notas[0])
console.log(notas[1])
console.log(notas[2])

//prover erro de 'out of bounds'
console.log(notas[3]) //underfind

//percorre o vetor
console.log('laço percorrendo')
var cont;
for(cont = 0; cont < 3; cont++){
    console.log(notas[cont])
}

//percorrendo mais moderno
console.log('laço percorrendo moderno')
notas.forEach(obj => console.log(obj))