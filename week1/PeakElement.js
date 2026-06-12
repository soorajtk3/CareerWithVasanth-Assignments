function Peak(arr){
    let peak=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]){
            peak=arr[i+1]
        }else{
            peak=arr[i]
            return peak
        }
    }
    return peak
}
console.log(Peak(arr = [1, 3, 20, 4, 1, 0]));