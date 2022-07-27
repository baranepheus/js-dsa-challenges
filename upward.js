// sums 
sum_arr = [1,2,3,4]

function sum(a){
    const sum_arr = a.reduce((accumulator, currentValue) => accumulator + currentValue )

return sum_arr
};

// multiplies
function multiply(a){
    const mul_arr = a.reduce((accumulator, currentValue) => accumulator * currentValue )

return mul_arr
}

console.log(sum(sum_arr), multiply(sum_arr))

// reverse string
let string = 'hello'

function reverseString(str){
    return str.split('').reverse().join('')
}

console.log(reverseString(string))

//3. Write a function charFreq() that takes a string and 
// builds a frequency listing of the characters contained in it. Represent 
// the frequency listing as a Javascript object. 
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

const str = 'abbabcbdbabdbdbabababcbcbab';

function charFreq(str) {
    const map = {};
    for(let i = 0; i < str.length; i++){
      map[str[i]] = (map[str[i]] || 0) + 1;
   };
   return map;
};

console.log(charFreq(str));