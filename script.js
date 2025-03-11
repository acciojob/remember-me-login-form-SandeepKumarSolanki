//your JS code here. If required.

let form = document.querySelector('form');
let userBox = document.getElementById('username');
let passwordBox = document.getElementById('password');
let checkBox = document.getElementById('checkbox');
let btn = document.getElementById('submit');

form.addEventListener("submit" , (events)=>{
	events.preventDefault():
	let username = userBox.value;
	alert(`Logged in as ${username}`)
	let password = passwordBox.value;
	
	if(checkBox.required === false){
		localStorage.remove();
	}
})






