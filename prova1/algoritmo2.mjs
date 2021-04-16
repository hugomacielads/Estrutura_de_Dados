/* BUSCA BINARIA

    MAPEAMENTO DA VARIÁVEIS

    k -> Função de busca
    m -> Vetor a ser ordenado
    n -> Valor procurado
    o -> Posição incial do vetor, igual a 0
    p -> Posição final do vetor
    q -> Posição do meio


*/

function k(m, fnComp) {
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        if(fnComp(m[q])) return q
        else if(busca > m[q]) o = q + 1
        else p = q - 1
    }
    return -1  // Não existe
}

import { countries } from './countries.mjs'

console.log(k(countries, (a, busca = 'Brazil') => {
    if(busca === a.country) return a = q
    else if (busca < a.country) return -1       //Linhas não necessárias quando não usamos a estrutura switch
    else return 1    
}))
