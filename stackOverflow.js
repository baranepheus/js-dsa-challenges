// push values from given array to new array
// somehow it's iterated 9, why? bec of forEACH 

const array = [2, 4, 6, 7];

function stackOverflow(stack_arr){

    let new_arr = []
    let i = 0;
    let top = -1

    if (!stack_arr.length){
        top += 0
        console.log(top, 'Array is empty.')
    }

    // for (i = 0;  i < stack_arr.length; i++){
    while (i < stack_arr.length){
        new_arr.push(stack_arr[i])
        top += 1
        i++
    } console.log(top, new_arr)
};

console.log(stackOverflow(array));

// console.log(array.length)