function updateProductNumber(product, price, isInceasing){
    const productInput = document.getElementById(product+ '-number');
    let productNumber =parseInt( productInput.value);
if(isInceasing ==true){
    productNumber=productNumber+1;  
}
   else if(productNumber>0){
    productNumber=productNumber-1;  
   }
productInput.value=productNumber; 


//update  total///
const productTotal = document.getElementById(product + '-total');
productTotal.innerText= productNumber * price;
calculateTotal();
}

//total calculate/

function getInputValue(product){
const productInput = document.getElementById(product +'-number');
const productNumber = parseInt(productInput.value);
return productNumber;
}

 
function calculateTotal(){

const phoneTotal = getInputValue('phone') * 1219;
const caseTotal = getInputValue('case') * 59;
 const subTotal = phoneTotal+ caseTotal;
 const tax = subTotal/10;
 const totalPrice = subTotal+ tax;
document.getElementById('sub-total').innerText= subTotal;
document.getElementById('sub-amount').innerText= tax;
document.getElementById('sub-price').innerText= totalPrice;

}



//phone increase decrease///
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
    
})
document.getElementById('phone-minus').addEventListener('click', function(){
  updateProductNumber('phone', 1219,  false);

})


// button cover increase decerase ///////
document.getElementById('case-plus').addEventListener('click', function(){
updateProductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})