/*
    Implemente um programa verificador de palíndromos utilizando um deque.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/
import { Deque } from './lib/Deque.mjs'

const texto = '123456789'

const deque = new Deque()

// Empilhamento
for(let i = 0; i < texto.length; i++) {     // Percorrendo o vetor até a última letra
    deque.insertBack(texto.charAt(i))   // Transformando os caracteres em um vetor e inserindo ao final do deque
}

console.log(deque.print())          // Amostragem do vetor

let textoRev = ''               // Vetor vazio para a revisão do palíndromo

// Desempilhamento
while(! deque.empty) {          // Enquanto o deque nãoestiver vazio
    
    let carac = deque.removeBack()     // Inserindo caracteres invertidos
    textoRev += carac
}
console.log(textoRev)
