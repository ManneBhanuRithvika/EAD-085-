<!DOCTYPE html>
<html>
<head>
    <title>Advanced Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .calculator {
            background: white;
            padding: 25px;
            width: 300px;
            border-radius: 8px;
            box-shadow: 0 0 10px gray;
        }

        input, select, button {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
        }

        button {
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
        }

        #result {
            margin-top: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<div class="calculator">
    <h2>Calculator</h2>

    <input type="number" id="num1" placeholder="Enter First Number">
    <input type="number" id="num2" placeholder="Enter Second Number">

    <select id="operation">
        <option value="+">Addition (+)</option>
        <option value="-">Subtraction (-)</option>
        <option value="*">Multiplication (×)</option>
        <option value="/">Division (÷)</option>
    </select>

    <button onclick="performCalculation()">Calculate</button>

    <div id="result"></div>
</div>

<script>
    function calculate(num1, num2, operationCallback) {
        return operationCallback(num1, num2);
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    }

    function performCalculation() {
        let num1 = parseFloat(document.getElementById("num1").value);
        let num2 = parseFloat(document.getElementById("num2").value);
        let operator = document.getElementById("operation").value;
        let result;

        switch (operator) {
            case "+":
                result = calculate(num1, num2, add);
                break;
            case "-":
                result = calculate(num1, num2, subtract);
                break;
            case "*":
                result = calculate(num1, num2, multiply);
                break;
            case "/":
                result = calculate(num1, num2, divide);
                break;
            default:
                result = "Invalid Operator";
        }

        document.getElementById("result").innerHTML = "Result: " + result;
    }
</script>

</body>
</html>