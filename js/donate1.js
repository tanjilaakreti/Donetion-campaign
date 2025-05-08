document.getElementById('btn-withdraw-1').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field-1');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Only Number');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total-1');
    const preWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    if (newWithdrawAmount > preBalanceTotal) {
        alert('insuffient fund');
        return;
    }

    const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = preBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // transaction section
    const h2 = document.createElement('h2');
    h2.innerText = `${newWithdrawAmount} Taka is Donate for Flood Relief in Feni, Bangladesh`;
    document.getElementById('transaction-section-2').appendChild(h2);
})


