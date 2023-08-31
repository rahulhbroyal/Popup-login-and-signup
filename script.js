document.addEventListener('DOMContentLoaded', function () {
  const openPopupButton = document.getElementById('openPopupButton');
  const closePopupButton = document.getElementById('closePopupButton');
  const popup = document.getElementById('popup');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const switchToLogin = document.getElementById('switchToLogin');
  const switchToSignup = document.getElementById('switchToSignup');
  const signupPassword = document.getElementById('signupPassword');
  const signupConfirmPassword = document.getElementById('signupConfirmPassword');
  const passwordError = document.getElementById('passwordError');
  const passwordVisibilityToggle = document.getElementById('passwordVisibilityToggle');
  const confirmPasswordVisibilityToggle = document.getElementById('confirmPasswordVisibilityToggle');
  const loginvisibilty = document.getElementById('loginvisibilty');
  const passwordLengthError = document.getElementById('passwordLengthError');

  


  openPopupButton.addEventListener('click', function () {
    popup.style.display = 'block';
    loginForm.style.display = 'block';
  });

  closePopupButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });

  switchToLogin.addEventListener('click', function () {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  switchToSignup.addEventListener('click', function () {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });
  
   /*password error*/
  function showPasswordError(message) {
    passwordError.textContent = message;
    passwordError.style.display = 'block';
  }
  
  function hidePasswordError() {
    passwordError.style.display = 'none';
  }

  const mobilePattern = /^[0-9]{10}$/;

  function validateMobile(mobile) {
    return mobilePattern.test(mobile);
  }

  signupForm.addEventListener('submit', function (event) {
    hidePasswordError();
    const signupPassword = document.getElementById('signupPassword');
    const confirmSignupPassword = document.getElementById('confirmSignupPassword');
    const phoneNumber = signupPhoneNumber.value; 

    if (signupPassword.value !== confirmSignupPassword.value) {
      event.preventDefault();
      showPasswordError("Passwords don't match");
    }

    if (signupPassword.value.length <= 8) {
      event.preventDefault();
      passwordLengthError.style.display = 'block';
    }

    if (!validateMobile(phoneNumber)) {
      event.preventDefault(); 
      alert("Please enter a valid 10-digit mobile number.");
    }
  });


   /*password visibility*/
   passwordVisibilityToggle.addEventListener('click', function () {
    const passwordInput = document.getElementById('signupPassword');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordVisibilityToggle.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      passwordVisibilityToggle.textContent = '👁️‍🗨️';
    }
  });

  /*Confirmpassword visibility*/
  confirmPasswordVisibilityToggle.addEventListener('click', function () {
    const passwordInput = document.getElementById('confirmSignupPassword');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      confirmPasswordVisibilityToggle.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      confirmPasswordVisibilityToggle.textContent = '👁️‍🗨️';
    }
  });

  loginvisibilty.addEventListener('click', function () {
    const passwordInput = document.getElementById('loginPassword');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      loginvisibilty.textContent = '👁️';
    } else {
      passwordInput.type = 'password';
      loginvisibilty.textContent = '👁️‍🗨️';
    }
  });
 
});
