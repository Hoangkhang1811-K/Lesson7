
    // Tỉ giá quy đổi (đơn giản, bạn có thể cập nhật theo thực tế)
    const rates = {
    "USD": 1,
    "VND": 0.000039,
    "EUR": 1.08,
    "JPY": 0.0067
};

    function convert() {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;
    const resultField = document.getElementById("results");

    if (isNaN(amount) || amount <= 0) {
    resultField.textContent = "Vui lòng nhập số tiền hợp lệ.";
    return;
}

    // Quy đổi sang USD làm trung gian
    const amountInUSD = amount * (rates[from] ? rates[from] : 1);
    const converted = amountInUSD / (rates[to] ? rates[to] : 1);

    resultField.textContent = `Result: ${converted.toFixed(6)} ${to}`;
}
