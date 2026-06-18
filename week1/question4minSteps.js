// Given an array arr of N integers, the task is to find the 
// minimum steps in which the sum and product of all elements of the array can 
// be made non-zero. In one step any element of the array can be incremented by 1.


let arr = [-1,-1,0,0]
function minSteps(arr){
    let step=0;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            step++;
            sum+=1;
        }else{
            sum+=arr[i]
        }
    }
    if(sum===0){
             step++;
    }
    return {step}
}
console.log(minSteps(arr))