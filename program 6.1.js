<!DOCTYPE html>

<html>
<head>
<title>Calculator using Callback</title>
</head>

<body>

<h2>Calculator using Callback Function</h2>

<script>

function calculator(a, b, operation)
{
    return operation(a,b);
}

function add(x,y)
{
    return x+y;
}

function multiply(x,y)
{
    return x*y;
}

document.write("Addition: " + calculator(5,3,add) + "<br>");
document.write("Multiplication: " + calculator(5,3,multiply));

</script>

</body>
</html>
