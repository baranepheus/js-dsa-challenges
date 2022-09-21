function plusMinus(arr) {
    let pos = 0;
    let neg = 0;
    let zer = 0;
    let len = arr.length
    
    for (let i = 0; i < len; i++){
        if (arr[i] > 0){
            pos += 1
        }
        else if (arr[i] < 0){
            neg += 1
        }
        else if (arr[i] == 0){
            zer +=1
        }
    }
    pos = pos/len
    neg = neg/len
    zer = zer/len

    return ` ${pos.toFixed(6)} \n ${neg.toFixed(6)} \n ${zer.toFixed(6)}`
}

console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]))