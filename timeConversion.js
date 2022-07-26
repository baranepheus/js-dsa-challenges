// Given a time in -hour AM/PM format, 
// convert it to military (24-hour) time.

num = "01:01:00PM"

function timeConversion(s) {
    let amPM = s.charAt(8);   //Get the string index [8]
    let hours = '';

    if (amPM == 'A'){
        if (s.substring(0, 2) == '12'){
            hours = '00'      // replace the substring(0, 2) with 00
        }
        else {
            hours = s.substring(0, 2) 
        }
    }
    else { //PM
        if (s.substring(0, 2) == '12'){ 
            hours = s.substring(0, 2)
        }
        else {
            hours = parseInt(s.substring(0, 2), 10) + 12  // transform string to **integer**
        }
    }
    return hours + s.substring(2, 8)
};

console.log(timeConversion(num))


// 12AM -> 00 AM 
// 1AM - 11AM (do nothing)
// 12PM (do nothing)
// 1PM -> 11PM (+12) 