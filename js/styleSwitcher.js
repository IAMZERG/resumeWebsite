//FUNCTIONS FOR MAIN HEADINGS


function basic () {
	console.log("basic function executed");
	var currentstyles = document.getElementById("customStyles");
	currentstyles.href="css/basic.css";
	var bgauthor = document.getElementById("bg-author");
	bgauthor.innerText="Jordan Pittman";
}
function experience() {

	//this will turn on styles used in the beginning.
	//Will need to make styles for the other two parts of the page.
	
	console.log("experience function executed.");
	var currentstyles = document.getElementById("customStyles");
	currentstyles.href="css/experience.css";
	var bgauthor = document.getElementById("bg-author");
	bgauthor.innerText = "Sam Feyaerts";
}

function education() {
	console.log("education function was executed.");
	var currentstyles=document.getElementById("customStyles");
	currentstyles.href="css/education.css";
	var bgauthor = document.getElementById("bg-author");
	bgauthor.innerText = "Tia Newbury";

}

function hobbies() {
	console.log("hobbies function was executed.");
	var currentstyles=document.getElementById("customStyles");
	currentstyles.href="css/hobbies.css";
	var bgauthor = document.getElementById("bg-author");
	bgauthor.innerText = "Badhon Ebrahim";
}

function goals() {

	//this will need to be changed
	var currentstyles=document.getElementById("customStyles");
	currentstyles.href="css/goals.css";
	var bgauthor = document.getElementById("bg-author");
	bgauthor.innerText = "Designova";
}


//FUNCTIONS FOR THE SUBHEADINGS

function sh (shfilename) {
	console.log("sh executed");
	var currentstyles = document.getElementById("shStyles");
	currentstyles.href= shfilename;
}
	