<!DOCTYPE html>

<html>
<head>
<title>Employee Payroll</title>
</head>

<body>

<h2>Employee Salary Calculation</h2>

<script>

function Employee(name,basicSalary)
{
    this.name = name;
    this.basicSalary = basicSalary;

    this.calculateSalary = function()
    {
        let hra = 2000;
        let da = 1000;

        return this.basicSalary + hra + da;
    }
}

let emp = new Employee("Ravi",30000);

document.write("Net Salary: " + emp.calculateSalary());

</script>

</body>
</html>
