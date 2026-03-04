<!DOCTYPE html>
<html>
<head>
    <title>Number Analyzer</title>
    <style>
        body {
            font-family: Arial;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box {
            background: white;
            padding: 25px;
            width: 320px;
            border-radius: 8px;
            box-shadow: 0 0 10px gray;
        }

        input, button {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
        }

        button {
            background-color: green;
            color: white;
            border: none;
        }

        #result p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>Number Analyzer</h2>
    <input type="number" id="number" placeholder="Enter a Number">
    <button onclick="analyze()">Analyze</button>
    <div id="result"></div>
</div>

<script>
    function isPalindrome(num) {
        let original = num;
        let reversed = 0;

        while (num > 0) {
            reversed = reversed * 10 + (num % 10);
            num = Math.floor(num / 10);
        }

        return original === reversed;
    }

    function isArmstrong(num) {
        let sum = 0;
        let temp = num;
        let digits = num.toString().length;

        while (temp > 0) {
            let digit = temp % 10;
            sum += Math.pow(digit, digits);
            temp = Math.floor(temp / 10);
        }

        return sum === num;
    }

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function factorial(num) {
        if (num < 0) return "Not Defined";
        let fact = 1;
        for (let i = 1; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }

    function analyze() {
        let num = parseInt(document.getElementById("number").value);
        let output = "";

        output += "<p>Palindrome: " + (isPalindrome(num) ? "Yes" : "No") + "</p>";
        output += "<p>Armstrong: " + (isArmstrong(num) ? "Yes" : "No") + "</p>";
        output += "<p>Prime: " + (isPrime(num) ? "Yes" : "No") + "</p>";
        output += "<p>Factorial: "_ucode point  "=" + factorial(num) + "</p>";

        document.getElementById("result").innerHTML = output;
    }
</script>

</body>
</html>