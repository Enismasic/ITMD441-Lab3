document.addEventListener('DOMContentLoaded', function() {
    
    //Get references to input elements from index.html
    const billTototalInput = document.getElementById('billtotal');
    const tipSlider = document.getElementById('tip-slider');
    const tipPercentInput = document.getElementById('tip-percent');
    const tipAmountInput = document.getElementById('tip-amount');
    const totalBillWithTipInput = document.getElementById('total-bill-tip');

    //Functionality to calculate and update results
function calculateResults() {
    const billtotal = parseFloat(billTototalInput.value)
    const tipPercentage = parseInt(tipSlider.value);
    const tipAmount = (billTotal * tipPercentage) / 100;
    const totalBillWithTip = billtotal + tipAmount;

    tipPercentInput.value = tipPercentage + '%';
    tipAmountInput.value = '$' + tipAmount.toFixed(2);
    totalBillWithTipInput.value = '$' + totalBillWithTip.toFixed(2);

}

    //Event Listeners for bill total and slider 
    billTototalInput.addEventListener('input', calculateResults);
    tipSlider.addEventListener('input', calculateResults);

    //calculation
    calculateResults();
});