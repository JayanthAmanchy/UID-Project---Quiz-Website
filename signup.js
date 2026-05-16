function showMessage(event) {

    event.preventDefault();

    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    document.getElementById("signup").innerHTML = `

        <h2>Sign Up Successful!</h2>
        <p>Welcome ${firstname}</p>

        <button onclick="goToLogin()">
            Go To Login
        </button>

    `;
    
}

function goToLogin() {
    window.location.href = "Log in.html";
}
