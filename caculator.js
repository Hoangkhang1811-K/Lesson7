function calculate(operator) {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let result;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập đủ hai số!";
        return;
    }

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                document.getElementById("result").innerText = "Không thể chia cho 0!";
                return;
            }
            result = a / b;
            break;
        default:
            result = "Phép tính không hợp lệ";
    }

    document.getElementById("result").innerText = "Kết quả: " + result;
}