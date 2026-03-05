<!DOCTYPE html>

<html>
<head>
<title>Armstrong Number</title>
</head>

<body>

<h2>Armstrong Number Check</h2>

<script>

function checkArmstrong(num)
{
    let sum = 0;
    let temp = num;

    while(temp > 0)
    {
        let digit = temp % 10;
        sum = sum + digit*digit*digit;
        temp = Math.floor(temp/10);
    }

    if(sum == num)
        document.write(num + " is an Armstrong Number");
    else
        document.write(num + " is NOT an Armstrong Number");
}

checkArmstrong(370);

</script>

</body>
</html>

