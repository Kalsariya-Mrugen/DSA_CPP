let arr = [1,2,2,3,4,5,2,4,5,3,3,3,2,3,4,2,3,3,4,4,5,4,3,5,3,2,3,4,2,3]
let n=arr.length
let max=0
let number
let result =[]
check=(num,n,index)=>{
    let max_fre=0
    for(let i=0;i<n;i++){
        if(arr[i]!=index){
            if (num==arr[i]) {
                max_fre++
            }
        }
    }
    return max_fre
}

for (let i=0; i<n; i++) {
    if(max<check(arr[i],n,i)){
        max=check(arr[i],n,i)
        number=arr[i]
    }
}

result.push(number,max)

console.log(result);
    
