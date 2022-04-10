var DrumClassLength = document.querySelectorAll(".drum").length;
for(var i = 0; i < DrumClassLength; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", gotClicked);
}

function gotClicked(){
  alert("I got clicked");
}
