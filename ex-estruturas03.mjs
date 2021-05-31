/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/
import { LinkedList } from './lib/LinkedList.mjs'

let lista = new LinkedList()

function listaCrescente(num) {

    if(lista.empty) {
        lista.insertHead(num)      // Inserindo o primeiro número na lista
    }
    else {
        let i = 0
        while(i <= lista.count) {       // Enquanto o valor de i for menor que o tamanho da lista
            if (num < lista.peek(i)) {  // Se o número for menor que o número da posição i
                lista.insert(i, num)    // Inserir na posição i o valor de num
                break
            }
            else if (i == lista.count - 1) {    // Se o valor de i chegar na última posição
                lista.insertTail(num)           // Inserir o valor no final da lista
                break
            }
            i++
        }
    }

    return lista.print()
}

let numero = listaCrescente(25)
console.log(lista.print())

numero = listaCrescente(14)
console.log(lista.print())

numero = listaCrescente(19)
console.log(lista.print())

numero = listaCrescente(3)
console.log(lista.print())

numero = listaCrescente(-7)
console.log(lista.print())

numero = listaCrescente(139)
console.log(lista.print())
