<!DOCTYPE html>

<html>
<head>
<title>Count Vowels</title>
</head>

<body>

<h2>Count Vowels</h2>

<script>

let countVowels = function(str)
{
    let count = 0;

    for(let i=0;i<str.length;i++)
    {
        if("aeiouAEIOU".includes(str[i]))
        {
            count++;
        }
    }

    document.write("Number of vowels: " + count);
}

countVowels("JavaScript Programming");

</script>

</body>
</html>
