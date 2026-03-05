<!DOCTYPE html>

<html>
<head>
<title>Longest Word</title>
</head>

<body>

<h2>Longest Word Finder</h2>

<script>

let longestWord = function(sentence)
{
    let words = sentence.split(" ");
    let longest = "";

    for(let word of words)
    {
        if(word.length > longest.length)
        {
            longest = word;
        }
    }

    document.write("Longest word is: " + longest);
}

longestWord("JavaScript is a powerful programming language");

</script>

</body>
</html>
