// Given an array of integers, 
// where all elements but one occur twice, 
// find the unique element

arr = [1, 2, 1];

function lonelyInteger(a) {
    
    for (const num of a) {
        if (a.indexOf(num) === a.lastIndexOf(num)) return num; // if first occurence is the same as the last occurence
    }
    return 'No lonely integers.';
};
console.log(lonelyInteger(arr));