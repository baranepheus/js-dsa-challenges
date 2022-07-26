// Given five positive integers, 
// find the minimum and maximum values that  
// can be calculated by summing exactly four of the five integers. 
// Then print the respective **minimum and maximum** values as 
// a single line of two space-separated long integers.


let num = [1,3,5,7,9];

function miniMaxSum(arr) {    
    const sum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    )

    //REDUCTION ALGORITHM
    // a = 1 ; c = 3 => a = 4
    // a = 4; and so on...

    const min = sum-Math.max(...arr);
    const max = sum-Math.min(...arr);

    console.log(min, max);

};

console.log(miniMaxSum(num));


