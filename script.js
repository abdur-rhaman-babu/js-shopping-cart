// find element
const subTotal = document.getElementById('sub-total')
const totalCase = document.getElementById('total-case')
const totalMobile = document.getElementById('total-mobile')
const tax = document.getElementById('tax-amount')
const totalAmount = document.getElementById('total')

// get input value
const getInputValue = (product) =>{
      const productInput = document.getElementById( product + '-number')
      const productValue = productInput.value;
      return productValue;
}

// get sub total
const getSubTotal = () =>{
      const caseTotal = getInputValue('mobile') * 1200;
      const phoneTotal = getInputValue('case') * 60;
      const productTotal = caseTotal + phoneTotal;
      subTotal.innerText = productTotal;
      const totalTax = productTotal / 10;
      tax.innerText = totalTax;
      totalAmount.innerText = productTotal + totalTax;;
}

// updated case Number
const updateProductNumber = (number,isAdd,products,price) =>{
    const caseNumber = document.getElementById(number)
    if ( isAdd === true && caseNumber.value < 5){
        caseNumber.value = parseInt(caseNumber.value) + 1;
    }else if ( isAdd === false && caseNumber.value > 0){
        caseNumber.value = parseInt(caseNumber.value) - 1;
    }

    products.innerText = caseNumber.value * price;
    getSubTotal()
}

// case increase
document.getElementById('caseIncrease-btn').addEventListener('click', ()=>{
        updateProductNumber('case-number', true, totalCase, 60)
})

// case decrease
document.getElementById('caseDecrease-btn').addEventListener('click', ()=>{
        updateProductNumber('case-number',false, totalCase, 60)
})

// mobile increase
document.getElementById('mobileIncrese-btn').addEventListener('click', ()=>{
        updateProductNumber('mobile-number', true, totalMobile, 1200)
})

// mobile decrease
document.getElementById('mobileDecrese-btn').addEventListener('click', ()=>{
        updateProductNumber('mobile-number', false, totalMobile, 1200)
})

