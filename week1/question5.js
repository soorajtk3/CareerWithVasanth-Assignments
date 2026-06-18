// Given an array arr[] of positive integers, the task is to find the minimum 
// steps to reduce all the elements to 0. In a single step, -1 can be added to all the non-zero 
// elements of the array at the same time.

let arr = [3,4,1]
function minOperation(arr){
    let newArr = [...arr]
    let max = Math.max(...arr)
    let operations=0;
    for(let i=0;i<max;i++){
         operations++;
           for(let j=0;j<arr.length;j++){
              if(newArr[j]!==0){
           
            newArr[j]=newArr[j]-1
        }
    }
      
   
    }
    return operations;
}

console.log(minOperation(arr))