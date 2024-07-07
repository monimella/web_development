


/**SHOPPING CART*/
//collect the elements
const formazalea=document.querySelector(".formazalea")
const itemname=document.querySelector(".itemname").textContent
const itemdescription=document.querySelector(".itemdescription").textContent
const saleprice=document.querySelector(".saleprice").textContent
const imgitem=document.querySelector(".imgazalea").getAttribute("src")


formazalea.addEventListener("submit", function(){

    //collect the quantity
    const x=document.querySelector('.quantityinput').value


    
    //set data into sessionStorage
    sessionStorage.setItem('quantityitem', x)
    sessionStorage.setItem('name_item',itemname)
    sessionStorage.setItem('description_item', itemdescription)
    sessionStorage.setItem('sale_price', saleprice)
    sessionStorage.setItem('item_image', imgitem)
})