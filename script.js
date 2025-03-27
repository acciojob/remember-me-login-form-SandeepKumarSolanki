// //your JS code here. If required.

// Check if credentials are saved in localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
	// e.preventDefault();
    const existingUserButton = document.getElementById("existing");
    const storedCredentials = localStorage.getItem("credentials");

    if (storedCredentials) {
        // Show "Login as existing user" button if credentials are found
        existingUserButton.style.display = "block";
    }

    // Handle the click on the "Login as existing user" button
    existingUserButton.addEventListener("click", function() {
        const credentials = JSON.parse(localStorage.getItem("credentials"));
        alert(`Logged in as ${credentials.username}`);
    });

    // Handle form submission
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const rememberMe = document.getElementById("checkbox").checked;

        alert(`Logged in as ${username}`);

        if (rememberMe) {
            // Store credentials in localStorage
            const credentials = { username, password };
            localStorage.setItem("credentials", JSON.stringify(credentials));
        } else {
            // Remove credentials from localStorage if "Remember Me" is unchecked
            localStorage.removeItem("credentials");
        }

        // Clear form after submission
        form.reset();

        // Hide the form and show the existing user button if credentials are saved
        if (rememberMe) {
            existingUserButton.style.display = "block";
        }
    });
});


// let form = document.querySelector('form');
// let inputBox = document.getElementById('username');
// let passwordBox = document.getElementById('password');
// let checkboxField = document.getElementById('checkbox');
// let btn = document.getElementById('existing');

// form.addEventListener("submit" , (event)=>{
// 	event.preventDefault();

// 	username = inputBox.value;
// 	password = passwordBox.value;
// 	checkbox = checkboxField.value;

// 	alert(`Logged in as ${username}`);

// 	if(chckbox === checkbox){
// 		let data = {username,password};
// 		let dataInfo = localStorage.setItem("token",JSON.stringify(data));
// 	}else{
// 		localStorage.remove();
// 	}

// 	if(locaStorage.getItem('token')){
// 		btn.style.display='block';
// 	}

// 	btn.addEventListener('click',()=>{
// 		alert(`Logged in as ${username}`);
// 	})
// })