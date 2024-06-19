/**
 * Monday, June 17: events in JS
 * Monique Lawrence
 */
 //onclick event
 // step 1: find and save the element that we want to apply to an event
 let btn1 = document.querySelector(".btn1")
 // step 2: bound the click event to btn1
 btn1.onclick = function(){
 alert("HEY THERE!")
 }

 //onmouseover
 document.querySelector(".linkqcc").onmouseover=()=>{
    alert("QCC LINK WAS TOUCHED")
 }

//change color div
//step1:collect and save the elements
let colorcontainer = document.querySelector(".colorcontainer")
let btncolor=document.querySelector(".btncolor")
btncolor.addEventListener("click", function(){
    colorcontainer.style.backgroundColor = randomcolor()
})

//change the backgrounf color of element 'colorcontainer'
let randomcolor = function(){
    let redvalue = Math.floor(Math.random()*255)
    let greenvalue = Math.floor(Math.random()*255)
    let bluevalue = Math.floor(Math.random()*255)
    return`rgb(${redvalue},${greenvalue},${bluevalue})`

}

//collect the three buttons

//add click evevnt to each button to the background color to olive and orange

//reset the background color to white

/* Tuesday, June 18*/
/*Event Object*/
//colect the button
let btnpressme=document.querySelector(".btnpressme")
btnpressme.addEventListener("click", function(e){
//switch text content 'btnpressme' button from 'Press Me' to 'Button was pressed'
if(e.target.textContent==="Press Me!"){
    e.target.textContent="button was pressed"
}
else{
    e.target.textContent="Press Me!"
}
//toggle between class'btnpressme' and 'btnactive'
e.target.classlist.toggle("btnactive")

})
/* remove an item from a list*/
let listfruits=document.querySelector("#listfruits")
listfruits.addEventListener("click", function(event){
   if (event.target.tagName.toLowerCase()==="li"){
    event.target.remove()
   }
})
/*prevent default of an event*/
let visitqcc=document.querySelector(".visitqcc")
visitqcc.addEventListener("click", function(event){
    event.preventDefault()
    alert("QCC website is down, try later.")
})
/*SCROLLEVENTS*/
let content = document.querySelector("#content")
let btnscrollright=document.querySelector(".btnscrollright")
btnscrollright.addEventListener("click",function(){window.scrollBy(100,0)
    
})
/*slice photo gallery*/
let btnleft = document.querySelector(".btnleft")
let btnright = document.querySelector(".btnright")
let gallerycontainer = document.querySelector(".gallerycontainer")

btnleft.addEventListener("click", function(){
    gallerycontainer.scrollBy({
        left: -500,
        behavior: "smooth"
    })

})
btnright.addEventListener("click", function(){
gallerycontainer.scrollBy({
    left:500,
    behavior:"smooth"
})
})

/*to top*/
const gotop=document.querySelector(".gotop")

window.addEventListener("scroll", function(){
   let pxtop=window.scrollY;
   if(pxtop>=300){
    gotop.style.display="block"
   }
   
   else{
    gotop.style.display="none"
}
})