//Find the nth largest element in a sorted array



let arr = [21, 25, 56, 76, 65 , 76, 98, 24, 36, 82];
arr.sort((a, b)=> a-b);

//if n=? then this value always change, nth largest number find, for example
n=1;
const nthlargest= arr[arr.length-n] 
console.log(nthlargest);