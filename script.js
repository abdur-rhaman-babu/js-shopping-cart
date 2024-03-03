// updated case Number
const updateCaseNumber = (number,isAdd) =>{
    const caseNumber = document.getElementById(number)
    if ( isAdd === true && caseNumber.value < 5){
        caseNumber.value = parseInt(caseNumber.value) + 1;
    }else if ( isAdd === false && caseNumber.value > 0){
        caseNumber.value = parseInt(caseNumber.value) - 1;
    }
}


// // updated Mobile Number
// const updateMobileNumber = (number,isAdd) =>{
//     const mobileNumber = document.getElementById(number)
//     if ( isAdd === true && mobileNumber.value < 5){
//         mobileNumber.value = parseInt(mobileNumber.value) + 1;
//     }else if ( isAdd === false && mobileNumber.value > 0){
//         mobileNumber.value = parseInt(mobileNumber.value) - 1;
//     }
// }


// case increase
document.getElementById('caseIncrease-btn').addEventListener('click', ()=>{
         updateCaseNumber('case-number', true)
})

// case decrease
document.getElementById('caseDecrease-btn').addEventListener('click', ()=>{
         updateCaseNumber('case-number',false)
})

// mobile increase
document.getElementById('mobileIncrese-btn').addEventListener('click', ()=>{
        updateCaseNumber('mobile-number', true)
})

// mobile decrease
document.getElementById('mobileDecrese-btn').addEventListener('click', ()=>{
        updateCaseNumber('mobile-number', false)
})

