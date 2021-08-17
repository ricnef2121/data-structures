const a = [70,72,68,65,74,74,73];
let max_delta = Math.abs(a[0] - a[1]);
let size = a.length;
for (let index = 0; index < size; index++) {    
    let v1 = a[index];
    let v2 = a[index+1];
    let delta = Math.abs(v1 - v2);
    console.log('comparing ',v1 ,' ', v2 , 'delta ',delta);
    if(delta > max_delta){
        max_delta = delta
    }
}
console.log('max delta ',max_delta);