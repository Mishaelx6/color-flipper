 var listForCodeGeneration = [ 1, 2, 3, 4, 5, 6, "a", "b", "c", "d", "e", "f"]

 var  buttons = document.querySelector("#btn");

 var span = document.querySelector("span");

 buttons.addEventListener("click", function(){
   hexColor = "#"
     for (var i = 0; i < 6; i++){

        hexColor += listForCodeGeneration[getColor()]
    }

  var body  =  document.querySelector("body");

   body.style.background = hexColor;
   span.textContent = hexColor;


})

function getColor(){
  var randomColor = Math.floor(Math.random()*listForCodeGeneration.length)
  return randomColor
}
