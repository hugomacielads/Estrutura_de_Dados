// Função que eleva um número ao quadrado

quadrado = n => n ** 2

console.log(quadrado(3))

// Função com mais de um parâmetro
function potencia(b, e) {
    return b ** e
}
console.log(potencia(2, 8))

// Função equivalente no formato arrow function
// Quando tempos mais de um parâmetro, os parênteses em volta dos arguments voltam a ser obrigatórios
let potencia2 = (b, e) => b ** e

// Função sem parâmetro
function megasena() {
    // Esta função retorna um número aleatório entre 1 e 60
    // Math.random() -> Retorna um número aleatório entre 0 (inclusive) e 1 (exlcusive)
    // * 60 -> ajusta a faixe de valores para entre 0 e 59
    // +1 -> ajusta a faixa de valores para entre 1 e 60
    // Math.floor -> Arredondar para o menor inteiro (tirar as casas decimais)
    return Math.floor(Math.random() * 60 + 1)
}

console.log(megasena(), megasena(), megasena(), megasena(), megasena(), megasena(),)

// Quando a função não tem argumentos, na arrow function é necessário deixar
// um par de parênteses vazios para marcar seu lugar
const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2(), megasena2(), megasena2(), megasena2(), megasena2(), megasena2(),)

// Função com mais de uma linha de código no corpo
function somavet(vet) {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somavet([12, 42, -11, 20, 9, 16]))

// Quando a função tem mais de uma linha de código, na arrow function equivalente
// retornam as chaves e também a palavra return, caso ela retorne valor
const somavet2 = vet => {
    let soma = 0
    for (let n of vet) soma += n
    return soma
}
console.log(somavet2([12, 42, -11, 20, 9, 16]))

// CONCLUSÃO: Arrow functions foram concebidas para facilitar a escrita de 
// funções de apenas uma linha, embora também possa ser usadas para funções de múltiplas linhas.7

