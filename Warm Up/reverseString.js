let arr = ["h","e","l","l","o"];
var reverseString = function(arr) {
    let len = arr.length-1;
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let temp = arr[i];
        arr[i] = arr[len];
        arr[len] = temp;
        len--;
    }
}
const res = reverseString(arr);
console.log(arr);