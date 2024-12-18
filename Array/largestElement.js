//Loops: for-in(key,value pair)  for-of(val)

let arr = [1,3,6,9,2,4]
let largest = arr[0]
for(let i of arr){
    if (i>largest){
        largest=i;
    }
}
console.log(largest);
    
///////////////////////////////////////////
let arr = [1,3,6,9,2,4]
let largest = arr[0]
for(let i in arr){
    if (arr[i]>largest){
        largest=arr[i];
    }
}
console.log(largest);
     
