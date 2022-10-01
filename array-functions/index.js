// accepts an array and return the total of the differences of each value in the array.
//given : [2,6,12,19]
//returns (4+6+7)-> 17
function sumDelta(arr){
    let total= 0;
    let size = arr.length;
    for (let index = 1; index < size; index++) {    
        let v1 = arr[index-1];
        let v2 = arr[index];
        let delta = Math.abs(v1 - v2);
        total += delta;
    }
    return total;
}


console.log(sumDelta([]))
console.log(sumDelta([9]))
console.log(sumDelta([9,12]))
console.log(sumDelta([2,6,12,19]))
