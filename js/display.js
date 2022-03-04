"use strict"

//Display : none => onclick make disappear the blocks
let btnNone = document.getElementById("btn-none");
let btnShow = document.getElementById("btn-show");

function hideBox() {
    document.getElementsByClassName('btn-clicked')[0].style.display = "none";
}

//Here is the function for showing the block again
function showBox() {
    document.getElementsByClassName('btn-clicked')[0].style.display = "block";
}

btnNone.onclick = hideBox;
btnShow.onclick = showBox;