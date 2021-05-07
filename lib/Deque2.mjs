export class Deque {

    #data   // Armazenamento
    #head   // Início do Deque
    #tail   // Final do Deque

    constructor() {
        this.#data = {}
        this.#head = 0
        this.#tail = -1
        //console.log(this.#data, this.#head, this.#tail)
    }

    insertFront(val) {
        this.#head--
        this.#data[this.#head] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    insertBack(val) {
        this.#tail++
        this.#data[this.#tail] = val
        //console.log(this.#data, this.#head, this.#tail)
    }

    get empty() {
        return this.#tail - this.#head + 1 === 0
    }

    removeFront() {
        if(this.empty) return undefined
        let temps = this.#data[this.#head]
        delete this.#data[this.#head]
        this.#head++
        //console.log(this.#data, this.#head, this.#tail)
        return temps
    }

    removeBack() {
        if(this.empty) return undefined
        let temps = this.#data[this.#tail]
        delete this.#data[this.#tail]
        this.#tail++
        //console.log(this.#data, this.#head, this.#tail)
        return temps
    }

    peekFront() {
        return this.#data[this.#head]
    }

    peekBack() {
        return this.#data[this.#tail]
    }

    print() {
        return JSON.stringify(this.#data)
    }
}

/*
let deque = new Deque()
deque.insertBack('Cascão')
deque.insertBack('Cebolinha')
deque.insertBack('Magali')
deque.insertFront('Mônica')
deque.insertFront('Chico Bento')

let atendido = deque.removeFront()
console.log({atendido})

let primeiro = deque.peekFront()
let ultimo = deque.peekBack()
console.log({primeiro, ultimo})
*/