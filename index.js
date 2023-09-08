// create an array of all days of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// get the value of today's name
const today = new Date().getDay();

// extract the name from the weekday array
const currentDayOfTheWeek = weekday[today]


const hours = new Date().getHours()
const minutes = new Date().getMinutes()

const currentTime = `${hours}:${minutes}`

$(document).ready(
    function () {
        $("#currentUTCtime").html(currentTime)
    }
)