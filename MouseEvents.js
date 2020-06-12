const image = document.getElementById("img")
const hide = document.getElementById("hide")
const show = document.getElementById("show")

hide.onclick = function(){
    image.style.display = "none";

}
show.onclick = function(){
    image.style.display = "block";
    
}