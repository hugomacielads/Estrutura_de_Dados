// Fatorial de um número com recursividade
function fatorial(n) {
    if(n <= 1) return 1             // Condição de saída
    else return n * fatorial(n - 1)
}
console.log(fatorial(5))