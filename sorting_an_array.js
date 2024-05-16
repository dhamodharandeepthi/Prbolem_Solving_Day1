// sorting an array
// method1
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
