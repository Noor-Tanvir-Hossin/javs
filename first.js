function cubeNumber(n){
    if(typeof n !=='number'){
        return "provide a number!"
    }
    let result=Math.pow(n,3);
    return result;
}
console.log(cubeNumber('ddaf'))