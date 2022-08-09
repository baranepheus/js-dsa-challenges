//unfinished

var maxProduct = function(nums) {
     
    if (nums.length === 0){
        return 0
    }

    let result = nums[0]
    for (let i = 0; i < nums.length; i++){

        mul = nums[i]
        for (let j = 0 + 1; i < nums.length; j++){
            result = Math.max(result, mul)
            mul*= nums[j]
        }
        result = Math.max(result, mul);
    }
    return result
};

console.log(maxProduct( [2, 4, 5]))