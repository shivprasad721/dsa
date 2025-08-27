function printAllDivisors(num){
    num = Math.abs(num);
    for(let i =1; i<=num; i++){
        if(num%i==0){
            console.log(i);
        }
    }
}
printAllDivisors(13);