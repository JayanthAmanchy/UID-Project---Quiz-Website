function login(){

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    
    // Demo credentials

    if(username === "admin" && password === "1234"){

        alert("Login Successful !");

        window.location.href = "Quiz Dashboard.html";
    }
    
    else{

        alert("Invalid Username or Password");

    }

}