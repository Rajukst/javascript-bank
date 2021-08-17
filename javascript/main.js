// deposite button handle
function publicInput(inputIdNumber) {
    const depositeInput = document.getElementById(inputIdNumber);
    const getInputText = depositeInput.value;
    const inputValue = parseFloat(getInputText);
    depositeInput.value = '';
    return inputValue;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposite input
    const inputValue = publicInput('deposit-input');
    // update deposite in display
    const prevDeposite = document.getElementById('deposit-total');
    const depositeText = prevDeposite.innerText;
    const getDeposite = parseFloat(depositeText);
    const totalDeposite = inputValue + getDeposite;
    prevDeposite.innerText = totalDeposite;

    // connect to main balence 
    const prevBalence = document.getElementById('balance-total');
    const getBalenceText = prevBalence.innerText;
    const balenceFloating = parseFloat(getBalenceText);
    const totalBalence = balenceFloating + inputValue;
    prevBalence.innerText = totalBalence;
});

// withdraw position handle 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input value via publicInput Function
    const withdrawFloat = publicInput('withdraw-input')

    // update withdraw position
    const withdrawValue = document.getElementById('withdraw-total');
    const getwithdrawText = withdrawValue.innerText;
    const withdrawableAmount = parseFloat(getwithdrawText);
    const netWithdraw = withdrawFloat - withdrawableAmount;
    withdrawValue.innerText = netWithdraw;


    // update balence and less from withdraw
    const netBalence = document.getElementById('balance-total');
    const getBalenceText = netBalence.innerText;
    const floating = parseFloat(getBalenceText);
    const total = floating - withdrawFloat;
    netBalence.innerText = total;

});