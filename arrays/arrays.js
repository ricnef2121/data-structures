//the higest of the array
//this code only works with positive numbers
let a = [25,45,12,14,63,85,10];

let size = a.length;
let highest = 0;
for (let index = 0; index < size; index++) {
    let iteration = a[index];
    if(iteration > highest){
        highest = iteration;
    }
}
console.log("the highest "+highest)

//if you need evaluated positives and negatives you need to use the first element of the array instead of variable with the value of zero
let b = [-25,-45,-12,-14,-63,-85,-10];
let h = b[0];
let s = b[0];
for (let index = 0; index < b.length; index++) {
    let iteration = b[index];
    if(iteration > h){
        h= iteration;
    }
    //code to determined the smallest
    if(iteration < s){
        s= iteration;
    }

}

console.log("the highest with negatives "+h);
console.log("the smallest with negatives "+s)