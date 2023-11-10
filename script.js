//! Accordion Menu
let accordionHeader = document.querySelectorAll('.accordionHeader');
let accordionBody = document.querySelectorAll('.accordionBody');

for(let i=0;i<accordionHeader.length;i++){
    accordionHeader[i].addEventListener('click',()=>{
        if(accordionBody[i].classList.contains('d-none')){
            accordionBody[i].classList.replace('d-none','d-block');
        }else{
            accordionBody[i].classList.replace('d-block','d-none');
        }
    })
}

//! Card
let ListCard = document.querySelectorAll('.listCard');
let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus');
let quantity = document.querySelectorAll('.quantity')
let total = document.querySelectorAll('.total-price');
let cartSubTotal = document.querySelector('.Cart-Sub-Total');
let ecoTax = document.querySelector('.Eco-Tax');
ecoTax.innerHTML = 5;
let shippingCost = document.querySelector('.Shipping-Cost');
shippingCost.innerHTML = 10;
let totalCard = document.querySelector('.Total-Card');
let subTotal = 0;

let price = 59;
    
for(let i = 0;i<plus.length;i++){        
    plus[i].addEventListener('click',()=>{                 
        quantity[i].value =Number(quantity[i].value) + 1;
        total[i].innerHTML = price * (quantity[i].value);
        subTotal += Number(price);     
        cartTotal();       
        updateTotal();
    })             
}

for(let i = 0;i<minus.length;i++){        
    minus[i].addEventListener('click',()=>{                 
        quantity[i].value =Number(quantity[i].value) - 1;
        total[i].innerHTML = price *(quantity[i].value);        
        subTotal -= Number(price);    
        cartTotal();                
        updateTotal();                                                       
    })           
}

function cartTotal(){
    cartSubTotal.innerHTML = Number(subTotal);
}

function updateTotal() {
    totalCard.innerHTML = Number(cartSubTotal.innerHTML) + Number(ecoTax.innerHTML) + Number(shippingCost.innerHTML) ;
}