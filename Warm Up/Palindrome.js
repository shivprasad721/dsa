function checkPalindrome(num){
    num = Math.abs(num);
    if(num==0){
        return "It is 0 and it is a palindrome";
    }
    let temp = num;
    let rev = 0;
    while(num>0){
        rev = rev*10 + num%10;
        num = Math.floor(num/10);
    }
    if(temp==rev){
        return `${temp} is a palindrome`;
    } else {
        return `${temp} is not a palindrome`;
    }
}
const res = checkPalindrome(-0);
console.log(res);
