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
    staticChanges.innerHTML = "I'm static";
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
    staticChanges.innerHTML = "I'm relative";
    staticChanges.style.position = "relative";
}

function absoluteProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    staticChanges.innerHTML = "I'm absolute";
    staticChanges.style.position = "absolute";
}

function fixedProperty() {
    // create a variable to get the CSS variable
    var style = getComputedStyle(document.body);
    // console for checking that everything is ok
    console.log(style.getPropertyValue('--purple'));
    // change the color of the block
    staticChanges.style.setProperty('--purple', style.getPropertyValue('--clear-blue'));
    staticChanges.innerHTML = "I'm fixed";
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