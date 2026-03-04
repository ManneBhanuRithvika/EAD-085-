<!DOCTYPE html>
<html>
<head>
    <title>Employee Payroll System</title>
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
            width: 350px;
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
    <h2>Employee Salary Calculator</h2>

    <input type="text" id="name" placeholder="Employee Name">
    <input type="number" id="basic" placeholder="Basic Salary">
    <button onclick="calculateSalary()">Calculate</button>

    <div id="result"></div>
</div>

<script>
    function Employee(name, basicSalary, hra = 2000, ta = 1000) {
        this.name = name;
        this.basicSalary = basicSalary;
        this.hra = hra;
        this.ta = ta;

        this.calculateNetSalary = function() {
            let grossSalary = this.basicSalary + this.hra + this.ta;
            let tax = grossSalary * 0.10;
            let netSalary = grossSalary - tax;

            return {
                grossSalary: grossSalary,
                tax: tax,
                netSalary: netSalary
            };
        };
    }

    function calculateSalary() {
        let name = document.getElementById("name").value;
        let basic = parseFloat(document.getElementById("basic").value);

        let emp = new Employee(name, basic);
        let salaryDetails = emp.calculateNetSalary();

        let output = "";
        output += "<p>Employee Name: " + name + "</p>";
        output += "<p>Gross Salary: " + salaryDetails.grossSalary + "</p>";
        output += "<p>Tax (10%): " + salaryDetails.tax + "</p>";
        output += "<p>Net Salary: " + salaryDetails.netSalary + "</p>";

        document.getElementById("result").innerHTML = output;
    }
</script>

</body>
</html>