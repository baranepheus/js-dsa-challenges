// Find the longestCommonPrefix 
// in the given Array.

let arr = ['fliw', 'flight', 'flap'];

var longestCommonPrefix = function(strs){

    if (strs.length == 0){
        return 'no array'
    }

    prefix = strs[0]

    for(let i = 1; i < strs.length; i++ ){
        while(strs[i].indexOf(prefix) ){
            // console.log(prefix)
            // console.log(strs[i])
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
    //let the loop finish
};

console.log(longestCommonPrefix(arr));