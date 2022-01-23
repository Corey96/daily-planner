// This shows a live date and time counter using jQuery and moment library
var todayDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);


function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    timeNow =17; //TO DO REMOVE LINE

    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1])

        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");

        }
    
    })

}

    timeTracker();










/*
***GIVEN I am using a daily planner to create a schedule
***WHEN I open the planner 
***THEN the current day is displayed at the top of the calendar 
***WHEN I scroll down
***THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
***WHEN I click into a timeblock
***THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
*/


