<!DOCTYPE html>

<html>
<head>
<title>Salary Calculator</title>
</head>

<body>

<h2>Net Salary Calculation</h2>

<script>

function calculateSalary(basic, hra = 2000, da = 1000)
{
    let netSalary = basic + hra + da;

    document.write("Net Salary = " + netSalary);
}

calculateSalary(20000);

</script>

</body>
</html>
