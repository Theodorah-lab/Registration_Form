document.getElementById('registrationForm').addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent form submission
        
          // Clear previous error messages
          clearErrors();
        
          // Get form field values
          var name = document.getElementById('name').value.trim();
          var email = document.getElementById('email').value.trim();
          var password = document.getElementById('password').value;
          var confirmPassword = document.getElementById('confirmPassword').value;
          var terms = document.getElementById('terms').checked;
        
          // Validate name
          if (name === '') {
            displayError('name', 'Name is required.');
          } else if (!/^[a-zA-Z]+$/.test(name)) {
            displayError('name', 'Name should only contain alphabet characters.');
          }
        
          // Validate email
          if (email === '') {
            displayError('email', 'Email is required.');
          } else if (!/\S+@\S+\.\S+/.test(email)) {
            displayError('email', 'Invalid email format.');
          }
        
          // Validate password
          if (password === '') {
            displayError('password', 'Password is required.');
          } else if (password.length < 8) {
            displayError('password', 'Password should be at least 8 characters long.');
          } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
            displayError('password', 'Password should contain at least one lowercase, one uppercase, one number, and one special character.');
          }
        
          // Validate confirm password
          if (confirmPassword === '') {
            displayError('confirmPassword', 'Confirm password is required.');
          } else if (confirmPassword !== password) {
            displayError('confirmPassword', 'Passwords do not match.');
          }
        
          // Validate terms agreement
          if (!terms) {
            displayError('terms', 'You must agree to the terms and conditions.');
          }
        
          // If there are no errors, display success message and redirect to a new page
          if (!hasErrors()) {
            // Display success message
            displaySuccessMessage();
        
            // Clear form and redirect to a new page
            clearForm();
            redirectToNewPage();
          }
        });
        
        // Function to display an error message for a field
        function displayError(fieldId, errorMessage) {
          var errorElement = document.getElementById(fieldId + 'Error');
          errorElement.innerText = errorMessage;
        }
        
        // Function to clear all error messages
        function clearErrors() {
          var errorElements = document.querySelectorAll('.text-danger');
          errorElements.forEach(function(errorElement) {
            errorElement.innerText = '';
          });
        }
        
        // Function to check if any error messages are displayed
        function hasErrors() {
          var errorElements = document.querySelectorAll('.text-danger');
          var hasError = false;
          errorElements.forEach(function(errorElement) {
            if (errorElement.innerText !== '') {
              hasError = true;
            }
          });
          return hasError;
        }
        
        function displaySuccessMessage() {
          alert('Successfully Registered \u2714\u{1F60A}');
          window.location.href = 'https://melsoftacademy.com/apply-now/';
        }
        
        // Function to clear the form
        function clearForm() {
          document.getElementById('registrationForm').reset();
        }