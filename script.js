//your JS code here. If required.

let form = document.querySelector('form');
let inputBox = document.getElementById('username');
let passwordBox = document.getElementById('password');
let checkboxField = document.getElementById('checkbox');
let btn = document.getElementById('existing');

form.addEventListener("submit" , (event)=>{
	event.preventDefault();

	username = inputBox.value;
	password = passwordBox.value;
	checkbox = checkboxField.value;

	alert(`Logged in as ${username}`);

	if(chckbox === checkbox){
		let data = {username,password};
		let dataInfo = localStorage.setItem("token",JSON.stringify(data));
	}else{
		localStorage.remove();
	}

	if(locaStorage.getItem('token')){
		btn.style.display='block';
	}

	btn.addEventListener('click',()=>{
		alert(`Logged in as ${username}`);
	})
})