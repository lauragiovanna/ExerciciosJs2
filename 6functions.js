//escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maio

const numbers=(numberone, numbertwo) => { // fizemos uma função arrow que recebe dois numeros 
    if(numberone > numbertwo) console.log('o primeiro é maior') //se o numero 1 for maior que o numero 2 imprima na tela o primeiro é maior
    else console.log('o segundo é maior') // se o numero 2 fpr maior que o numero 1 imprima que o segundo é maior 
}
numbers(8,9) // chamamos a função e vai imprimir na tela qual é o maior se é o primeiro ou segundo.