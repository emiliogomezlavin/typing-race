window.onload = startGame;

function startGame(){
	theGame();
	countDownStart();
}

//global variables
var arrayOfWords = ["benjamin yang","anthony schurz","wayne banks",
					"valerie jones-fredericks","michael cheng", "matthew laguardia",
					"emilio lavin","jen mcphail","jim tekanyo","michael norelli",
					"vanessa farias","camila crawford","min kim","sam brooks","kate nelson",
					"mike cruz","kabah conda","matthew sullivan","ben hulan","alex white",
					"ilias tsangaris","annabelle thaddeus"];
var counter = 0;
var wordTyped = [];
var wordString = new String();
var countDown;
var countDownNumber;
var turnText = document.querySelector(".playerTurn");




//////////////////////////////////////////////////////////////logic of the game///////////////////////////////////////
function theGame(){
	var wordTyped = [];
	var currentWordEl = document.getElementById("current-word");
	//chooses random name from the array into randomWord
	var randomWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
	//random name will appear on the HTML 
	currentWordEl.textContent = randomWord;
	//evenlistener when user enters any key and listens for key code they are using
  	document.addEventListener("keypress", function(event) {
  		//13 is the key code for ENTER and when the condition is true with countdown is not 0
		if(event.which == 13 && countDownNumber > 0){
			//checks if the randomword that is displayed is same as the users input and if it is true, it will print
			//users input and the image will move forward.
			if(wordString === randomWord){
				wordTyped = [];
				printUserInput();
				turnText.textContent = "Correct!";
				imageForward();
				//a new name will appear when the user gets the correct answer
				randomWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
				currentWordEl.textContent = randomWord;
				/// user presses enter but word is incorrect
			} else { 
				wordTyped=[];
				printUserInput();
				turnText.textContent = "You have typed incorrectly! Try again!";
				//addReset();
			}	
		} else {
		//	character code converting it into a character
		var userInput = String.fromCharCode(event.which).toLowerCase();
		console.log("This is your character!", userInput);
		//characters are being pushed into an array
	  	wordTyped.push(userInput);
	  	//the characters are converted into a string
	  	wordString = wordTyped.join("");
	    printUserInput();
		}
	});
	 addReset();
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// used for displaying text in the HTML
function printUserInput() {
	turnText.textContent = wordString;
}

//////<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Image of image moving forward >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>/////////
function imageForward(){
		//my div id is a string not an integer so used countr.toString();
		var forward = document.getElementById(counter.toString());
		if (counter > 0){
				var currentBox = document.getElementById((counter - 1).toString()); //deleting the image behind 
				currentBox.style.backgroundImage = "none";
			}
				//when the counter id reaches "19" the user will win the game and display a message button
				counter++;
				if(counter === 20){
				alert("You have won");
				document.getElementById('countdown_text').textContent = "Hit Restart to Play Again!";
			}
			//using the function addPicture to add picture when the counter increases
			addPicture(forward);
}


//adds picture of a runner
function addPicture(box){
	box.style.backgroundImage = "url('runner.gif')";
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<function that refreshes the page when user hits the Restart button>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
function addReset(){
	var startOver = document.getElementById('reset');
	reset.addEventListener('click', restartGame);
}
function restartGame(){
		location.reload();
		var counter=0;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////<<<<<<<<<<<<<<<<<TIMER>>>>>>>>/////////////////////////////////////////////////////////////////
function countDownStart() {
	//set the timer
	countDownNumber = 50; 
	countDown();
}

function countDown(){
	if(countDownNumber > 0 && counter < 20){
			countDownNumber--;
			document.getElementById('countdown_text').textContent = countDownNumber + " seconds left!";
			//decreasing the counter by  1 second
				setTimeout(countDown, 1000);
				}
			   //count down hits 0, game is over
				else if (countDownNumber <= 0) {
					alert("You have ran out of time!");
					document.getElementById('countdown_text').textContent = "Hit Restart to Play Again!";
				}
				
}


////////  Create a function that shows image from using a timer for users to keep track of opponent //////



////////////////////////////////// Create words per minute //////////////////////////


/////////////////////////////////





