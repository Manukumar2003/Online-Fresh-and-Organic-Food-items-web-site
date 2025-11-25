let Myform = document.querySelector('form')
console.log(Myform);

Myform.onsubmit=(e)=>{
    e.preventDefault();
    console.log("My form is submitted")

let input = document.querySelectorAll("input");
console.log(input);

let Email = input[0].value;
let password = input[1].value;
    console.log(Email,password);

let storedData = localStorage.getItem("Signup");
console.log(storedData);

if(storedData){
    storedData = JSON.parse(storedData);
    if(Email===storedData.Email && password===storedData.password){
        alert("Login Successful");
        window.location.href="./HomeAfterLogin.html"
    }else{
        alert("Invalid Username or Password")
    }
}
}
