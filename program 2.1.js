<!DOCTYPE html>

<html>
<head>
<title>Reverse String</title>
</head>

<body>

<h2>Reverse a String</h2>

<script>

let reverseString = function(str)
{
    let reversed = "";

    for(let i=str.length-1;i>=0;i--)
    {
        reversed += str[i];
    }

    document.write("Reversed String: " + reversed);
}

reverseString("JavaScript");

</script>

</body>
</html>
