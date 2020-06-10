function doSomething(event){



   console.log(event.type);
    
}
addEventListener("click", doSomething)

function click(event){
 
    console.log(event.target)
    const der = prompt('Hello!! Please enter your Name')
console.log("Thanks" + " " + der + " " + "for visiting our site!")
}
addEventListener("click",click)

function Something(){
    console.log(event);
     
 }
 addEventListener("click", Something)
