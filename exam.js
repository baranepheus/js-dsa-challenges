// fizzbuzz


const n = 16;

function fizzBuzz(arr) {
    for (let i = 1; i <= arr; i++){
    
            if (i%3 === 0  && i%5 === 0){
                console.log('divisible by 3 and 5') 
            }
            else if (i%3 === 0 ){
                console.log('divisible by 3 ')
            }
            else if (i%5 === 0){
                console.log('divisible by 5')
            }
            else {
                console.log(i)
            }
    }
};

console.log(fizzBuzz(n));