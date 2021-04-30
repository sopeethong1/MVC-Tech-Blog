const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    async function loginFormHandler(event) {
        event.preventDefault();
      
        const email = document.querySelector('#email-login').value.trim();
        const password = document.querySelector('#password-login').value.trim();
    
      
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
        }
      }
    
      document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
    event.preventDefault();
