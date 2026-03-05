<!DOCTYPE html>

<html>
<head>
<title>Bank Account</title>
</head>

<body>

<h2>Bank Account Constructor</h2>

<script>

function BankAccount(name,balance)
{
    this.name = name;
    this.balance = balance;

    this.deposit = function(amount)
    {
        this.balance += amount;
        return this.balance;
    }
}

let account = new BankAccount("Rithvika",10000);

document.write("Balance after deposit: " + account.deposit(2000));

</script>

</body>
</html>

