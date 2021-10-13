
let email = document.getElementById("email");
let password = document.querySelector('input[name=password]');
  let confirm = document.querySelector('input[name=confirm]');
// let pw1 = document.getElementById("pswd1");
// let pw2 = document.getElementById("pswd2");
// let form = document.querySelector("form");
// let Check = document.getElementById("check");
function validateInput() {
    var x=document.form.email.value;  
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
   alert("Please enter a valid e-mail address \n atposition:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
   }  
   if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
}
   
     
    // if(!Check.checked){
    // getError(Check, "please accept the condition");
    // }else{
    // getSuccess(Check)
    // }
    console.log(pw1);
    console.log(pw2);
    
//     if(pw1 != pw2)
//   {	
//   	alert("Passwords did not match");
    
//   } else {
//   	alert("Password created successfully");
//   }

  
    // if (firstName.value.trim() === "") {
    //     getError(firstName, " enter firstName");
    // } else {
    //     getSuccess(firstName);
    // }
    // if (secondName.value.trim() === "") {
    //     getError(secondName, "enter secondName");
    // } else {
    //     getSuccess(secondName);
    // }
    // if (password.value.trim() === "") {
    //     getError(password, "enter password");
    // } else {
    //     getSuccess(password);
    // }
    // if (confirmPassword.value.trim() === "") {
    //     getError(confirmPassword, "re-type password");
    // } else {
    //     if (password.value.trim() !== confirmPassword.value.trim()) {
    //         getError(confirmPassword, " password and re-typed password not match");
    //     } else {
    //         getSuccess(confirmPassword);
    //     }
    // }


document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    validateInput();
})
function getSuccess(input) {
    let parentEle = input.parentElement;
    let messageElement = parentEle.querySelector("small");
    messageElement.style.visibility = "hidden";
    messageElement.innerText = "";
    parentEle.classList.add("success");
    parentEle.classList.remove("error");
}
function getError(input, message) {
    let parentEle = input.parentElement;
    let messageElement = parentEle.querySelector("small");
    messageElement.style.visibility = "visible";
    messageElement.innerText = message;
    parentEle.classList.remove("success");
    parentEle.classList.add("error");
}
function emailValidation(email) {
    let check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return check.test(String(email).toUpperCase());
}

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }


function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form.text.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form.text.focus();
return false;
}
}

// function validateemail()  
// {  
// var x=document.form.email.value;  
//  var atposition=x.indexOf("@");  
//  var dotposition=x.lastIndexOf(".");  
//  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
//   alert("Please enter a valid e-mail address \n atposition:"+atposition+"\n dotposition:"+dotposition);  
//   return false;  
//   }  
// }


// function matchpass(){
//     var firstpassword=document.form.password.value;
//     var secondpassword=document.form.password2.value;
    
//     if(firstpassword==secondpassword){
//     return true;
//     }
//     else{
//     alert("password must be same!");
//     return false;
//     }
//     }



// function CheckPassword(inputtxt) 
// { 
// var password=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
// if(inputtxt.value.match(password)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }

//  }  