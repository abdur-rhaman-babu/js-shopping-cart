const totalCase = document.getElementById('total-case')
const totalMobile = document.getElementById('total-mobile')
// updated case Number
const updateProductNumber = (number,isAdd,products,price) =>{
    const caseNumber = document.getElementById(number)
   
    if ( isAdd === true && caseNumber.value < 5){
        caseNumber.value = parseInt(caseNumber.value) + 1;
    }else if ( isAdd === false && caseNumber.value > 0){
        caseNumber.value = parseInt(caseNumber.value) - 1;
    }

    products.innerText = caseNumber.value * price;
}

// case increase
document.getElementById('caseIncrease-btn').addEventListener('click', ()=>{
         updateProductNumber('case-number', true, totalCase, 59)
})

// case decrease
document.getElementById('caseDecrease-btn').addEventListener('click', ()=>{
         updateProductNumber('case-number',false, totalCase, 59)
})

// mobile increase
document.getElementById('mobileIncrese-btn').addEventListener('click', ()=>{
        updateProductNumber('mobile-number', true, totalMobile, 1219)
})

// mobile decrease
document.getElementById('mobileDecrese-btn').addEventListener('click', ()=>{
        updateProductNumber('mobile-number', false, totalMobile, 1219)
})

