function validateUsername() {
    const firstNameInput = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    const firstName = firstNameInput.value.trim();
     
    if(firstNameInput.value===""){
      firstNameError.textContent="Username should not be empty."
    }
    else if (firstName.length < 2 || firstName.length > 50) {
      firstNameError.textContent = "Username must be 2 to 50 characters long.";
    }
    else if (!/^[A-Za-z]+$/.test(firstName)) {
      firstNameError.textContent = "Username must contain only alphabetic characters.";
    } else if (firstName[0] !== firstName[0].toUpperCase()) {
      firstNameError.textContent = "Username must start with an uppercase letter.";
    } else {
      firstNameError.textContent = "";
    }
  }
  function validateEmail() {
    const emailInput = document.getElementById("Email");
    const emailError = document.getElementById("emailError");
    const email = emailInput.value.trim();
  
    const emailRegex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(emailInput.value===""){
      emailError.textContent="E-mail should not be empty."
    }
    else if (email.length === 0) {
      emailError.textContent = "Email cannot be empty.";
    } else if (email.length > 100) {
      emailError.textContent = "Email is too long.";
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email format.";
    } else if (email.includes("..")) {
      emailError.textContent = "Email cannot contain consecutive dots.";
    } else if (email.indexOf("@") !== email.lastIndexOf("@")) {
      emailError.textContent = "Email can only contain a single '@' symbol.";
    } else {
      emailError.textContent = "";
    }
  }
  function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("passwordError");
    const password = passwordInput.value.trim();
  
    const minLength = 5;
    const maxLength = 25;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
    const specialCharRegex = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/;
    const commonWordsRegex = /^(?!password$)(?!123456$)(?!abcdef$)/;
    const sequentialCharRegex = /^(?!.*[a-zA-Z]{3}).*$/;
    const repeatingCharRegex = /^(?!.*(.)\1{1}).*$/;
    const spaceRegex = /^\S*$/;
  
    let errorMessage = "";
    if(passwordInput.value===""){
      errorMessage="Password should not be empty."
    }
    else if (password.length < minLength || password.length > maxLength) {
      errorMessage = "Password must be between 5 and 25 characters long.";
    } else if (!uppercaseRegex.test(password)) {
      errorMessage = "Password must contain at least one uppercase letter.";
    } else if (!lowercaseRegex.test(password)) {
      errorMessage = "Password must contain at least one lowercase letter.";
    } else if (!numberRegex.test(password)) {
      errorMessage = "Password must contain at least one number.";
    } else if (!specialCharRegex.test(password)) {
      errorMessage = "Password must contain at least one special character.";
    } else if (!commonWordsRegex.test(password)) {
      errorMessage = "Password must not be a common or easily guessable password.";
    } else if (!repeatingCharRegex.test(password)) {
      errorMessage = "Password must not contain repeating characters.";
    } else if (!spaceRegex.test(password)) {
      errorMessage = "Password must not contain spaces.";
    }
  
    passwordError.textContent = errorMessage;
  }
  function validatePassword2() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const passwordMatchMessage = document.getElementById("passwordMatchMessage");
  
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
  
    if (password === confirmPassword && password.length >= 5) {
      passwordMatchMessage.textContent = "Passwords matched";
      passwordMatchMessage.classList.remove("password-not-match");
      passwordMatchMessage.classList.add("password-match");
    } else {
      passwordMatchMessage.textContent = "Passwords do not matched";
      passwordMatchMessage.classList.remove("password-match");
      passwordMatchMessage.classList.add("password-not-match");
    }
  }
  function signUp(){
   
    validateUsername();
    validateEmail();
    validatePassword();
    validatePassword2();
   

  }