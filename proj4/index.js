// const cards = document.querySelectorAll(".card");
// console.log(cards);

// //variables
// var isFlipped = false;
// var firstCard;
// var secondCard;

// cards.forEach((card) => card.addEventListener("click", flip));

// function flip() {
//   //   console.log("Card flipped");
//   // console.log(this);
//   this.classList.add("flip");
//   if (!isFlipped) {
//     isFlipped = true;
//     firstCard = this;
//   } else {
//     secondCard = this;
//     console.log(firstCard);
//     console.log(secondCard);

//     checkIt();
//   }
// }

// function checkIt() {
//   //   console.log("Checking...");
//   if (firstCard.dataset.image === secondCard.dataset.image) {
//     success();
//   } else {
//     fail();
//   }
// }

// function success() {
//   //   console.log("Success");
//   firstCard.removeEventListener("click", flip);
//   secondCard.removeEventListener("click", flip);
//   reset();
// }

// function fail() {
//   //   console.log("Failed");
//   setTimeout(() => {
//     firstCard.classList.remove("flip");
//     secondCard.classList.remove("flip");
//     reset();
//   }, 1000);
// }

// function reset() {
//   isFlipped = false;
//   firstCard = null;
//   secondCard = null;
// }

// //TODO: shuffle

// (function shuffle() {
//   cards.forEach((card) => {
//     var index = Math.floor(Math.random() * 16);
//     card.style.order = index;
//   });
// })();
const cards = document.querySelectorAll(".card");
//console.log(cards);// gives node list in form of array
var isFlipped=false;
var firstCard;
var secondCard;

cards.forEach((card)=>
  card.addEventListener("click",flip)

);



function flip(){
  // console.log("card flipped");
  this.classList.add("flip");
  if(!isFlipped){
    isFlipped=true;
    firstCard=this;
  }
  else{
    secondCard=this;
    checkIt();
  }
}
// this function checks if you have selected same images
function checkIt(){
  if(firstCard.dataset.image === secondCard.dataset.image){
    success();

  }
  else{
    fail();
  }
}
// this function runs on selecting same image
function success(){
  //console.log("success");
  firstCard.removeEventListener("click",flip)
  secondCard.removeEventListener("click",flip)
  reset();
 }
 // this function runs on selecting diff image
function fail(){
  //console.log("fialed");
  setTimeout(()=>{
    firstCard.classList.remove("flip")
  secondCard.classList.remove("flip")
  reset()
  },1000)
}
// this function is called after success or failure
function reset(){
  isFlipped=false;
  firstCard=null;
  secondCard=null;
}

//to-do shuffle
// shuffle images by changing their flex order
// shuffle is self executing anonymous function
(function shuffle(){
  cards.forEach((card)=>{
    var index=(Math.random()*16);
    card.getElementsByClassName.order=index;
  })
})();
