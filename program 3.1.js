<!DOCTYPE html>

<html>
<head>
<title>Average of Array</title>
</head>

<body>

<h2>Average of Array Elements</h2>

<script>

let average = arr =>
{
    let sum = arr.reduce((a,b)=>a+b,0);
    let avg = sum / arr.length;

    document.write("Average = " + avg);
}

average([10,20,30,40,50]);

</script>

</body>
</html>
