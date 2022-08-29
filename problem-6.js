// find ,ax number withing two array after adding one array
const array1 = [2,3,4,5];
const array2 = [6,33,7,8,9];

const hiestNumber = (arr1,arr2)=>{
    const newArray = [...arr1,...arr2];
    let max = newArray[0];
    for(let i=0;i<newArray.length;i++){
        // console.log(newArray[i])
        if(max<newArray[i]){
            max=newArray[i];
        }
    }
    return max;
    
}
console.log(hiestNumber(array1,array2));
