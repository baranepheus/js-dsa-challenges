// find median value in ODD number length of arrays

const int_arr = [ 0, 1, 2, 4, 6, 5, 3]

function findMedian(arr) {

    let sorted_arr = arr.sort((a, b) =>a - b);

    let med_value  = Math.floor(sorted_arr.length/2)

    return arr[med_value] 
}

console.log(findMedian(int_arr)) 

