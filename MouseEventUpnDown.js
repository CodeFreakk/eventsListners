
const myDiv = document.getElementById("myDiv")
const mydiv = document.getElementById("myDiv")
// myDiv.onmousedown = function(){
//     alert('Welcome!!')
//     myDiv.innerHTML = "mousedown!!"
// }
// const mydiv = document.getElementById("myDiv")
// myDiv.onmouseup = function(){
//     alert('Welcome Dude!!')
//     myDiv.innerHTML = "mouseup!!"
// }
myDiv.addEventListener("mousedown", function(){
    myDiv.innerHTML = "mouse iD down!!";
})
mydiv.addEventListener("mousedown", function(){
    mydiv.innerHTML = "mouse iD up!!";
})