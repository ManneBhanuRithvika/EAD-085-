<!DOCTYPE html>

<html>
<head>
<title>Factorial Program</title>
</head>

<body>

<h2>Factorial of a Number</h2>

<script>

function factorial(n)
{
    let fact = 1;

    for(let i=1;i<=n;i++)
    {
        fact = fact * i;
    }

    document.write("Factorial of " + n + " is " + fact);
}

factorial(5);

</script>

</body>
</html>
