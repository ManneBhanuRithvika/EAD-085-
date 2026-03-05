<!DOCTYPE html>

<html>
<head>
<title>Authentication Simulation</title>
</head>

<body>

<h2>Login Authentication</h2>

<script>

function login(username,password,success,failure)
{
    if(username=="admin" && password=="1234")
    {
        success();
    }
    else
    {
        failure();
    }
}

function success()
{
    document.write("Login Successful");
}

function failure()
{
    document.write("Login Failed");
}

login("admin","1234",success,failure);

</script>

</body>
</html>
