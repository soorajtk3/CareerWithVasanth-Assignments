//Program to find the minimum (or maximum) element of an array
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
    return {max,min}
}
console.log(MaxMin([5,1,2,9,7,8]));