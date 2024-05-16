//what is prime?
// A number is only divisible by 1 and itself
//2,3,5,7,11,13,17,19,23....

//to know factor
/*
factor=a*b
factor of 100 => 1,2,4,5,10,20,25,100
note:
 * always 1 and given number is comes us factor so we remove them
 * if 2 is factor 2*50=100 then 50 is also factor of 100
 * if 4 is factor 4*25=100 then 25 is also factor of 100
 * if 5 is factor 5*20=100 then 20 is also factor of 100
 * if 10 is factor 10*10=100 then 10 is final factor of 100
 * so n is factor n*n=givennumber then num is final factor of 100
 * means sqrt(100) =>10
 * means sqrt(givennumber) =>final factor
 * in this case Math function called every looping it takes some time to give output if given number is largePrimeNumber 
 * Take input as half of the given number which is same as take input as given number both result same
 * To know prime concept:
     * only evenPrimeNumber is:2 ,remaing all oddPrimeNumbers 
     * negative number not a prime number
     * all evennumber not a prime number except 2
*/

let count = 0;
function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return false;
  if (num % 2 == 0) return false;
  for (let fact = 2; fact * fact <= num / 2; fact++) {
    count++;
    if (num % fact == 0) {
      return false;
    }
  }
  return true;
}

console.log("Given OddNumber is prime number?: ", isPrime(101)); //true
console.log("Number of Iteration: ", count); //Number of Iteration: 06
/*
The time complexity of the provided isPrime function is O(sqrt(n)), where n is the input number. This is because the function iterates up to the square root of the input number to check for divisibility. Specifically, the loop runs until fact * fact <= num, which means it iterates up to the square root of num.

The space complexity of the function is O(1), as it uses a constant amount of memory regardless of the input size.
*/
