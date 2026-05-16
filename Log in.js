function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if(username === storedUsername && password === storedPassword){

        alert("Login Successful!");

        window.location.href = "Quiz Dashboard.html";

    }

    else{

        alert("Invalid Username or Password");

    }

}
