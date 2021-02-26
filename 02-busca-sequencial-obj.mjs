function buscaSequencial (vetor, valorBusca, fnComp) {
     for(let i = 0; i < vetor.length; i++) {
         if (fnComp(vetor[i], valorBusca)) return i // Retorna a posição onde foi encontrado 
     }
     return -1
}

/*
function comparaNome(objNome, valorBusca) {
    return objNome.first_name === valorBusca
}
*/

const comparaNome = (objNome, valorBusca) => obj.Nome.first_name === valorBusca

import { objNomes } from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, 'HUGO', comparaNome))

