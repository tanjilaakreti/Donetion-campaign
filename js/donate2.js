document.getElementById('btn-withdraw-2').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field-2');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Only Number');
        return;
    }
    const withdrawTotalElement = document.getElementById('withdraw-total-2');
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
    h2.innerText = `${newWithdrawAmount} Taka is Donate for Aid for Injured in the Quota Movement, Bangladesh`;
    document.getElementById('transaction-section-3').appendChild(h2);
})


