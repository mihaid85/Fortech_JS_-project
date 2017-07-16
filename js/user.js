var user = document.getElementById("logged_in");

var urlParams = new URLSearchParams(window.location.search);
var user_id = urlParams.get('id');
var username = urlParams.get('name');

var name_span = document.createElement("span");
name_span.appendChild(document.createTextNode(username));
document.getElementById("welcome").appendChild(name_span);


function getUserOptions () {
	var users = [{id: 1, name: "Mihai"}, {id: 2, name: "Dan"}];
	var select = document.getElementById("issue_assignee");
	users.forEach( function(user) {
		var userList = user.name;

		var option = document.createElement("option");
		option.textContent = userList;
		option.value = userList;
		select.appendChild(option);
	});
}
