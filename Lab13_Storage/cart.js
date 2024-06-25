//collect the elements
const priceitem_display=document.querySelector('.priceitem_display')
const quantity_display=document.querySelector('.quantity_display')
const totalprice_display=document.querySelector('.totalprice_display')
const itemimg_display =document.querySelector('.itemimg')
const itemdescription_display=document.querySelector('.itemdescription')

//get values for quantity and price per unit
const priceitem=sessionStorage.getItem('sale_price')
const quantityitem=sessionStorage.getItem('quantityitem')
const itemimg=sessionStorage.getItem('itemimg')
const itemdescription=sessionStorage.getItem('description_item')


//calculate for total price
const totalprice = (priceitem*quantityitem).toFixed(2)




//apend image
let image=document.createElement('img')
image.src=sessionStorage.getItem('item_image')
image.style.width='30px'

itemimg_display.append(image)

//append product description
let product = document.createElement('p')
product.innerHTML = itemdescription
itemdescription_display.append(product)

//append price
let productprice=document.createElement('p')
productprice.innerHTML=`$${priceitem}`
priceitem_display.append(productprice)

//append quantity
let totalquantity=document.createElement('p')
totalquantity.innerHTML=quantityitem
quantity_display.append(totalquantity)


//append total price
let t=document.createElement('p')
t.innerHTML = totalprice
totalprice_display.append(t)


/*
//print the price, quanity and total price in the collected elements
priceitem_display.innerHTML=`${priceitem}`
quantity_display.innerHTML= `${quantityitem}`
totalprice_display.innerHTML=`${totalprice}`
*/