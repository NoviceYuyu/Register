console.log("Hello World");

let txtUsername = document.querySelector("#Username");
let txtPassword = document.querySelector("#Password");
let txtConfirmPassword = document.querySelector("#ConfirmPassword");
let btnRegister = document.querySelector("#Register");


Register.onclick = function () 
{
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value)
}

function register (username, password, confirmPassword) 
{
    console.log(username, password, confirmPassword)
    
    if(password == confirmPassword)
    {
       return console.log("Success!")
    } 
    
    else if ( password == "" || confirmPassword == "")
    {
        return console.log("Password field cannot be empty.")
    }

    else 
    {
      return console.log("Password does not match!")
    }
}