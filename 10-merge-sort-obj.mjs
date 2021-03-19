let comps, divisoes, juncoes

 function mergeSort(vetor, fnComp) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length) {
            //if(vetEsq[pEsq] < vetDir[pDir]) {
            if(fnComp(vetDir[pDir], vetEsq[pEsq])) {    // Parâmetros invertidos
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps ++
        }
        // Descobrir de qual lado sobrou
        let sobra
        // Sobra à esquerda
        if (pEsq < pDir) sobra = vetEsq.slice(pEsq)
        // Sobra à direita
        else sobra = vetDir.slice(pDir)

        // Retorna vetor de resultador + sobra
        return[...vetRes, ...sobra]
    }

    // Para ser "desmontado", um vetor deve ter, pelo menos, 2 elementos
    if(vetor.length > 1) {
        const meio = Math.floor(vetor.length / 2)
        // slice() fatia um vetor, copiando os elementos desde a posição inicial informada
        // (inclusive) até a posição final (exclusive a posição final NÃO entra)
        let vetEsq = vetor.slice(0, meio)
        // caso o segundo parâmetro do slice() seja omitido, serão copiados os elementos
        // desde a posição informada até a posição final
        let vetDir = vetor.slice(meio)
        divisoes++

        // Chamadas recursivas a função
        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)

        const vetFinal = mesclar(vetEsq, vetDir)
        juncoes++

        return vetFinal
    }
    return vetor    // Vetor de 1 elemento, não modificado, condição de saída
}

import { candidatos } from './includes/candidatos-2018.mjs'

comps = 0, divisoes = 0, juncoes = 0
// console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando oelo nome de urna (NM_URNA_CANDIDATO)
//const candidatosOrd = mergeSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

//Ordenação por dois níveis: primeiro por UE (SG_UE) e, dentro da UE, pelo nº do candidato (NR_CANDIDATO)
let candidatosOrd = mergeSort(candidatos, (obj1, obj2) => {
    if(obj1.SE_UE === obj2.SG_UE) {
        return obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE     // A diferenciação se dá por UF
})

let memoria = process.memoryUsage().helpUsed / 1024 / 1024
console.timeEnd('Ordenando candidatos...')
console.log('DEPOIS:', candidatosOrd)
console.log({comps, divisoes, juncoes})