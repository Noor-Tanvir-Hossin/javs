
function calculateMoney(ticketSale){
    if(ticketSale<0){
        return "Invalid Number";
    }
    else{
       const result=( ticketSale * 120) - ( 500 + (8 * 50) );
        return result;
    }

}




function checkName(name) {
    if(typeof name !=='string'){
        return "invalid"
    }
    const arr = ['a','y', 'i' , 'e' , 'o' , 'u', 'w']
    let name1=name.toLowerCase();
    let lastElement=name1[name1.length-1]
    if(arr.includes(lastElement)){
        return "Good Name"
    }
    else{
        return "Bad Name"
    }
}





function deleteInvalids(array) {
    if(Array.isArray(array)==false){
        return 'Invalid Array'
    }

    else{
        let arr2=[]
        for (let x of array){
            if(typeof x === 'number' && !isNaN(x)){
                arr2.push(x);
            }
        }
        return arr2;
    }
}



function password(obj) {
    if (typeof obj !== 'object' || obj === null || !obj.name || !obj.birthYear || !obj.siteName || obj.birthYear < 999 ) {
        return "Invalid input";
    }

    const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const userInitial = obj.name.charAt(0).toLowerCase();
    const birthYear = obj.birthYear;
    const str= websiteName +"#"+ userInitial+ "@"+birthYear
    return str;  
}




function monthlySavings(arr , livingCost) {
    if(Array.isArray(arr)===false || typeof livingCost !== 'number'){
        return 'invalid input'
    }
    let sum=0;
    for(let liv of arr){
        if (liv>=3000){
            let tax=liv*0.2;
            let eliminate_tax=liv-tax;           
            sum+=eliminate_tax;
            
        }
        else{
            sum+=liv;
        }
        
    }
    let savings =sum-livingCost;
    if(savings<0){
        return "earn more";
    }
    else{
        return savings;
    }
    
}








