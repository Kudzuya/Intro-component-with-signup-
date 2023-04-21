document.addEventListener('DOMContentLoaded', () => {
    // Select the button element
    const button = document.querySelector('#submit');
    // Select the error message elements
    const emailErrorMsg = document.querySelector('#email-error-msg');
    const passwordErrorMsg = document.querySelector('#password-error-msg');
    const lastNameErrorMsg = document.querySelector('#last-name-error-msg');
    const firstNameErrorMsg = document.querySelector('#first-name-error-msg');

  
    // Add a click event listener to the button
    button.addEventListener('click', () => {
      // Select the email and password input elements
      const emailInput = document.querySelector('#email');
      const passwordInput = document.querySelector('#password');
      const lastNameInput = document.querySelector('#last-name');
      const firstNameInput = document.querySelector('#first-name');
      // Get the values of the email and password inputs
      const email = emailInput.value;
      const password = passwordInput.value;
      const lastName = lastNameInput.value;
      const firstName = firstNameInput.value;
      // Define regex patterns for valid email and password formats
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Check if the email and password match the regex patterns
      if (emailRegex.test(email)) {
        // Email is valid, hide the email error message
        emailErrorMsg.style.display = 'none';
      } else {
        // Email is invalid, show the email error message
        emailErrorMsg.style.display = 'flex';
      }
  
      if (password === '') {
        // Password is empty, show the password error message
        passwordErrorMsg.style.display = 'flex';
      } else {

          // Password is valid, hide the password error message
          passwordErrorMsg.style.display = 'none';
      }

      if (lastName === '') {
        lastNameErrorMsg.style.display = 'flex';
      } else {       
          lastNameErrorMsg.style.display = 'none';
      }

      if (firstName === '') {
        firstNameErrorMsg.style.display = 'flex';
      } else {
          firstNameErrorMsg.style.display = 'none';
      }

      function toggleError() {
        var errorDiv = document.querySelector('.suqa');
        if (errorDiv.style.display === "none") {
          errorDiv.style.display = "block";
        } else {
          errorDiv.style.display = "none";
        }
      }

    });
  });
  