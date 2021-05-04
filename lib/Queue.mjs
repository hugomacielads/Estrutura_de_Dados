/*
    ESTRUTURA DE DADOS FILA

    - Pilha é uma lista linear de acesso restrito, que permite apenas operações
      de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
    - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out -
      último a entrar, primeiro a sair).
    - A principal aplicação das pilhas são tarefas que envolvem a inversão de uma
      sequência de dados.
*/

export class Queue {

    #data

    constructor() {
        this.#data = []     // Vetor vazio
    }

    // Inserção na fila (enfileiramento)
    enqueue(val) {
        this.#data.push(val)
    }

    // Remoção da fila (desenfileiramento)
    dequeue() {
        return this.#data.shift()
    }

    // "Espiadinha": (no início)
    peek() {
        return this.#data[0]
    }

    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}