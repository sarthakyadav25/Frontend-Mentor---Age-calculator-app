//Dom Elements

const button = document.getElementById("icon");
const day = document.getElementById("dayinp");
const month = document.getElementById("monthinp");
const year = document.getElementById("yearinp");
const dash = document.getElementsByClassName("dash");
const dasharr = Array.from(dash);

const date = new Date();
const curday = date.getDate();
const curmonth = date.getMonth() + 1;
const curyear = date.getFullYear();

//Error Elements
const blank = document.createElement('p')
blank.innerText = "This field is required";
blank.style = "display:block;color:red;font-size:9px;margin:1em 0.1em;";

const valid = document.createElement('p');
valid.style = "display:block;color:red;font-size:9px;margin:1em 0.1em;";

//Events

button.addEventListener("click",()=>{
    //check for empty values
    if(day.value == ""){
        day.style = "border-color:red;"
        day.after(blank);
    }
    else if(month.value == ""){
        month.style = "border-color:red;"
        month.after(blank);
    }
    else if(year.value == ""){
        year.style = "border-color:red;"
        year.after(blank);
    }
    else{
        blank.remove();
        //validity check
        if(parseInt(day.value) <= 0 || parseInt(day.value) > 31){
            valid.innerText = "Must be vaid day";
            blank.remove();
            day.style = "border-color:red;"
            month.style = "border-color:none";
            year.style = "border-color:none";
            day.after(valid);
        }
        else if(parseInt(month.value) <= 0 || parseInt(month.value) > 12){
            valid.innerText = "Must be valid month";
            blank.remove();
            month.style = "border-color:red;"
            day.style = "border-color:none";
            year.style = "border-color:none"
            month.after(valid);
        }
        else if(parseInt(year.value) <= 0 || parseInt(year.value) > curyear ){
            valid.innerText = "Must be valid year";
            blank.remove();
            year.style = "border-color:red;"
            day.style = "border-color:none";
            month.style = "border-color:none";
            year.after(valid);
        }
        else{
            birthday = parseInt(day.value);
            birthmonth =  parseInt(month.value);
            birthyear = parseInt(year.value);
            valid.remove();
            let leftyear = curyear - birthyear
            let leftmonth = curmonth - birthmonth
            let leftday = curday - birthday
            if(leftmonth < 0){
                leftyear -= 1
            }
            leftmonth += 12;
            if(leftday > 0){
                leftmonth += 1;
            }
            else{
                leftday *= -1;
            }
            if (leftmonth > 12 ){
                leftmonth = 0;
            }
            birthday += leftday;
            dasharr[0].innerText = leftyear;
            dasharr[1].innerText = leftmonth;
            dasharr[2].innerText = leftday;


        }
    }

})