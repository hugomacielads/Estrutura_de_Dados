import { BinarySearchTree } from './lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()
arvore.insert(41)
arvore.insert(76)
arvore.insert(19)
arvore.insert(34)
arvore.insert(88)
arvore.insert(25)
arvore.insert(50)
arvore.insert(30)
arvore.insert(3)
arvore.insert(66)
arvore.insert(12)
arvore.insert(81)

let percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log({percursoEm})

let percursoPre = []
arvore.preOrderTraversal(val => percursoPre.push(val))
console.log({percursoPre})

let percursoPos = []
arvore.postOrderTraversal(val => percursoPos.push(val))
console.log({percursoPos})

let min = arvore.min()
let max = arvore.max()
console.log({min, max})

let existe48 = arvore.search(48)
let existe25 = arvore.search(25)
let existe19 = arvore.search(19)
let existe10 = arvore.search(10)
console.log({existe48, existe25, existe19, existe10})

console.log('--------------------------------------')

percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log({percursoEm})

// Remoção do nodo grau 0
arvore.remove(81)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 81:', {percursoEm})

// Remoção do nodo grau 1 com esquerda
arvore.remove(34)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 34:', {percursoEm})

// Remoção do nodo grau 1 com direita
arvore.remove(50)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 50:', {percursoEm})

// Remoção de nodo grau 2
arvore.remove(19)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 19:', {percursoEm})

// Remoção do nodo raiz
arvore.remove(41)
percursoEm = []
arvore.inOrderTraversal(val => percursoEm.push(val))
console.log('Sem o 41:', {percursoEm})