var color = ["d367e4" , "ef2376", "773a4b", "b3df45"];

var  buttons = document.querySelector("#btn");

var span = document.querySelector("span");


buttons.addEventListener("click", function(){
    body = document.querySelector("body");
    body.style.background = "#"+ getColor();
    span.textContent = "#" + getColor();
})

function getColor(){
  var randomColor = Math.floor(Math.random()*4)
  return(color[randomColor])
}
