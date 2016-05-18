window.onload = startGame;

// function addEvent() {
// 	var boxesAll = document.querySelectorAll(".grid");
// 	for (var i=0; i < boxesAll.length; i++){
// 		boxesAll[i].addEventListener("keypress", moveSomething);
// 	}
// }

//users input for keys S/F/J/L
// window.addEventListener("keypress", keyboardInput, false);
// var counter = 1;
// var forwardKey = 115;

// function keyboardInput(e){
// 	console.log(e.keyCode);
// 	switch(e.keyCode){
// 		case 115:
// 		carForward();
		
// 		case 102:
// 		carBackward();

// 		console.log("S pressed");
// 		break;
// 		case 70:
// 		console.log("F Pressed");
// 			//F pressed
// 		break;
// 		case 74:
// 		console.log("J Pressed");
// 			//J pressed
// 		break;
// 		case 76:
// 		console.log("L Pressed");
// 			//L pressed
// 		break;
// 	}
//  }

// Dont really need this part and move it to carForward and make a carBackwards part using Counter-- ;
// function selectingBox(){
// 	//var boxes = document.querySelectorAll('.grid');
// 	var ele = document.getElementById(counter);
// 	// console.log("ele", ele);
// 	counter++;
// 	playerOne(ele);

//  }

var arrayOfWords = ["the", "dog", "cat", "house"];
// var boxes = document.getElementsByClassName("grid");
var counter = 1;

var wordTyped = [];

function startGame(){
	// set a word
	var currentWordEl = document.getElementById("current-word");
	currentWordEl.textContent = arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
    document.addEventListener("keyup", function(event) {
    	var userInput = String.fromCharCode(event.which).toLowerCase();
      	console.log("user typed:", userInput);
      	wordTyped.push(userInput);
      	console.log(wordTyped);

    // event.preventDefault();
    if (event.which === 13) {	
    	console.log("pressed enter")
  //  
        
  // //      
    }
    // if user-input matches current word
    // if (word === "The"){
 		//console.log("it worked");
 	// 	carForward();
 	// }
 	// else{
 	// 	carBackward();
 	// 	//console.log("it doesnt");
 	// }

});
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

function removePicture(box2){
	box2.style.backgroundImage = "url('http://java2s.com/style/demo/Firefox.png')";
	// box2.setAttribute("style", "background-image: url(http://java2s.com/style/demo/Firefox.png");
	// console.log(box2);
}


function carBackward(){
	var back = document.getElementById(counter);
	removePicture(back);
	counter--;
}

///////// RESET PART /////////////
function addReset(){
	var reset = document.getElementById('#reset');
	reset.addEventListener('click', restartGame);
}

function restartGame(){
window.location.reload();
//counter = 1;

}



