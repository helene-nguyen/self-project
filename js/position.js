/* Yumicode BIG PROJECT 2022*/
"use strict"

//When click on buttons, apply position property effect

// ^ Create variables to place buttons

// Buttons
let btnStatic = document.getElementsByClassName('btn-static')[0];
let btnRelative = document.getElementsByClassName('btn-relative')[0];
let btnAbsolute = document.getElementsByClassName('btn-absolute')[0];
let btnFixed = document.getElementsByClassName('btn-fixed')[0];
let btnSticky = document.getElementsByClassName('btn-sticky')[0];
// Changes
let staticChanges = document.getElementsByClassName('block-positionned')[0];


// & Create my functions

function staticProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    // adding text
    staticChanges.innerHTML = "Hello, I'm static";
    // adding padding
    staticChanges.style.padding = "1em"
    // change the position
    staticChanges.style.position = "static";
}

function relativeProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    // adding text
    staticChanges.innerHTML = "I'm relative";
    // adding padding
    staticChanges.style.padding = "1em"
    staticChanges.style.position = "relative";
}

function absoluteProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    // adding text
    staticChanges.innerHTML = "I'm absolute";
    // adding padding
    staticChanges.style.padding = "1em"
    staticChanges.style.position = "absolute";
}

function fixedProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    // adding text
    staticChanges.innerHTML = "I'm fixed";
    // adding padding
    staticChanges.style.padding = "1em"
    staticChanges.style.position = "fixed";
}

function stickyProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    staticChanges.innerHTML = "I'm sticky";
    staticChanges.style.position = "sticky";
}



// TODO onclick event

btnStatic.onclick = staticProperty;
btnRelative.onclick = relativeProperty;
btnAbsolute.onclick = absoluteProperty;
btnFixed.onclick = fixedProperty;
btnSticky.onclick = stickyProperty;

// !TEST ZONE