//based on what i understand from the question

int_arr = [2, 4, 5]
target = 9

function mathHomework(threshold, pointsArray) {
  
    const maxPoints = Math.max(...pointsArray)
    const minPoints = Math.min(...pointsArray)
    const totalPoints = maxPoints - minPoints

    for (let i = 0; i < pointsArray.length; i++){

        if (totalPoints === threshold){
            console.log('You passed.')
            break
        } else if (totalPoints != threshold){
            console.log(pointsArray, 'solve more problems')
        }   

            for (let j = 0; j < pointsArray.length; j++){

                if (totalPoints === threshold){
                    console.log('You passed.')
                    break
                } else if (totalPoints != threshold){
                    console.log(pointsArray, 'solve more problems')
                }
        } 
        
                for (let k = 0; k < pointsArray.length; k++){

                    if (totalPoints === threshold){
                        console.log('You passed.')
                        break
                    } else if (totalPoints != threshold){
                        console.log(pointsArray, 'threshold did not meet')
                        break
                    }
                }
    }
};

console.log(mathHomework(target, int_arr));