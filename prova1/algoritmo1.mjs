/* QUICK SORT
    MAPEAMENTO DAS VARIÁVEIS

    k -> Função de ordenação do quick sort ** Chamadas recursivas para trocas até que o vetor esteja ordenado
    m -> Vetor a ser ordenado
    n -> Variável de início
    o -> Ultimo elemento do vetor
    p -> Pivô que na primeira passada será igual o último elemento do vetor
    q -> Variável de divisão do vetor em 2 partes
    i -> Variável auxiliar para percorrer o vetor

*/
function k(m, fnComp, n, o) {
    if(o <= n) return
    const p = o
    let q = n - 1
    for(let i = n; i < o; i++) {
        //if(fnComp(m[i] < m[p]) {
        if (fnComp(m[p], m[i])) {
            q++
            if(i !== q) [ m[i], m[q] ] = [ m[q], m[i] ]
        }
    }
    q++
    //if(m[p] < m[q]) [ m[p], m[q] ] = [ m[q], m[p] ]
    if(fnComp(m[q] < m[p])) [ m[p], m[q] ] = [ m[q], m[p] ]
    k(m, fnComp, n, q - 1)
    k(m, fnComp, q + 1, o)
}

import { countries } from './prova1/countries.mjs'

k(countries, (a, b) => {
    if(a.continent === b.continent) {
        return a.country > b.country
    }
    else return a.continent > b.continent
})

console.log(countries)