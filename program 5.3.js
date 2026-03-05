<!DOCTYPE html>

<html>
<head>
<title>Login Attempt Tracker</title>
</head>

<body>

<h2>Login Attempt Tracker</h2>

<script>

function loginTracker()
{
    let attempts = 0;

    return function()
    {
        attempts++;
        document.write("Login Attempts: " + attempts + "<br>");
    }
}

let track = loginTracker();

track();
track();
track();

</script>

</body>
</html>
