<!DOCTYPE html>
<html>
<head>
    <title>Smart Login Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px gray;
            width: 300px;
        }

        input {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
        }

        button {
            width: 100%;
            padding: 10px;
            background-color: #φος4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:disabled {
            background-color: gray;
        }

        .error {
            color: red;
            font-size: 14px;
        }

        .success {
            color: green;
            font-size: 14px;
        }

        @media (max-width: 500px) {
            .login-box {
                width: 90%;
            }
        }
    </style>
</head>
<body>

<div class="login-box">
    <h2>Login</h2>
    <input type="text" id="username" placeholder="Enter Username">
    <input type="password" id="password" placeholder="Enter Password">
    <button id="loginBtn">Login</button>
    <p id="message"></p>
</div>

<script>
    function createLoginTracker() {
        let attempts = 0;

        return function(username, password) {
            const message = document.getElementById("message");
            const loginBtn = document.getElementById("loginBtn");

            if (username === "") {
                message.innerHTML = "Username cannot be empty";
                message.className = "error";
                return;
            }

            if (password.length < 6) {
                message.innerHTML = "Password must be at least 6 characters";
                message.className = "error";
                return;
            }

            if (username === "admin" && password === "123456") {
                message.innerHTML = "Login Successful";
                message.className = "success";
                attempts = 0;
            } else {
                attempts++;
                message.innerHTML = "Invalid Credentials. Attempts left: " + (3 - attempts);
                message.className = "error";

                if (attempts >= 3) {
                    message.innerHTML = "Account Locked! 3 Attempts Failed.";
                    loginBtn.disabled = true;
                }
            }
        };
    }

    const loginTracker = createLoginTracker();

    document.getElementById("loginBtn").addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        loginTracker(username, password);
    });
</script>

</body>
</html>