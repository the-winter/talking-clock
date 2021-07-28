const numberDict = {
    "00" : "hour",
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
    "20": "twenty",
    "30": "thirty",
    "40": "fourty",
    "50": "fifty",
    "60": "sixty" 
}

const timeInWords = () => {
    // get input value
    var input = document.getElementById('time').value

    // returns an array [hh, mm, a]
    const inputTime = moment('2021-07-28 ' + input).format('hh:mm a').split(/[\s:]+/)

    // place the three in separate variables
    const hh = inputTime[0];
    const mm = inputTime[1];
    const ap = inputTime[2];

    // conversions into text
    // handle hour 
    const hour = formatHour(hh)
    
    // handle minute
    const minute = formatMinute(mm);


    // sentence structure checks
    if (minute === "hour") {
        alert("it's " + hour + " " + ap);
    } else if (mm[0] >= 2) {
        alert("it's " + hour + " " + minute + " " + ap);
    } else if (mm[0] === "1") {
        alert("it's " + minute + " past " + hour + " " + ap);
    } else {
        alert ("it's " + hour + " oh " + minute + " " + ap);
    }

  }

  const formatHour = (h) => {
      const start = numberDict[h];
      return start;
  }

  const formatMinute = (m) => {
    // store min from arg as var
    const minInput = numberDict[m];
    let first;
    let last;

    let minsInWords;
   
    // if key is not in dict, break it down to find keys
    if (minInput === undefined) {
        // split the minute 
        const firstLast = m.split("")

        // create new vars representing the first and last mm values
        first = m[0] + '0';
        last = '0' + m[1];

        minsInWords = numberDict[first] + ' ' + numberDict[last];
    } else {
        minsInWords = numberDict[m];
    }

    return minsInWords;
}
