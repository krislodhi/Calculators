function calculateGST() {
    const amount = parseFloat(document.getElementById('amount').value);
    const gstRate = parseFloat(document.getElementById('gstRate').value);
    const taxType = document.getElementById('taxType').value;

    if (!isNaN(amount) && !isNaN(gstRate) && taxType) {
        let gstAmount, totalAmount;

        if (taxType === "exclusive") {
            gstAmount = (amount * gstRate) / 100;
            totalAmount = amount + gstAmount;
        } else if (taxType === "inclusive") {
            gstAmount = amount - (amount * (100 / (100 + gstRate)));
            totalAmount = amount;
        }

        document.getElementById('gstAmount').textContent = gstAmount.toFixed(2);
        document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
    } else {
        alert('Please enter all fields correctly.');
    }
}
