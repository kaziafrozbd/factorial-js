// count factorial

function countFactorial(number){
    let factorial = 1;
    for(let i = 1; i <=myNumber ; i++){
        factorial = factorial * i;
    }
    return factorial;
}
let myNumber = 5;
let resultFactorial = countFactorial(myNumber);
console.log('the factorial is:', resultFactorial);