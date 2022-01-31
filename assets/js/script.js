var currDayEl = document.querySelector("#currentDay");
var hour1El = document.querySelector("#hour1");
var hour2El = document.querySelector("#hour2");
var hour3El = document.querySelector("#hour3");
var hour4El = document.querySelector("#hour4");
var hour5El = document.querySelector("#hour5");
var hour6El = document.querySelector("#hour6");
var hour7El = document.querySelector("#hour7");
var hour8El = document.querySelector("#hour8");
var hour9El = document.querySelector("#hour9");
var hour10El = document.querySelector("#hour10");
var hour11El = document.querySelector("#hour11");

var inputEl1 = document.querySelector("#task1");
var inputEl2 = document.querySelector("#task2");
var inputEl3 = document.querySelector("#task3");
var inputEl4 = document.querySelector("#task4");
var inputEl5 = document.querySelector("#task5");
var inputEl6 = document.querySelector("#task6");
var inputEl7 = document.querySelector("#task7");
var inputEl8 = document.querySelector("#task8");
var inputEl9 = document.querySelector("#task9");
var inputEl10 = document.querySelector("#task10");
var inputEl11 = document.querySelector("#task11");

var saveBtnEl1 = document.querySelector("#savebtn1");
var saveBtnEl2 = document.querySelector("#savebtn2");
var saveBtnEl3 = document.querySelector("#savebtn3");
var saveBtnEl4 = document.querySelector("#savebtn4");
var saveBtnEl5 = document.querySelector("#savebtn5");
var saveBtnEl6 = document.querySelector("#savebtn6");
var saveBtnEl7 = document.querySelector("#savebtn7");
var saveBtnEl8 = document.querySelector("#savebtn8");
var saveBtnEl9 = document.querySelector("#savebtn1");
var saveBtnEl10 = document.querySelector("#savebtn10");
var saveBtnEl11 = document.querySelector("#savebtn11");



var displayCurrDay = function() {
    var currDay = moment().format('MMMM Do YYYY');
    currDayEl.textContent = currDay;    
    setInterval(displayCurrDay, 3600000);
}
displayCurrDay();

var saveTask = function(event) {
    var clickedBtnId = event.target.id.substr(-1);
    var affectedTask = "task"+clickedBtnId;        
    var userInput = document.getElementById(affectedTask);
    localStorage.setItem(affectedTask, userInput.value);    
}

var loadTasks = function() {
    for(var i = 1; i < 12; i++) {
      var task = localStorage.getItem("task" + i);
      var inputEl = document.querySelector("#task" + i);
      inputEl.value = task;      
    }
}

loadTasks();

saveBtnEl1.addEventListener("click", saveTask);
saveBtnEl2.addEventListener("click", saveTask);
saveBtnEl3.addEventListener("click", saveTask);
saveBtnEl4.addEventListener("click", saveTask);
saveBtnEl5.addEventListener("click", saveTask);
saveBtnEl6.addEventListener("click", saveTask);
saveBtnEl7.addEventListener("click", saveTask);
saveBtnEl8.addEventListener("click", saveTask);
saveBtnEl9.addEventListener("click", saveTask);
saveBtnEl10.addEventListener("click", saveTask);
saveBtnEl11.addEventListener("click", saveTask);




