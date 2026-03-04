<!DOCTYPE html>
<html>
<head>
    <title>String Processor Tool</title>
    <style>
        body {
            font-family: Arial;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .box {
            background: white;
            padding: 25px;
            width: 350px;
            border-radius: 8px;
            box-shadow: 0 0 10px gray;
        }

        textarea, button {
            width: 100%;
            padding: 8px;
            margin: 8px 0;
        }

        button {
            background-color: green;
            color: white;
            border: none;
        }

        #result p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<div class="box">
    <h2>String Processor</h2>
    <textarea id="text" rows="3" placeholder="Enter a sentence"></textarea>
    <button onclick="processString()">Process</button>
    <div id="result"></div>
</div>

<script>
    const reverseString = function(str) {
        return str.split("").reverse().join("");
    };

    const countVowels = (str) => {
        let count = 0;
        let vowels = "aeiouAEIOU";
        for (let char of str) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    };

    const longestWord = function(sentence) {
        let words = sentence.split(" ");
        let longest = "";
        for (let word of words) {
            if (word.length > longest.length) {
                longest = word;
            }
        }
        return longest;
    };

    function processString() {
        let text = document.getElementById("text").value;
        let output = "";

        output += "<p>Reversed: " + reverseString(text) + "</p>";
        output += "<p>Vowel Count: " + countVowels(text) + "</p>";
        output += "<p>Longest Word: " + longestWord(text) + "</p>";
        output += "<p>Uppercase: " + text.toUpperCase() + "</p>";

        document.getElementById("result").innerHTML = output;
    }
</script>

</body>
</html>
