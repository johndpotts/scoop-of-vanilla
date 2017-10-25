
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}


//-------------------------------------------------------

function validateNumber() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("js-number-check").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Not happenin, captain.";
    } else {
        text = "Aye, aye";
    }
    document.getElementById("js-number-check-result").innerHTML = text;
}

//-----------------------------------------------
/* event listener */
document.getElementById("listener").addEventListener('input', doThing);

/* function */
function doThing(){
  var result = document.getElementById("listener-result");
  result.innerHTML = this.value;
}
