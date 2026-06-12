function MaxMin(arr){
    let min=+Infinity;
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        } if(arr[i]<min){
            min=arr[i]
        }
    }
    let sum=0;
    let product=0;
    sum=max+min;
    product=max*min
    return {max,min,sum,product}
}
console.log(MaxMin([-5, -1, -2, -9, -7]));