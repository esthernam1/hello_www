function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers greater than 10
    document.getElementById('time').innerHTML = "The time is  " +
        convertHourToName(h) + " : " + 
        convertNumberToName(m) + " : " + 
        convertNumberToName(s) + " ";
    setTimeout(startTime,300);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
} 

// function hoverImage(){
//     if(h = "ONE"){

//     }
//     return img
// }

function convertHourToName(num) {
    if (num > 12) {
        num -= 12;
    }
    return convertNumberToName(num);
}

function convertNumberToName(num) {
    var lowNames = ["ZERO", "ONE", "TWO", "THREE", 
                  "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", 
                 "TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", 
                  "FIFTEEN", "SIXTEEN", "SEVENTEEN", 
                  "EIGHTEEN", "NINETEEN"];
    var tensNames = ["TWENTY", "THIRTY", "FORTY", "FIFTY", 
                "SIXTY", "SEVENTY", "EIGHTY", "NINETY"];
    var tens, ones, result;
    if (num < lowNames.length) {
        result = lowNames[num];
    } else {
        tens = Math.floor(num / 10);
        ones = num % 10;
        if (tens <= 9) {
            result = tensNames[tens - 2];
            if (ones > 0) {
                result += " " + lowNames[ones];
            }
        } else {
            result = "error"
        }
    }
    return result;
}

startTime();





