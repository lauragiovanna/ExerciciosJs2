//faca uma calculadora 

//a nossa calculadora tera 4 operações 
//ela vai somar +, subtratir - , dividir / ,multiplicar * ...

const calculate = ( number1,number2,operation ) => {//primeira coisa que vamos fazer é criar a funçãomdo tipo arrow , nela vai conter 2 numeros e a operação (se é dubtração,divisao ou soma
let result
    switch (operation) {
    case "+":
        result= number1+number2
        break;

        case "-":
            result= number1- number2
         break;
        
         case "/":
        result= number1 / number2
         break;
       
         case "*":
        result= number1 * number2
         break;

       
        default:
        break;


}
 return result
}

console.log(calculate(2,4, '*')) //executando a função 2,4 = 2*4
console.log(calculate(2,4, '-'))//executando a função 2,4= 2-4=2
console.log(calculate(2,4, '/'))//executando a função 2,4= 2/4=0,5
console.log(calculate(2,4, '+'))// executando função 2,4= 2+4=6