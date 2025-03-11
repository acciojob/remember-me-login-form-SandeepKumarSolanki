//your JS code here. If required.

document.addEventListener("DOMContentLoaded" , function () {
	const submitButton = document.getElementById('submit');
	const existingUserButton = document.getElementById('existing')
	const userInput = document.getElementById('username');
	const passwordInput = document.getElementById('password');
	const rememberMeCheckbox = document.getElementById('checkbox');

	const savedCredentials = localStorage.getItem('userCredentials');
	if(savedCredentials){
		existingUserButton.classList.remove("hidden");
	}

	submitButton.addEventListener("click" , (event)=> {
		
		event.preventDefault();
		const username = userInput.value;
		const password = passwordInput.value;

		alert(`Logged in as ${username}`);

		if(rememberMeCheckbox.checked){
			localStorage.setItem("userCredentials" , JSON.stringigy({username , password}))
		}else{
			localStorage.remove("userCredentials");
		}

		
	})

	existingUserButton.addEventListener("click" , ()=> {
		const credentials = JSON.parse(localStorage.getItem("userCredentials"));
		if(credentials){
			alert(`Logged in as ${credentials.username`);
		}
	})
})




