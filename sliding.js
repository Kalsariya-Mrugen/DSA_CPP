let arr=[1,2,3,4,-1,2,0,5]
let k=3

let min=0
let currentmin=0;

for (let i=0; i<k;i++) {
    currentmin+=arr[i]
}

min=currentmin

for (let i=k; i<arr.length; i++) {
    currentmin += arr[i] - arr[i-k]
    if (currentmin<min) {
        min=currentmin;
    }
}

console.log(min);