window.onload = startGame;
var turnText = document.querySelector(".playerTurn");
var arrayOfWords = ["i am very confused","please help me","why can i not understand this part",
									  "please give me advil","my head is exploding"];
var counter = 1;
var wordTyped = [];
var wordString = new String();

function startGame(){
	// set a word
	
	var wordTyped = [];
	var currentWordEl = document.getElementById("current-word");
	var randomWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
	currentWordEl.textContent = randomWord;
  document.addEventListener("keypress", function(event) {
		console.log(event.which);
		if(event.which == 13){
			console.log('if enter');
			if(wordString === randomWord){
				console.log('if correct');
			//wordTyped = [];
			// document.getElementById("users-word.").textContent = "testing";
				wordTyped = [];
				console.log('when entered from if', wordTyped);
				printUserInput();
				carForward();
				startGame();


			} else { // user presses enter but word is incorrect
				wordTyped=[];
			}
		//console.log("You are correct!");
		} else {
			wordType=[];
	  	var userInput = String.fromCharCode(event.which).toLowerCase();
	  	console.log("user typed:", userInput);

	  	wordTyped.push(userInput);
	  	console.log('wordtyped in else', wordTyped);
	    wordString = wordTyped.join("");


		}
	});
	addReset();
}

function addPicture(box){
	// var grabBox = box;
	console.log('playerone function', box);
	box.style.backgroundImage = "url('http://java2s.com/style/demo/border.png')";

}

function carForward(){
	var forward = document.getElementById(counter);
	counter++;
	addPicture(forward);
}

function printUserInput() {
	turnText.textContent = wordString;
}



///////// RESET PART /////////////
function addReset(){
	var startOver = document.getElementById('reset');
	reset.addEventListener('click', restartGame);
}

function restartGame(){
	console.log('clicked');
	turnText.textContent = "You have typed lol";
	location.reload();
//counter = 1;

}



