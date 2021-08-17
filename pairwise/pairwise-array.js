const a = [70,72,68,65,74,74,73];
//fisrt option
let max_delta = Math.abs(a[0] - a[1]);
let size = a.length;
for (let index = 0; index < size -1; index++) {    
    let v1 = a[index];
    let v2 = a[index+1];
    let delta = Math.abs(v1 - v2);
    console.log('comparing ',v1 ,' ', v2 , 'delta ',delta);
    if(delta > max_delta){
        max_delta = delta
    }
}
console.log('max delta ',max_delta);

//second option
let max_delta2 = Math.abs(a[0] - a[1]);
let size2 = a.length;
for (let index = 1; index < size2; index++) {    
    let v1 = a[index-1];
    let v2 = a[index];
    let delta = Math.abs(v1 - v2);
    console.log('comparing ',v1 ,' ', v2 , 'delta ',delta);
    if(delta > max_delta2){
        max_delta2 = delta
    }
}
console.log('max delta 2 ',max_delta2);