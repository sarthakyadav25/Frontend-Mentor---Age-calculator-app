//Dom Elements

const button = document.getElementById("icon");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

//Error Elements
const blank = document.createElement('p')
blank.innerText = "This field is required";
blank.style = "color:red";

//Events

button.addEventListener("click",()=>{
    //check for empty values
    if(day.value == ""){
        day.after(blank);
    }
})