'use strict';
// resgistration form

let formRegistration=document.getElementById('form-registration');


 formRegistration.addEventListener('submit',function(event) {
    event.preventDefault();

    let errors={};
    let form=event.target;


    let usernameField=document.getElementById('fname').value;

    if (usernameField.length<5){
        errors.username='Username must be more then 5characters';
    }

    if (usernameField==''){
        errors.username='username can not be empty';
    }
     let surnameField=document.getElementById('surname').value;
     if(surnameField==''){
      errors.surname='surname can not be empty';
     }

    let password1=document.getElementById('passw1').value;
    let password2=document.getElementById('passw2').value;

    if (password1==''){
      errors.mypassword='Password field can not be empty';
    }

 if (password1 != password2){
    errors.mypassword2='Passwords do not match';
 }
   
 let agree=document.getElementById('agree').checked;
 if (!agree){
    errors.agree='You must agree our terms and conditions';
 }

 let age=false;

 form.querySelectorAll('age').forEach(item => {
    if (item.checked){
        age=true;

 }
 
 });

 if (!age){
    errors.age='Please select your age';
 }
console.log(errors);

form.querySelectorAll('.error-text').forEach(element =>{
   element.innerText='';
});


for (let item in errors){
   // console.log(item);

 
let spanError=document.getElementById('error-' + item);

if (spanError){
   spanError.innerText=errors[item];
}
}
if(Object.keys(errors).length==0){
   alert('form submit');
   form.submit();
}
 });



 

//  show-hide password
let passwordShowHide=document.getElementById('showpassword');
let toggleIcon=document.getElementById('toggleIcon');

toggleIcon.addEventListener('click',function(){
   if (passwordShowHide.type=='password'){
      passwordShowHide.setAttribute('type','text');
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
   }else {
      passwordShowHide.setAttribute('type','password');
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
   }
});

// email validation
let emailField=document.getElementById('myemail');

emailField.addEventListener('keyup',function(){
   let emailValue=document.getElementById('myemail').value;

   let spanErrorText=document.getElementById('emailError');
   let emailPatern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (emailValue.match(emailPatern)){
      spanErrorText.innerText='Your Email Is Valid';
      spanErrorText.style.color='green';

   } else {
      spanErrorText.innerText='Your Email Is Invalid';
      spanErrorText.style.color='red';

   }
   if (emailValue==''){
      spanErrorText.innerText='';
   }
})
 
