
var removeDuplicates = function(nums) {
    let x = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>nums[x]){
            x = x+1;
            nums[x] = nums[i];
        }
    }
    return x+1;
};

let arr = [1,1,2];
let res = removeDuplicates(arr);
console.log(res);