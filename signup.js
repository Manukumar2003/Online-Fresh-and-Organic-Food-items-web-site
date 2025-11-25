let myForm = document.querySelector("form");
console.log(myForm);

myForm.onsubmit=(e)=>{
    e.preventDefault();
    console.log("My form is submitted");

    let inputBox = document.querySelectorAll("input");
    console.log(inputBox);
    let formData = {};
    inputBox.forEach((input)=>{
        if(input.type==="radio"){
            if(input.checked===true){
           formData[input.name] = input.value;
            }
        }else{
            formData[input.name] = input.value;
        }

    })
    console.log(formData);

    let jsonObj = JSON.stringify(formData);
    console.log(jsonObj);
    localStorage.setItem("Signup",jsonObj);
    alert("User Registeration Successfully Completed")
    window.location.href="./Login.html";
}