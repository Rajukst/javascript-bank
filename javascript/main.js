// generating deposit button;
document.getElementById('deposit-button').addEventListener('click', function () {
    // getting deposit input
    const getInput = document.getElementById('deposit-input');
    const inputValue = getInput.value;
    const valueFloat = parseFloat(inputValue);
    // display deposit goes to here
    const depoDisplay = document.getElementById('deposit-total');
    const depoText = depoDisplay.innerText;
    const depoFloating = parseFloat(depoText);
    const getDepo = valueFloat + depoFloating;
    depoDisplay.innerText = getDepo;
    getInput.value = '';
    // updating main Balence
    const balenceDisplay = document.getElementById('balance-total');
    const BalenceText = balenceDisplay.innerText;
    const balenceFloating = parseFloat(BalenceText);
    const total = balenceFloating + getDepo;
    balenceDisplay.innerText = total;
});
// generating withdraw Button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // getting withdraw input
    const withInput = document.getElementById('withdraw-input');
    const getWithdrawValue = withInput.value;
    const withdrawFloat = parseFloat(getWithdrawValue);
    // generate withdraw display
    const withDisplay = document.getElementById('withdraw-total');
    const getWithdrawText = withDisplay.innerText;
    const DisplayFloat = parseFloat(getWithdrawText);
    const WithdrawTotal = DisplayFloat + withdrawFloat;
    withDisplay.innerText = WithdrawTotal;
    withInput.value = '';

    // generating and reduce withdraw from main balence
    const getBalence = document.getElementById('balance-total');
    const balenceText = getBalence.innerText;
    const BalenceFloat = parseFloat(balenceText);
    const totalBalence = BalenceFloat - WithdrawTotal;
    getBalence.innerText = totalBalence;

});