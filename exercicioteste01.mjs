/*

    1) Observe a árvore binária representada na figura "arvore.png". Responda:
        a) Quantos níveis essa árvore possui? 6
        b) Qual a altura da subárvore cuja raiz é 16? 4
        c) Qual a profundidade do nodo de valor 29? 5

    2) Monte em código, neste arquivo, a árvore representada na figura.

*/ 

import { BinarySearchTree } from './lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()
arvore.insert(51)
arvore.insert(16)
arvore.insert(87)
arvore.insert(9)
arvore.insert(44)
arvore.insert(72)
arvore.insert(99)
arvore.insert(1)
arvore.insert(14)
arvore.insert(35)
arvore.insert(60)
arvore.insert(79)
arvore.insert(92)
arvore.insert(20)
arvore.insert(43)
arvore.insert(58)
arvore.insert(86)
arvore.insert(29)

let percursoEmOrdem = []
arvore.inOrderTraversal(val => percursoEmOrdem.push(val))
console.log("Percurso em Ordem antes da remoção", {percursoEmOrdem})

/*
    3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

*/

arvore.remove(58)
arvore.remove(35)
arvore.remove(87)
arvore.remove(51)

console.log('Retirando 58, 35, 87 e 51')
/*

    4) Anote, abaixo, os percursos da árvore após as remoções:
        a) Percurso em-ordem:
        b) Percurso pré-ordem:
        c) Percurso pós-ordem:
*/

percursoEmOrdem = []
arvore.inOrderTraversal( val => percursoEmOrdem.push(val))
console.log({percursoEmOrdem})

let percursoPreOrdem = []
arvore.preOrderTraversal(val => percursoPreOrdem.push(val))
console.log({percursoPreOrdem})

let percursoPosOrdem = []
arvore.postOrderTraversal(val => percursoPosOrdem.push(val))
console.log({percursoPosOrdem})


/*
    5) Anexe este arquivo, com o código da árvore binária de busca, ao
        entregar a prova.
*/
