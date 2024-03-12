console.log("Hello World");

let txtUsername = document.querySelector("#Username");
let txtPassword = document.querySelector("#Password");
let txtConfirmPassword = document.querySelector("#ConfirmPassword");
let btnRegister = document.querySelector("#Register");


btnRegister.onclick = function () 
{
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value);
}

function register (username, password, confirmPassword) 
{
    console.log(username, password, confirmPassword);

    if (username.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") 
    {
        console.log("Please fill in all the fields.");
        return;
    }
    if (password === confirmPassword)
    {
        console.log("Success!");
    } 
    else 
    {
        console.log("Password does not match!");
    }
}
