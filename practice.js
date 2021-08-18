function getInputValue(product, price, isIncreasing){
    const inputValue = document.getElementById(product+ '-number');
    let inputNumber = parseInt(inputValue.value);
    if(isIncreasing==true){
        inputNumber= inputNumber+1;
    }
    else if(inputNumber>0){
        inputNumber= inputNumber-1;
    }
    inputValue.value=inputNumber;

    // total input update //////
    const inputUpdate= document.getElementById(product+'-total');
    inputUpdate.innerText=inputNumber* price;
    
}


function getTotalUppdateValue(product){
    const updateInput= document.getElementById(product+'-number')
    const updateTotal= parseInt(updateInput.value);
    return updateTotal;
}

function calculateToion (){
    const subPhone =getTotalUppdateValue('phone')*1219;
    const subCase = getTotalUppdateValue('case') * 59;
    const subTotal = subPhone+ subCase;
    const tax = subTotal/10;
    const totalPrice = subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('sub-amount').innerText=tax;
    document.getElementById('sub-price').innerText=totalPrice;

}


//increase and decrease//
document.getElementById('phone-plus').addEventListener('click', function(){
    getInputValue('phone', 1219, true);
    calculateToion();
   })
   document.getElementById('phone-minus').addEventListener('click', function(){
    getInputValue('phone',1219, false);
    calculateToion();
   })
   
document.getElementById('case-plus').addEventListener('click', function(){
 getInputValue('case',59, true);
 calculateToion();
})
document.getElementById('case-minus').addEventListener('click', function(){
 getInputValue('case',59, false);
 calculateToion();
})
