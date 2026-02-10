document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("❌ All fields are required!");
    } 
    else if (password.length < 6) {
        alert("❌ Password must be at least 6 characters!");
    } 
    else {
        alert("✅ Login Successful!\nWelcome " + username);
    }
});
