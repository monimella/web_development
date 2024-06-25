/*SURVEYFORM*/
//collect components
const myform = document.querySelector(".myform")

const displayresult=document.querySelector(".displayresult")

myform.addEventListener("submit", function(event){
    //to test if the data was collected, we can set preventDefault for the form
    const username=document.querySelector("#firstname").value
    const fav_language =document.querySelector("input[name='fav_language']:checked").value
    /*
    // to test to see if the data was collected, we can set preventDefault for the form
    event.preventDefault()
    displayresult.innerHTML=`Username: ${username}<br>Favorite Web Language: ${fav_language}`*/

    //save the data, username and favorite language
    sessionStorage.setItem('firstname',username)
    sessionStorage.setItem('selection_language', fav_language)
    sessionStorage.setItem('product123', "Product Name")
})

/**SHOPPING CART*/
//collect the elements
const formitem1=document.querySelector(".formitem1")
const itemname=document.querySelector('.itemname')
const itemdescription=document.querySelector('.itemdescription')
const imgitem1=document.querySelector('.imgitem1')
const saleprice=document.querySelector('.saleprice').value

formitem1.addEventListener("submit", function(){
    //collect the quantity
    const quantityitem1=document.querySelector('.quantityinput').value
    
    
    //set data into sessionStorage
    sessionStorage.setItem('quantityitem1', quantityitem1)
    sessionStorage.setItem('itemname1',itemname.textContent)
    sessionStorage.setItem('itemdescription1', itemdescription.textContent)
    sessionStorage.setItem('imgitem1', imgitem)
    sessionStorage.setItem('saleprice1', saleprice.textContent)
})
