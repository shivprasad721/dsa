function checkPalindrome(num){
    if(num==0){
        return "It is 0 and it is a palindrome";
    }
    let numCopy = Math.abs(num);
    let rev = 0;

    while(numCopy>0){
        rev = rev*10 + numCopy%10;
        numCopy = Math.floor(numCopy/10);
    }
    return num<0? -rev : rev;
}
const res = checkPalindrome(-3431);

console.log(res);
