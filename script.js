// find element of case
const caseIncreaseBtn = document.getElementById('caseIncrease-btn')
const caseDecreaseBtn = document.getElementById('caseDecrease-btn')


// find element of mobile
const mobileIncreaseBtn = document.getElementById('mobileIncrese-btn')
const mobileDecreaseBtn = document.getElementById('mobileDecrese-btn')
const mobileNumber = document.getElementById('mobile-number')

// updated case Number
const updateCaseNumber = (number,isAdd) =>{
    const caseNumber = document.getElementById(number)
    if ( isAdd === true && caseNumber.value < 5){
        caseNumber.value = parseInt(caseNumber.value) + 1;
    }else if ( isAdd === false && caseNumber.value > 0){
        caseNumber.value = parseInt(caseNumber.value) - 1;
    }
}
// case increase
caseIncreaseBtn.addEventListener('click', ()=>{
        updateCaseNumber('case-number', true)
})

// case decrease
caseDecreaseBtn.addEventListener('click', ()=>{
    updateCaseNumber('case-number',false)
})

// mobile increase
mobileIncreaseBtn.addEventListener('click', ()=>{
    if( mobileNumber.value < 5 ){
        mobileNumber.value = parseInt(mobileNumber.value) + 1;
    }
})

// mobile decrease
mobileDecreaseBtn.addEventListener('click', ()=>{
    if (mobileNumber.value > 0 ){
        mobileNumber.value = parseInt(mobileNumber.value) - 1;
    }
})

