/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).
    
    3. Comente os principais trechos do código, explicando seu objetivo.
*/

class E {               

    /* Código omitido */

    /*
        Método remove(pos) da classe "Lista Encadeada (Linked List)"

        Para se retirar um valor de uma lista encadeada é necessário estabelecer
        as posições before, removed e after.

        A troca entre esses três nodos permite a remoção de um nodo da lista

        Before: Encontra a posição anterior ao nodo da remoção
        Removed: Recebe o valor removido
        After: Atualiza o nodo sucessor, agora com o nodo anterior ao removed como seu antecessor *Troca*
    */


    i(j) {                      
        // Validação caso a lista esteja vazia OU a posição é maior que o tamanho da lista                      
        if(this.empty || j < 0 || j > this.#h - 1) return undefined
        let k

        // Remoção do início da lista
        if(j === 0) {
            k = this.#f
            this.#f = this.#f.c 
            if(this.#h === 1) this.#g = this.#f.c
        }
        else {
            let l = this.#f

            // for(), para encontrar a posição anterior (before) a posição que deseja ser removida
            for(let i = 0; i < j - 1; i++) l = l.c  // before se torna 
            k = l.c                                 // Removed passa a ser o nodo da posição sucessora
            let m = k.c                             // After passa a apontar para o nodo sucessor ao posição que deseja ser removida
            l.c = m                                 // Before agora aponta para o nodo after, concluíndo a remoção
            if(j === this.#h - 1) this.#g = l
        }
        this.#h--   // Retira a contagem de um elemento da quantidade de nodos da lista
        return k.b
    }

}
    /* Código omitido */

/*
    E: Classe Lista Encadeada (Linked List)
    i: Método remove(), para remoção de um nodo da lista
    j: posição do nodo que será removido
    h: Atributo interno #count, retorna a quantidade de elementos da lista
    k: Variável de armazenamento do nodo removido
    f: Atributo interno #head, retorna o primeiro elemento da lista
    c: Método .next, retorna o nodo sucessor ao nodo analisado
    g: Atributo interno #tail, retorna o último elemento da lista
    l: Váriavel before para encontrar o valor antecessor ao nodo que deseja ser removido
    m: Variável after para armazenar o valor sucessor ao nodo que deseja 
    b: Atributo .data, utilizado para retornar o valor removido
*/