function getProductInput(product, price, increase){
    let inputNumber = document.getElementById(product+ '-number');
    let inputValue =parseInt(inputNumber.value);
   if(increase==true){
    inputValue= inputValue +1;
   }
   else if(inputValue>0){
    inputValue= inputValue -1;
   }
   inputNumber.value=inputValue;

   const totalInput = document.getElementById(product+'-total');
   totalInput.innerText = inputValue * price ;
   calculation ();
   
   
}
// sub total /////////

function getUpdateTotal(product){
    const updateInput = document.getElementById(product +'-number');
    const updateTotalInput= parseInt(updateInput.value);
    return updateTotalInput;


} 

function calculation (){
     const phoneTotal=getUpdateTotal('phone')*1278;
    const caseTotal = getUpdateTotal('case')*59;
    const subTotal= phoneTotal + caseTotal;
    const tax = subTotal/10;
    const totalPrice= subTotal +tax;

    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('sub-amount').innerText=tax;
    document.getElementById('sub-price').innerText=totalPrice;
}





document.getElementById('phone-plus').addEventListener('click', function(){
   getProductInput('phone', 1219,  true);

});
document.getElementById('phone-minus').addEventListener('click', function(){
   getProductInput('phone', 1219, false);


});
document.getElementById('case-plus').addEventListener('click', function(){
   getProductInput('case', 59, true);

});
document.getElementById('case-minus').addEventListener('click', function(){
   getProductInput('case', 59, false);


});
