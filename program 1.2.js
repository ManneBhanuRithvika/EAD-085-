<!DOCTYPE html>

<html>
<head>
<title>Palindrome Number</title>
</head>

<body>

<h2>Palindrome Number Check</h2>

<script>

function checkPalindrome(num)
{
    let original = num;
    let reverse = 0;

    while(num > 0)
    {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    if(original == reverse)
        document.write(original + " is a Palindrome Number");
    else
        document.write(original + " is NOT a Palindrome Number");
}

checkPalindrome(121);

</script>

</body>
</html>
