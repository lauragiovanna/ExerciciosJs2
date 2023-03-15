//Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

const table=(number)=> {  // fizemos uma função arrow aonde recebe o nome de tabuada e recebe um valor, depois ultilizamos o if=se falamos que 
    if(number > 10 || number < 1){ //se o numero for maior que 10 ou numero for menor que 1 que apareça a mensagem na tela falando que so aceitamos numeros entre 1 e 10
        console.log("Aceitamos somente numeros entre 1 e 10")
        return
    }
}

table(5)





const calculate= (number1,number2,operation)=>{
   let result
    switch (operation) {
        case "*":
            result= number1 * number2
            break;
    
        default:
            break;
    }
    return result
}
console.log(calculate(1,1,"*"))
console.log(calculate(1,2,"*"))
console.log(calculate(1,3,"*"))
console.log(calculate(1,4,"*"))
console.log(calculate(1,5,"*"))
console.log(calculate(1,6,"*"))
console.log(calculate(1,7,"*"))
console.log(calculate(1,8,"*"))
console.log(calculate(1,9,"*"))
console.log(calculate(1,10,"*"))

//outra forma de fazer uma tabuada 

for (let i=1; i<= 10; 1 ++){ // começando contar com o 1 , esse i ele vai contar enquanto for = ou maior que 10 e a cada passada ele vai incrementar um i
    console.log('${i} x ${number}= ${i*number}') // vai começar com 1 X number (que vamos colocar o valor) se quando chamarmos a funçaõ colocarmos o 2 sera 2x1=2 o 1 (é porque foi o valor que definimos que a nossa função iria começar)
}

table(9) //sera multiplicado pelo valor de i=1