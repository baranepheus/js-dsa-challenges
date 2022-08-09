// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that 
// they add up to target.

tar_num = 10;
int_arr = [2,5,5,11];

function twoSum(num, target){
    
    for (let i = 0; i < num.length; i++){
        for (let j = i + 1; j < num.length; j++){
            // i + 1 so it moves forward the indices
            // console.log(num[j])
            if (target === num[i] + num[j]){
                return [i, j]  // format when returning indices
            }
        }
    }
}

console.log(twoSum(int_arr, tar_num));