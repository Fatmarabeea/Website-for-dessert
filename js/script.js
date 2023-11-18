var allproducts = document.querySelectorAll(".products h2")
var showeproduct =document.querySelector("#content")
var showprice =document.querySelector(".totalPrice .price")
var button =document.querySelector("#butt")
var totalPrice = 0;


allproducts.forEach(function(order){
   order.onclick = function(){

    showeproduct.innerHTML  += order.textContent + " , "  
   
    totalPrice += +(order.getAttribute("price"))
    // totalPrice.innerHTML +=  +(order.getAttribute("price"))
    document.querySelector("price")
    if(showeproduct.innerHTML != ""){
        button.style.display ="block";
    }
   }
})
console.log(totalPrice)

button.addEventListener("click" ,function (){
    showprice.innerHTML = totalPrice
})