function matchFinder(str1,str2){
    if (typeof str1 !== 'string'  || typeof str2 !== 'string'){
        return "plz provide a string"
    }
    res=str1.includes(str2)
    return res;
}
console.log(8,matchFinder('john doe','ohn'))
console.log(9,matchFinder('peter','pen'))
console.log(10,matchFinder(10,'hon'))