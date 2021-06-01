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
    
    textoRev = deque.removeBack()     // Inserindo caracteres invertidos

}
console.log(textoRev)

/*
import { Deque } from './lib/Deque2.mjs'    // Tanto faz Deque ou Deque2

const verificador = new Deque()

const palindromo = 'A TODA ACRÓPOLE DOMADA: ROMANA NA MORADA MODELO PORCA ADOTA!'

for(let i = 0; i < palindromo.length; i++) {
    // Insere as letras do palíndromo no final do deque
    verificador.insertBack(palindromo.charAt(i))
}

console.log(verificador.print())

let inverso = ''

while(! verificador.empty) {
    // Para inverter, a remoção deve ser feita no final do deque
    inverso += verificador.removeBack()
}

console.log(palindromo)
console.log(inverso)
*/