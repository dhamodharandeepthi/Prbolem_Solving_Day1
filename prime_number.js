//what is prime?
// A number is only divisible by 1 and itself
//2,3,5,7,11,13,17,19,23....
let count = 0;
function isPrime(num) {
  for (let fact = 2; fact < num; fact++) {
    count++;
    if (num % fact == 0) {
      return false;
    }
  }
  return true;
}

console.log("Given EvenNumber is prime number?: ", isPrime(101)); //true
console.log("Number of Iteration: ", count); //Number of Iteration:  99
/*

The time complexity of the provided isPrime function is O(n), where n is the input number. This is because, in the worst case, the function checks divisibility of the input number by all numbers from 2 up to the input number minus 1. that means (n-1)

The space complexity of the function is O(1), because it uses a fixed amount of memory regardless of the input size. The space used by the function remains constant, as it doesn't depend on the input number.
*/
