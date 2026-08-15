let pasword = "gandu"
let maxAttempt = 0;
let usePassword = null
while (pasword !== usePassword && maxAttempt < 3) {
    usePassword = prompt("Enter the Password")
    if (usePassword === pasword) {
        alert("Loged in password Matched")
    }
    maxAttempt++;
}