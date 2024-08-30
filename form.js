let nameError = document.getElementById("name-error");
let secondNameError = document.getElementById("Sname-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");
let passwordError = document.getElementById("password-error");
let confirmPasswordError = document.getElementById("confirm-password-error");

function validateName() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("fname").value;

  if (firstName.length === 0) {
    nameError.innerHTML = "name is required";
  } else if (!firstName.match("[A-Za-z]{3,15}")) {
    nameError.innerHTML = "Write your name correctly";
  } else nameError.innerHTML = "";
}

function validateSecondName() {
  let secondName = document.getElementById("lname").value; 

  if (secondName.length === 0) {
    secondNameError.innerHTML = "Name is required";
  } else if (!secondName.match(/^[A-Za-z]{3,15}$/)) {
    // Corrected regex pattern
    secondNameError.innerHTML = "Write your name correctly";
  } else {
    secondNameError.innerHTML = "";
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "phone no is required";
  } else if (phone.length !== 10) {
    phoneError.innerHTML = "should contain 10 digits";
    return false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "only digits please";
  } else {
    phoneError.innerHTML = "";
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerHTML = "email is required";
  } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerHTML = "invalid email";
  } else {
    emailError.innerHTML = "";
  }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    // Password validation criteria
    let minLength = /.{8,}/; // At least 8 characters
    let uppercase = /[A-Z]/; // At least one uppercase letter
    let lowercase = /[a-z]/; // At least one lowercase letter
    let number = /[0-9]/; // At least one number
    let specialChar = /[!@#$%^&*(),.?":{}|<>]/; // At least one special character

    if (password.length === 0) {
        passwordError.innerHTML = "Password is required";
    } 
    else if (!password.match(minLength)) {
        passwordError.innerHTML = "Password must be at least 8 characters long";
    } 
    else if (!password.match(uppercase)) {
        passwordError.innerHTML = "Password must contain at least one uppercase letter";
    } 
    else if (!password.match(lowercase)) {
        passwordError.innerHTML = "Password must contain at least one lowercase letter";
    } 
    else if (!password.match(number)) {
        passwordError.innerHTML = "Password must contain at least one number";
    } 
    else if (!password.match(specialChar)) {
        passwordError.innerHTML = "Password must contain at least one special character";
    } 
    else {
        passwordError.innerHTML = ""; 
    }

    // Confirm Password Check
    if (confirmPassword.length === 0) {
        confirmPasswordError.innerHTML = "Please confirm your password";
    } 
    else if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
    } 
    else {
        confirmPasswordError.innerHTML = ""; 
    }
}

function validateForm(){
    if (!validateName() || !validateSecondName() || !validatePhone() || !validateEmail() ||validatePassword()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Fix the errors to submit"
        setTimeout(function(){submitError.style.display = "none"},3000)
    }
}


