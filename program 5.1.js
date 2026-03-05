<!DOCTYPE html>

<html>
<head>
<title>Discount Calculator</title>
</head>

<body>

<h2>Discount Calculator</h2>

<script>

function discountCalculator(discount)
{
    return function(price)
    {
        return price - (price * discount / 100);
    }
}

let discount10 = discountCalculator(10);

document.write("Final Price = " + discount10(1000));

</script>

</body>
</html>
