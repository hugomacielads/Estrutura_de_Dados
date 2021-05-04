export class Queue {

    #data
    #head
    #tail

    constructor() {
        this.#data = {}     // Objeto vazio
        this.#head = 0      // Início da fila
        this.#tail = -1     // Final da fila
        //console.log(this.#data, this.#head, this.#tail)
    }

    enqueue(val) {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    dequeue() {
        // Se a fila já estiver vazia, retorna undefined para não
        // afetar o posicionamento de #head
        if(this.empty) return undefined

        let temp = this.#data[this.#head]   // Salva o elemento no início da fila
        delete this.#data[this.#head]       // Apaga o elemento do início da fila
        this.#head++
        //console.log(this.#data, this.#head, this.#tail)
        return temp
    }

    peek() {
        return this.#data[this.#head]
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    print() {
        return JSON.stringify(this.#data)
    }
}
/*
let fila = new Queue()

fila.enqueue('Leila')
fila.enqueue('Adalberto')
fila.enqueue('Cléber')
fila.enqueue('Paula')

console.log(fila.print())



let atendido = fila.dequeue()
console.log({atendido})

atendido = fila.dequeue()
console.log({atendido})

fila.enqueue('Yara')

fila.dequeue()
fila.dequeue()
fila.dequeue()

fila.enqueue('Ubiratan')
*/