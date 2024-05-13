let arr = 
    [[1,2,3],
    [3,4,5],
    [6,7,8]]

let row=arr.length
let col=arr[0].length

Isprime=(ele)=>{
    for(let i=2; i<ele; i++){
            if(ele%i==0){
                return false
            }
    }
    return true
}

for(let i=0; i<row; i++){
    for(let j=0; j<col; j++){
       if(arr[i][j]!=1){
        if (Isprime(arr[i][j])) {
            console.log(arr[i][j]);
        }
       }
    }
}