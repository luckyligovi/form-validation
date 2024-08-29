let nameError = document.getElementById("name-error");
let secondNameError = document.getElementById("Sname-error");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("fname").value;

  if (firstName.length === 0 ) {
    nameError.innerHTML = "name is required";
    
  }

  else if (!firstName.match("[A-Za-z]{3,15}")) {
    nameError.innerHTML = "write your name";
    
  }
  else

  nameError.innerHTML = '';
}

function validateSecondName() {
    let secondName = document.getElementById("lname").value; // Correct input field ID

    if (secondName.length === 0) {
        secondNameError.innerHTML = "Name is required";
    } 
    else if (!secondName.match(/^[A-Za-z]{3,15}$/)) { // Corrected regex pattern
        secondNameError.innerHTML = "Write your name correctly";
    } 
    else {
        secondNameError.innerHTML = "";
    }
}

function validatePhone(){
    let phone = document.getElementById("phone").value

    if(phone.length == 0){
        phoneError.innerHTML = "phone no is required"
    }
    else if (phone.length !== 10) {
        phoneError.innerHTML = "should contain 10 digits"
        return false
    } else if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "only digits please"
    }else
    {
        phoneError.innerHTML = ""  
    }
}


