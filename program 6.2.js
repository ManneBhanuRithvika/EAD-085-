<!DOCTYPE html>

<html>
<head>
<title>Array Processor</title>
</head>

<body>

<h2>Array Processor using Callback</h2>

<script>

function processArray(arr, callback)
{
    return arr.map(callback);
}

let numbers = [1,2,3,4,5];

let result = processArray(numbers, function(x)
{
    return x*2;
});

document.write("Processed Array: " + result);

</script>

</body>
</html>
