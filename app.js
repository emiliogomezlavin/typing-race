window.onload = startGame;
var turnText = document.querySelector(".playerTurn");
var arrayOfWords = ["benjamin yang","anthony schurz","wayne bankes",
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

function startGame(){
	theGame();
	countDownInit();
}

function theGame(){
	
	var wordTyped = [];
	var currentWordEl = document.getElementById("current-word");
	var randomWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
	currentWordEl.textContent = randomWord;
  document.addEventListener("keypress", function(event) {
		if(event.which == 13 && countDownNumber > 0){
			if(wordString === randomWord){
				wordTyped = [];
				console.log('when entered from if', wordTyped);
				// printUserInput();
				// turnText.textContent = "YOU CRUSHED IT!!!"
				 carForward();
				randomWord = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
				currentWordEl.textContent = randomWord;
			} else { // user presses enter but word is incorrect
				wordTyped=[];
				printUserInput();
				turnText.textContent = "You have typed incorrectly! Try again!";
				addReset();
			}
		} else {
			var userInput = String.fromCharCode(event.which).toLowerCase();
	  	wordTyped.push(userInput);
	  	wordString = wordTyped.join("");
	    printUserInput();
		}
	});
	 addReset();
}

function addPicture(box){
	box.style.backgroundImage = "url('runner.gif')";
}

function carForward(){
		var forward = document.getElementById(counter.toString());
		if (counter > 0){
				var currentBox = document.getElementById((counter - 1).toString());
				currentBox.style.backgroundImage = "none";
			}
				counter++;
				if(counter === 20){
				alert("You have won");
				// clearAlert();
				document.getElementById('countdown_text').textContent = "hit restart to play again!";

			}
			addPicture(forward);
}

function printUserInput() {
	turnText.textContent = wordString;
}

function addReset(){
	var startOver = document.getElementById('reset');
	reset.addEventListener('click', restartGame);
}

function restartGame(){
		location.reload();
		var counter=0;
}

function countDownInit() {
	countDownNumber = 2;
	countDownTrigger();
}

function countDownTrigger(){
	if(countDownNumber > 0 && counter < 20){
			countDownNumber--;
			document.getElementById('countdown_text').textContent = countDownNumber + " seconds left!";
			// if(countDownNumber > 0){
				setTimeout(countDownTrigger, 1000);
				}
				else if (countDownNumber <= 0) {
					alert("RAN OUT OF TIME!");
					document.getElementById('countdown_text').textContent = "Hit Restart to Play Again!";
				}
				else if (counter == 20){
					document.getElementById('countdown_text').textContent = "hit restart to play again!";

				}
}

function clearAlert(){
	window.clearTimeout("countdown_text");
}









