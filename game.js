//* create a wordbank
    var words = [ 
        "lion king",
        "the phantom of the opera",
        "les miserables",
        "cats",
        "miss saigon",
        "the little mermaid",
        "love never dies",
        "wicked",
        "hello, dolly!",
        "aladdin",
        "grease",
        "rent",
        "the book of mormon",
        "hamilton",
        "fiddler on the roof",
        "hairspray",
        "jersey boys",
        "finding neverland",
        "chicago",
        "kinky boots",
        "beauty and the beast",
        "lion king",
        "the phantom of the opera",
        "les miserables",
        "cats",
        "miss saigon",
        "the little mermaid",
        "love never dies",
        "wicked",
        "hello, dolly!",
        "aladdin",
        "grease",
        "rent",
        "the book of mormon",
        "hamilton",
        "fiddler on the roof",
        "hairspray",
        "jersey boys",
        "finding neverland",
        "chicago",
        "kinky boots",
        "beauty and the beast",];

 //*computer will pick a word from wordbank at random
 var currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

//* varible to hold guesses left
 var guessesLeft = 10;
 document.getElementById("guesses-left").innerHTML = guessesLeft;

 //*create a varaible to see how many time the user wins and loses
  var wins = 0;
 document.getElementById("wins").innerHTML = wins;

 var resetLettersGuessed = ""

 var lose = 0;
 document.getElementById("lose").innerHTML = lose;

 //* make an array to push blanks to selected words
 var progressWord = [];

// push letters from correct guess to blanks
 var mysteryWord = [];
 var i;

 console.log("Current word is: " + currentWord);

 //* make something to push  blanks to word
 for (i = 0; i < currentWord.length; i++) {
   progressWord.push("__");
 }
 document.getElementById("word-guess").innerHTML = progressWord.join(" ");

 //*create a function to check position of user letter in chosen word or return empty if failure
 function letterInWord(letter) {
    
   var positions = new Array();
   for (i = 0; i < currentWord.length; i++) {
     if (currentWord[i] === letter)
       positions.push(i);
   }
   return positions;
 }

//* give the user number of words left to gues
 function lettersToGuess() {
   var i;
   var toGess = 0;
   for (i in progressWord) {
     if (progressWord[i] === "__")
       toGess++;
   }
   return toGess;
 }

 // These are the key events used to play and to document the letters already used and/or
 // letters in the answers
 document.onkeyup = function(event) {
   var letter = event.key;
   var lettersGuessed = letter.toLocaleUpperCase();
   var i;

   console.log("You have typed a letter: ".concat(letter));

   var positions = letterInWord(lettersGuessed);


   // This will alert correct and compare the letter guessed with the current word
   if (positions.length) {
     console.log("User has pressed a letter from word: " + letter);

     for (i = 0; i < positions.length; i++) {
       progressWord[positions[i]] = lettersGuessed;
     }

     // replace progress Word underscore with letter pressed
     document.getElementById("word-guess").innerHTML = progressWord.join(" ");
   } else {
     // alert("WRONG!");
     document.getElementById("letters-guessed").innerHTML += lettersGuessed + " ";

     // subtract a point from guesses left
     guessesLeft--;
     document.getElementById("guesses-left").innerHTML = guessesLeft;
   }

   // refresh word when the game is over
   if (guessesLeft === 0) { 
     location.reload();
     lose++;
      document.getElementById("lose").innerHTML = lose;
   }

   if (lettersToGuess() == 0) {

     // reset guesses left
     guessesLeft = 10;
     document.getElementById("guesses-left").innerHTML = guessesLeft;

     // reset letters guessed
     document.getElementById("letters-guessed").innerHTML = resetLettersGuessed;

     // This code generates a new word to guess and then pushes out the blanks again
     currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

     progressWord = [];
     for (i = 0; i < currentWord.length; i++) {
       progressWord.push("__");
     }
     document.getElementById("word-guess").innerHTML = progressWord.join(" ");

     // Add to the win total
     wins++;
     document.getElementById("wins").innerHTML = wins;
   }
 }
