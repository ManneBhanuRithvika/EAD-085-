<!DOCTYPE html>

<html>
<head>
<title>Second Largest Number</title>
</head>

<body>

<h2>Second Largest Element in Array</h2>

<script>

let secondLargest = arr =>
{
    arr.sort((a,b)=>b-a);
    return arr[1];
}

let numbers = [10,50,30,20,40];

document.write("Second Largest Number: " + secondLargest(numbers));

</script>

</body>
</html>
