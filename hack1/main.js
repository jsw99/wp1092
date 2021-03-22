// TODO:
function inputting(e){
	var commentButton = document.getElementById("comment-button");
	var buttonGroup = document.getElementById("comment-button-group");

	commentButton.style.background = "#065fd4";
	buttonGroup.style.display = "block";
}



function notInputting(){
	var commentButton = document.getElementById("comment-button");
	//commentButton.className = "disabled";
	commentButton.style.background = "#cccccc";
}

function cancelClicked(){
	var buttonGroup = document.getElementById("comment-button-group");
	buttonGroup.style.display = "none";
}