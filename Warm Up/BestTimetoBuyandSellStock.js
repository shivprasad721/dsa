var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;
    for(let i = 1; i<prices.length; i++){
        if(prices[i] - min>maxProfit){
            maxProfit = prices[i] - min
        }
        if(prices[i]<min){
            min = prices[i]
        }
    }
    return maxProfit;
};
let arr = [7,1,5,3,6,4,2,9,12,1];
let res = maxProfit(arr);
console.log(res);