document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const existingUserButton = document.getElementById("existing");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const rememberMeCheckbox = document.getElementById("checkbox");

  // Check if credentials are saved in localStorage
  const savedCredentials = localStorage.getItem("userCredentials");
  if (savedCredentials) {
    existingUserButton.classList.remove("hidden");
  }

  // Form submission behavior
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();  // Prevent form submission
    
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    alert(`Logged in as ${username}`);

    // If "Remember Me" is checked
    if (rememberMeCheckbox.checked) {
      localStorage.setItem("userCredentials", JSON.stringify({ username, password }));
    } else {
      localStorage.removeItem("userCredentials");
    }
  });

  // Existing User Login Button click behavior
  existingUserButton.addEventListener("click", function () {
    const credentials = JSON.parse(localStorage.getItem("userCredentials"));
    if (credentials) {
      alert(`Logged in as ${credentials.username}`);
    }
  });
});
