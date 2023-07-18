// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //  Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 
  function saveEvent(event) {
    var textarea = $(this).siblings(".description").val()
    var timeId = $(this).parent().attr("id")
    localStorage.setItem(timeId, textarea)
  }
  var saveBtn = $('.saveBtn');
  saveBtn.on("click", saveEvent)

  // Apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

function applyTime(){
  var currentHour = dayjs().hour()
  
  for (var i = 9; i < 18; i++){
    var timeBlock = $("#hour-" + [i]);
    if ([i] < currentHour){
      timeBlock.attr('class', 'row time-block past')
    } else if ([i] == currentHour){
      timeBlock.attr('class' , 'row time-block present')
    } else {
      timeBlock.attr ('class', 'row time-block future')
    }
  }

}
  //  get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  function getEvent(){
    for (var i = 9; i < 18; i++)
   $("#hour-"+[i] + " .description").val(localStorage.getItem("hour-"+[i]))
  }

  //code to display the current date in the header of the page.

  function displayDate(){
    currentDate = dayjs().format("MM/DD/YYYY")
    currentDateEl = $('#currentDay')
    currentDateEl.text("The date today is " + currentDate)
  }
 displayDate()
 getEvent()
 applyTime()
});

