/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {                           // E: Nova classe: Doubly Linked List

    /* Código omitido */

    i(j, k) {                           // i: Função insert
        if(j < 0) return                // j: Posição onde se encontra o nodo
        const l = new A(k)              // k: Valor do nodo
        if(this.empty) {                // l: Váriavel de armazenamento do nodo
            this.#f = l                 // A: Novo elemento da classe Node
            this.#g = l                 // f: Nodo Head (primeiro da sequência)
        }                               // g: Nodo Tail (último da sequência)
        else if(j === 0) {
            l.d = this.#f               // d: Valor do próximo nodo da sequência
            this.#f.c = l               // c: Valor do nodo anterior
            this.#f = l
        }
        else if(j >= this.#h) {         // h: Quantidade de elementos da lista
            l.c = this.#g
            this.#g.d = l
            this.#g = l
        }
        else {
            let m = this.#n(j)          // m: Váriavel para armazenar a posição onde o nodo deve ser inserido
            let o = m.c                 // n: Function #findNode
            l.d = m                     // o: Váriavel para armazenar a a posição anterior do nodo que será inserido
            o.d = l
            l.c = o
            m.c = l
        }
        this.#h++

    }

    /* Código omitido */

}