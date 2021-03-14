var imageNumber = 0;
var imageArray = ["./images/1.jpeg", "./images/2.jpeg", "./images/3.jpeg", "./images/4.jpeg", "./images/5.jpeg"];
var urlArray = [
	"https://www.gettyimages.hk/detail/%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/michael-jordan-of-the-chicago-bulls-rests-on-the-court-during-a-%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/509506?adppopup=true", 
	"https://www.gettyimages.hk/detail/%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/michael-jordan-of-the-chicago-bulls-holds-the-larry-obrien-%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/51744323?adppopup=true", 
	"https://www.gettyimages.hk/detail/%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/michael-jordan-of-the-chicago-bulls-pumps-his-fist-after-scoring-%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/51659685?adppopup=true", 
	"https://www.gettyimages.hk/detail/%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/michael-jordan-of-the-chicago-bulls-looks-on-durng-a-nba-game-%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/91118426?adppopup=true", 
	"https://www.gettyimages.hk/detail/%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/detail-of-the-air-jordan-nike-shoes-worn-by-chicago-bulls-center-%E6%96%B0%E8%81%9E%E7%85%A7%E7%89%87/53033254?adppopup=true"
	]
var images = document.getElementById("display");

var prevButton = document.getElementById("previous");
prevButton.className = "disabled";

function nextImage(n){
	var prevButton = document.getElementById("previous");
	var nextButton = document.getElementById("next");

	imageNumber += n;
	if(imageNumber >= 4){
		imageNumber = 4;
		nextButton.className = "disabled";
	}else if(imageNumber <= 0){
		imageNumber = 0;
		prevButton.className = "disabled";
	}else{
		prevButton.classList.remove("disabled");
		nextButton.classList.remove("disabled");
	}
	showImages(imageNumber);
}

function showImages(n){
	var images = document.getElementById("display");
	var urls = document.getElementById("url");
	var texts = document.getElementById("url");
	if(n >= 0 && n < 5){
		images.src = imageArray[n];
		urls.href = urlArray[n];
		texts.innerHTML = urlArray[n];
	}
}





