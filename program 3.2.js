<!DOCTYPE html>

<html>
<head>
<title>Prime Number Filter</title>
</head>

<body>

<h2>Prime Numbers from Array</h2>

<script>

let isPrime = num =>
{
    if(num < 2) return false;

    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num % i == 0)
        return false;
    }

    return true;
}

let filterPrimes = arr => arr.filter(num => isPrime(num));

let numbers = [2,3,4,5,6,7,8,9,10];

document.write("Prime Numbers: " + filterPrimes(numbers));

</script>

</body>
</html>
