// sorting an array
// method1
/*
let arr = [9, 4, 5];
console.log(arr.length); //3

let temp = [];
for (let ind = 0; ind < arr.length; ind++) {
  let min = arr[0];
  let minInd = 0;
  for (let ind1 = 0; ind1 < arr.length; ind1++) {
    if (min > arr[ind1]) {
      min = arr[ind1];
      minInd = ind1;
    }
  }
  temp.push(min);
  arr[minInd] = +Infinity;
}
console.log(temp); //[ 4, 5, 9 ]
console.log(arr); //[ Infinity, Infinity, Infinity ]
*/
//method2
let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(arr.length); //10
console.log(arr);

for (let ind = 0; ind < arr.length; ind++) {
  let minInd = ind;
  for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
    if (arr[minInd] < arr[ind1]) {
      minInd = ind1;
    }
  }
  temp = arr[ind];
  arr[ind] = arr[minInd];
  arr[minInd] = temp;
}

console.log(arr);
console.log("second largest element from an array:", arr[1]);
console.log(...arr);
//Time complexity =O(n^2)  //[O(n)*O(n)=O(n^2)] // O(n)=>one loop
//space complexcity:O(n)  //n=1 => O(1)
