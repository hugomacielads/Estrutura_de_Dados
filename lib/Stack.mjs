/*
    ESTRUTURA DE DADOS PILHA

    - Pilha é uma lista linear de acesso restrito, que permite apenas operações
      de enfileiramento (enqueue) e desenfileiramento (dequeue), a primeira ocorrendo 
      no final da estrutura e a segunda no início da estrutura
    - Como consequência, a pilha funciona pelo princípio FIFO (First In, First Out -
      primeiro a entrar, primeira a sair).
    - A principal aplicação das filas são tarefas que envolvem processamento de tarefas
      por ordem de chegada.
*/
export class Stack {

    #data

    constructor() {
        this.#data = []         // Inicializa o vetor vazio
    }

    // Inserção
    push(val) {
        this.#data.push(val)
    }

    // Retirada
    pop(val) {
        return this.#data.pop(val)
    }

    // "Espiadinha": retorna o valor que está no topo da planilha (último valor), mas
    // sem retirá-lo de lá
    peek() {
        return this.#data[this.#data.length - 1]
    }

    // A pilha está vazia (true/false) - PROPRIEDADE CALCULADA (só getter)
    get empty() {
        return this.#data.length === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }

}

/*
let pilha = new Stack();
pilha.push(5)
pilha.push(6)
pilha.push(4)
pilha.push(2)
console.log('Peek: ', pilha.peek())
console.log('Peek: ', pilha.peek())
console.log(pilha.empty)
console.log(pilha.print())
let x = pilha.pop()
console.log('Pop:', x)
console.log('Peek: ', pilha.peek())
console.log('Peek: ', pilha.peek())
console.log(pilha.print())
*/