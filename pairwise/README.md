# pairwise
we're going to get the maxium delta of the next array 

```javascript
const a = [70,72,68,65,74,74,73];
```
Delta is the diference between two numbers

```javascript
comparing  70   72 delta  2
comparing  72   68 delta  4
comparing  68   65 delta  3
comparing  65   74 delta  9
comparing  74   74 delta  0
comparing  74   73 delta  1
```

## first option
```javascript
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
```

## second option
```javascript
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
```