
const arr = [1,1,1,3,3,4,3,2,4,2]

function containsDuplicate (nums){
    nums.sort()

    for(let i = 0; i < nums.length; i++ ){
        for (let j = i + 1; i < nums.length; i++){
            if (i === j){
                return [i, j] 
            // } else  
            //     return [false]
        }
    }
} };

console.log(containsDuplicate(arr));