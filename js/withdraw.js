document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputWithdrawField = document.getElementById('input-withdraw')
    const newWithdrawTotalStr = inputWithdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalStr)
    
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalStr = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal
    withdrawTotalElement.innerText = currentWithdrawTotal

    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalStr = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr)
    const currentBalanceTotal = previousBalanceTotal - newWithdrawTotal
    balanceTotalElement.innerText = currentBalanceTotal
    inputWithdrawField.value = ''
})