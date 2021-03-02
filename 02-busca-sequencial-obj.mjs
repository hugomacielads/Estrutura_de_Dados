function buscaSequencial (vetor, fnComp) {
     for(let i = 0; i < vetor.length; i++) {
         if (fnComp(vetor[i])) return i // Retorna a posição onde foi encontrado 
     }
     return -1
}

/*
function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}

OBS: fnComp = comparaNome (verificar que uma função é passada como parâmetro de uma função)
*/

// const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca
// const comparaGrupo = (objNome, valorBusca) => objNome.group_name === valorBusca

// console.log(buscaSequencial(objNomes, 'HUGO', (obj, busca) => obj.first_name === busca))    // comparaNome
// console.log(buscaSequencial(objNomes, 'TULIO', (obj, busca) => obj.group_name === busca))   // comparaGrupo

import { objNomes } from './includes/vetor-obj-nomes.mjs'



console.log(buscaSequencial(objNomes, obj => obj.first_name === 'HUGO'))
console.log(buscaSequencial(objNomes, obj => obj.group_name === 'TULIO'))

// Primeiro nome da lista que tem mais de 1000 pessoas registradas com ele
let pos = buscaSequencial(objNomes, obj => obj.frequency_total > 1000)

console.log(objNomes[pos])

// Primeiro nome masculino da lista com mais de 10000 registros
pos = buscaSequencial(objNomes, obj => obj.frequency_total > 10000 && obj.classification === 'M')
console.log(objNomes[pos])
