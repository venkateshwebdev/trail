// var a = document.getElementById("hangman");
// var b = document.getElementById("rps");
// var c = document.getElementById("hhhh")
// a.addEventListener("mouseover",function(){
//   b.style.opacity="0";
//   c.style.opacity="0";
// });
// a.addEventListener("mouseout",function(){
//   b.style.opacity="1";
//   c.style.opacity="1";
// });
// b.addEventListener("mouseover",function(){
//   a.style.opacity="0";
//   c.style.opacity="0";
// });
// b.addEventListener("mouseout",function(){
//   a.style.opacity="1";
//   c.style.opacity="1";
// });
//
// c.addEventListener("mouseover",function(){
//   a.style.opacity="0";
//   b.style.opacity="0";
// });
// c.addEventListener("mouseout",function(){
//   a.style.opacity="1";
//   b.style.opacity="1";
// });


var cards = [
  document.getElementById("hangman"),
  document.getElementById("rps"),
  document.getElementById("hhhh")
]

cards.forEach(item => {
  item.addEventListener('mouseover', function() {
    for(var i = 0; i < cards.length; i++){
      if(cards[i].id !== item.id){
        cards[i].style.opacity = "0";
      }
    }
  });
  item.addEventListener('mouseout', function() {
    for(var i = 0; i < cards.length; i++){
      if(cards[i].id !== item.id){
        cards[i].style.opacity = "1";

      }
    }
  });
})
