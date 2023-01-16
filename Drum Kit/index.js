// document.querySelector("button").addEventListener("click", hendelClick);
//
// function hendelClick(){
//   alert("Click me 1 or 2");
//
// }



  for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    //// please via mouse click with with 'swich'

    var buttonInnerHTML = this.innerHTML

    playSound(buttonInnerHTML)

    //// please via mouse click with with 'if'

    // if (this.innerHTML === "w") {
    //   //alert("Click Me #1");
    //   this.style.color = "red";
    //   var audio = new Audio('sounds/tom-1.mp3');
    //   audio.play()
    // } else if (this.innerHTML === "a") {
    //   //alert("Click Me #2");
    //   var audio = new Audio('sounds/tom-2.mp3');
    //   audio.play()
    // } else if (this.innerHTML === "s") {
    //   var audio = new Audio('sounds/tom-3.mp3');
    //   audio.play()
    // } else if (this.innerHTML === "d") {
    //   var audio = new Audio('sounds/tom-4.mp3');
    //   audio.play()
    // }else if (this.innerHTML === "j") {
    //   var audio = new Audio('sounds/crash.mp3');
    //   audio.play()
    // }else if (this.innerHTML === "k") {
    //   var audio = new Audio('sounds/kick-bass.mp3');
    //   audio.play()
    // }else if (this.innerHTML === "l") {
    //   var audio = new Audio('sounds/snare.mp3');
    //   audio.play()
    // } else {
    //   alert("ERROR!");
    // }
    });

  }
  //// Please via key pass

  document.addEventListener("keydown", function(r) {

    playSound(event.key)

  });


//// Please sounds

function playSound(t){

  switch (t) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play()
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play()
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play()
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play()
      break;
    case "j":
      var crash = new Audio('sounds/crash.mp3');
      crash.play()
      break;
    case "k":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play()
      break;
    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play()
      break;


    default: console.log(r);

    }
}
