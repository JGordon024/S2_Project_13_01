"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Jacob Gordon
   Date:   03/13/19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/

window.onload = init;
//Creates a function to identify the type of control that performs an action
function init() {
      var stars = document.querySelectorAll("span#stars img");
      // Creates a for loop that will allow for the mouse to become a pointer when hovered above the 5 stars
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}

function lightStars(e) {
      // Sets the variables 
      var starNumber = e.target.alt;
      // This variable is applying the star images CSS 
      var stars = document.querySelectorAll("span#stars img");
      // Creates a for loop that will allow the user to choose the amount of stars
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";

      }
      // Will unselect the stars, replacing it with an empty star when not hovered above
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";

      }
      // Will use the text box area next to the stars state how many stars are selected
      document.getElementById("rating").value = starNumber + " star(s)";
      // Targets the event for when the mouse is off of the stars, which will launch the turnOffStars function
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("mouseleave", function () {
            document.removeEventListener("mouseleave", turnOffStars);
      });
}
//Creates a function that will turn off the stars when the mouse is not hovering above them
function turnOffStars(e) {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
            document.getElementById("rating").value = "";
      }
}
// Creates a function that will continuely update the character count at the bottom right corner of the text box
function updateCount() {
      var commentText = document.getElementById("comment").value;
      // Creates a new variable using a function as its value with the parameters of the commentText variable
      var charCount = countCharacters(commentText);

      var wordCountBox = document.getElementById("wordCount");
      // The variable will be update the visible at the bottom of the page so as you type it changes to match how many characters have been typed
      wordCountBox.value = charCount + "/1000";
      // Changes the input box if 1000 chars are exceeded so that its a red backround and the font is white
      if (charCount > 1000) {
            wordCountBox.style.backgroundColor = "red";
            wordCountBox.style.color = "white";
      } else {
            wordCountBox.style.backgroundColor = "black";
            wordCountBox.style.color = "white";
      }
};


/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}