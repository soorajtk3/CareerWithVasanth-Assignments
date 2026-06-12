// Find a peak element which is not smaller than its neighbors
function Peak(arr){
    let peakIndex=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            peakIndex=i+1
        }else{
            peakIndex=i
            return peakIndex
        }
    }
    return peakIndex
}
console.log(Peak(arr = [1, 3, 20, 4, 1, 0]));