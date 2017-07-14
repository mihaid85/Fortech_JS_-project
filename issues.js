//Issues de modificat !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// getUsersFromStorage();
getSprintOptions();
getUserOptions();
getAssigneeOptions();
getStatusOptions();
if (localStorage.getItem('issue_id') === null) {
	localStorage.setItem('issue_id', 1)
	var issue_id = 1;
} else {
	var issue_id = parseInt(localStorage.getItem('issue_id'));
}

function getSprintOptions () {
	if (localStorage.getItem('sprints') != null) {
		var sprints = JSON.parse(localStorage.getItem('sprints'));
		var select = document.getElementById("issue_sprint");
		sprints.forEach( function(sprint) {
		var sprintList = sprint.id + ": " + sprint.name;

		var option = document.createElement("option");
		option.textContent = sprintList;
		option.value = sprintList;
		select.appendChild(option);
	   });
	}
}

function getUserOptions () {
	if (localStorage.getItem('users') != null) {
		var users = JSON.parse(localStorage.getItem('users'));
		var select = document.getElementById("issue_user");
		users.forEach( function(user) {
			var userList = user.id + ": " + user.name;

			var option = document.createElement("option");
			option.textContent = userList;
			option.value = userList;
			select.appendChild(option);
		});
	}
}

function getAssigneeOptions () {
	if (localStorage.getItem('users') != null) {
		var users = JSON.parse(localStorage.getItem('users'));
		var select = document.getElementById("issue_assignee");
		users.forEach( function(user) {
			var userList = user.id + ": " + user.name;

			var option = document.createElement("option");
			option.textContent = userList;
			option.value = userList;
			select.appendChild(option);
		});
	}
}

function getStatusOptions () {
	var statusArray = ["New", "In progress", "Done"]
	var select = document.getElementById("status");
	statusArray.forEach( function(status) {
			var statusList = status;
			var option = document.createElement("option");
			option.textContent = statusList;
			option.value = statusList;
			select.appendChild(option);
		});
}

function getTasksOptions () {
	// body... 
}


function Issue (type, name, sprint, created_by, assignee, description, tasks) {
	this.id = parseInt(localStorage.getItem('issue_id'));
	this.type = type;
	this.name = name;
	this.sprint = sprint;
	this.createdBy = 
	issue_id++;
	localStorage.setItem('issue_id', issue_id);
}

function addIssue () {
	var name = document.getElementById("issue").value;
	var sprint = new Sprint(name);
	Project.sprints.push(sprint.id); //add sprint ids in project table
	listSprint(sprint);
}