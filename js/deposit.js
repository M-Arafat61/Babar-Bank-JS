document.getElementById('btn-deposit').addEventListener('click', function(){

    // getting new deposit amount
    const inputDepositField = document.getElementById('input-deposit')
    const newDepositAmountStr = inputDepositField.value;
    const newDepositAmount = parseFloat(newDepositAmountStr)
    // clear the deposit field
    inputDepositField.value = ''
    
    if (isNaN(newDepositAmount)) {
        alert ('please provide a valid number')
        return
    }
    // getting previous deposit amount
    const depositTotalElement  = document.getElementById('deposit-total')
    const previousDepositTotalStr = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalStr)

    // total deposit calculation
    const currentDepositTotal = newDepositAmount + previousDepositTotal
    depositTotalElement.innerText = currentDepositTotal

    // getting balance total
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalStr = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr)

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    balanceTotalElement.innerText = currentBalanceTotal
    // console.log(typeof newDepositeAmount)

})