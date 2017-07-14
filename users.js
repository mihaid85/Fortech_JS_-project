getUsersFromStorage();
if (localStorage.getItem('user_id') === null) {
	localStorage.setItem('user_id', 1)
	var user_id = 1;
} else {
	var user_id = parseInt(localStorage.getItem('user_id'));
}

function User (name) {
	this.id = parseInt(localStorage.getItem('user_id'));
	this.name = name;
	user_id++;
	localStorage.setItem('user_id', user_id);
}

function addUser () {
	var user_name = document.getElementById("user_name").value;
	var user = new User(user_name);
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('users') != null) {
			var users = JSON.parse(localStorage.getItem('users'));
		} else {
			var users = [];
		}
		
		users.push(user);
		
    	localStorage.setItem('users', JSON.stringify(users));
    	var userList = user.id + ": " + user.name;

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(userList));
		document.getElementById("users").appendChild(li);
	} else {
	    listUsers(user);// Sorry! No Web Storage support..
	}
}

function getUsersFromStorage () {
	if (localStorage.getItem('users') != null) {
		var users = JSON.parse(localStorage.getItem('users'));
	    users.forEach( function(user) {
			var userList = "<li>" + user.id + ": " + user.name + "</li>";
			document.getElementById("users").innerHTML += userList;
		});
	}
}

function listUsers(user){
    var userList = "<li>" + user.id + ": " + user.name + "</li>";
	document.getElementById("users").innerHTML += userList;
 }