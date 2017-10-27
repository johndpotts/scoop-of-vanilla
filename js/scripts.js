
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
/* #4- event listener */
document.getElementById("listener").addEventListener('input', doThing);

/* function */
function doThing(){
  var result = document.getElementById("listener-result");
  result.innerHTML = this.value;
}

//----------------------------------
/*#5- event delegation in vanilla js*/
var ul = document.getElementsByTagName('ul')
ul[0].addEventListener('click',
function(name){
  alert(name.target.innerHTML);
}
);

//---------------------------------
/*#6- add an element dynamically*/
function addElement(){
var newDiv = document.createElement('div');
newDiv.innerHTML = "Bonjour!";
newDiv.setAttribute('style',' background-color:green; color:white; font-size:20px; text-align:center; margin:15px;height:40px; width: 100px; cursor:pointer; font-family: sans-serif; line-height:40px;');
var theButtonToPutItAbove = document.getElementById('make-a-div');
document.body.insertBefore(newDiv,theButtonToPutItAbove);

}

//---------------------------------
/*#7- delete an element dynamically*/
function deleteMe(){
var element = document.getElementById("red-box");
element.parentNode.removeChild(element);
}

function resizeMe(){
var div = document.getElementById("blue-box");
div.setAttribute('style', 'height:100px;width:300px;')
}
