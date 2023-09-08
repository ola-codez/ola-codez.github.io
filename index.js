// create an array of all days of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// get the value of today's name
const today = new Date().getDay();
// const today = new Date().getDay();

// extract the name from the weekday array
const currentDayOfTheWeek = weekday[today]
// console.log(currentDayOfTheWeek);

const utcTime = new Date() //.toJSON().replace("T"," ").replace("Z"," ")
// console.log(utcTime);
$(document).ready(
    function () {
        $("#currentUTCtime").html(utcTime)
        $("#currentdayoftheweek").html(currentDayOfTheWeek)
    }
)
