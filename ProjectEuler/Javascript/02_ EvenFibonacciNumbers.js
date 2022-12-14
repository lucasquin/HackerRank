/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */

let a = 0;
let b = 1;
let fibonacci = 0;
let evenSum = 0;

while(fibonacci < 4000000){

    fibonacci = a + b;
    a = b;
    b = fibonacci;

    if(fibonacci % 2 === 0){
        evenSum += fibonacci;
    }
}
console.log(evenSum);
