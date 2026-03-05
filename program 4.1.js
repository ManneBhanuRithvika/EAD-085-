<!DOCTYPE html>

<html>
<head>
<title>Simple Interest</title>
</head>

<body>

<h2>Simple Interest Calculator</h2>

<script>

function simpleInterest(p, t, r = 5)
{
    let si = (p * t * r) / 100;

    document.write("Simple Interest = " + si);
}

simpleInterest(1000,2);

</script>

</body>
</html>
