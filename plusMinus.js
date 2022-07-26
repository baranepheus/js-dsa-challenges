// Given an array of integers, calculate the ratios of its 
// elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on 
// a new line with 6 places after the decimal

int = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let n = arr.length
    let pos = 0
    let neg = 0
    let zero = 0
    
    for (let i = 0; i < n; i++){
        if (arr[i] > 0){
            pos += 1
        } else if (arr[i] < 0){
            neg += 1
        } else if (arr[i] === 0){ //zero
            zero += 1
        } 
    }
    
    pos = pos / n
    neg = neg / n
    zero = zero / n
    
    return ` ${pos.toFixed(6)} \n ${neg.toFixed(6)} \n ${zero.toFixed(6)}`
};

console.log(plusMinus(int));