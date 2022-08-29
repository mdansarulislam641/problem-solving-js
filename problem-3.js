// use default parametter
const add = (num1,num2=5)=>{
    const sum = num1 + num2;
    return sum;
}
console.log(add(5))