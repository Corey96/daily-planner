// This shows a live date and time counter using jQuery and moment library
var todayDate = moment().format('dddd, MMM Do YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);


function timeTracker() {
    //get current number of hours.
    var timeNow = moment().hour();

    //loops through time blocks
    $(".time-block").each(function() {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);


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
     })}

    // initial render of past/present/future colours
    timeTracker();

    // rerun every minute so it updates throughout the day
    setInterval(timeTracker, 60000);  

// Saving user inout to local storage
let inputArray = $('input');
let inputValues = [];

function saveInput(e) {
    // save button goes on save
    $(e.target).css('display', 'none');
    inputValues = [];
    for (let i = 0; i < inputArray.length; i++) {
        inputValues.push(inputArray[i].value);
        localStorage.setItem("timeInputs", JSON.stringify(inputValues));
    }}

// Local storage
if (localStorage.getItem("timeInputs") == null) {
    inputValues = [];
    for (let i = 0; i < inputArray.length; i++) {
      inputValues.push(inputArray[i].value);
      localStorage.setItem("timeInputs", JSON.stringify(inputValues));
    }
  }
  renderInputs();
  function renderInputs() {
    for (let i = 0; i < inputArray.length; i++) {
      inputArray[i].value = JSON.parse(localStorage.getItem("timeInputs"))[i];
    }
  }

//save user inputs on save buttons
const buttons = $("button");
for (let button of buttons) {
  $(button).click(saveInput);
}

// save button appears when input is changed
for (let i = 0; i < inputArray.length; i++) {
    $(inputArray[i]).on("input", function (e) {
      $(e.target)
        .parent()
        .parent()
        .children()
        .eq(1)
        .children()
        .eq(0)
        .css("display", "block");
    });
  }

/* still to do -
FIX time block colors appearing
Add local storage for text areas 
Add comments throughout
Make readME 



*/



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


