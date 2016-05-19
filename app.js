window.onload = startGame;
var turnText = document.querySelector(".playerTurn");
var arrayOfWords = ["benjamin yang","anthony schurz","wayne bankes",
										"valerie jones-fredericks","michael cheng", "matthew laguardia",
										"emilio lavin","jen mcphail","jim tekanyo","michael norelli",
										"vanessa farias","camila crawford","min kim","sam brooks","kate nelson",
										"mike cruz","kabah conda","matthew sullivan"];
var counter = 0;
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
				randomWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
				currentWordEl.textContent = randomWord;


			} else { // user presses enter but word is incorrect
				wordTyped=[];
				printUserInput();
			}
		//console.log("You are correct!");
		} else {
			//wordType=[];
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
	var forward = document.getElementById(counter.toString());
	counter++;
	console.log(forward);
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
location.reload();
var counter=0;

}



