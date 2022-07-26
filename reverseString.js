// Reverse string in an array


arr = ['h', 'e', 'l', 'l', 'o'];

function reverseString(s){
    let i = 0
    let j = s.length - 1 // we get the last INDEX

    while (i < j){
        let temp = s[i] // important to not mess up the reference value
        s[i] = s[j]
        s[j] = temp
        
        i++ , j--
    }
    return s
};

console.log(reverseString(arr))