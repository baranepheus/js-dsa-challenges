// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that 
// they add up to target.

tar_num = 9;
int_arr = [2, 7, 11, 15];

function twoSum(num, target){
    
    for (let i = 0; i < num.length; i++){
        for (let j = i+1; j < num.length; j++){
            if (target === num[i] + num[j]){
                return [i, j]  // format when returning indices
            }
        }
    }
}

console.log(twoSum(int_arr, tar_num));