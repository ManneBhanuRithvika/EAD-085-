<!DOCTYPE html>

<html>
<head>
<title>Tax Calculator</title>
</head>

<body>

<h2>Tax Calculation</h2>

<script>

function taxCalculator(rate)
{
    return function(amount)
    {
        return amount * rate;
    }
}

let gst = taxCalculator(0.18);

document.write("Tax Amount = " + gst(1000));

</script>

</body>
</html>
