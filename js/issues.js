var select = document.getElementById("issue_type");
select.onchange = function(){
   var text = select.options[select.selectedIndex].text;
   if (text === "Task") {
   	document.getElementById("subtask").disabled = false;
   } else {
   	document.getElementById("subtask").disabled = true;
   }
}

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
			var sprintList = sprint.name;

			var option = document.createElement("option");
			option.textContent = sprintList;
			option.value = sprintList;
			select.appendChild(option);
	   });
	}
}

function getStatusOptions () {
	var statusArray = ["New", "In progress", "Feedback", "Rework", "Resolved", "Ready For Testing"]
	var select = document.getElementById("issue_status");
	statusArray.forEach( function(status) {
			var statusList = status;
			var option = document.createElement("option");
			option.textContent = statusList;
			option.value = statusList;
			select.appendChild(option);
		});
}

function getSubtasksOptions () {
	if (localStorage.getItem('issues') != null) {
		var issues = JSON.parse(localStorage.getItem('issues'));
		var select = document.getElementById("subtask");
		issues.forEach( function(issue) {
			var issueList = issue.name;

			var option = document.createElement("option");
			option.textContent = issueList;
			option.value = issueList;
			select.appendChild(option);
		});
	}
}


function Issue (type, name, sprint, created_by, assignee, description, subtask) {
	this.id = parseInt(localStorage.getItem('issue_id'));
	this.type = type;
	this.name = name;
	this.sprint = sprint;
	this.createdBy = created_by;
	this.assignee = assignee;
	this.description = description;
	this.status = "New";
	var date = new Date();
    this.createdAt = date.toLocaleString();;
    
	issue_id++;
	localStorage.setItem('issue_id', issue_id);
}

function addIssue () {
	var type = document.getElementById("issue_type").value;
	var name = document.getElementById("issue_name").value;
	var sprint = document.getElementById("issue_sprint").value;
	var created_by = username;
	var assignee = document.getElementById("issue_assignee").value;
	var description = document.getElementById("issue_description").value;
	
	var issue = new Issue(type, name, sprint, created_by, assignee, description);
	
	
	var sub = document.getElementById("subtask").value;
	localStorage.setItem(sub, name);
	

	if (localStorage.getItem('issues') != null) {
		var issues = JSON.parse(localStorage.getItem('issues'));
	} else {
		var issues = [];
	}
	
	issues.push(issue);
	
	localStorage.setItem('issues', JSON.stringify(issues));
	var issueList = issue.id + ": " + issue.name;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(issueList));
	document.getElementById("issues").appendChild(li);
	
}

function updateIssue (id, type, name, assignee, description, status) {
	var issue = [];
	issue.type = type;
	issue.name = name;
	issue.assignee = assignee;
	issue.description = description;
	issue.status = "New";
	// issue.tasks = tasks;
	var date = new Date();
    issue.createdAt = date.toLocaleString();
	
	localStorage.setItem('issues[id]', issue);
}



function getIssuesFromStorage () {
	if (localStorage.getItem('issues') != null) {
		var issues = JSON.parse(localStorage.getItem('issues'));
		
    	var subtasks = [];
	    issues.forEach( function(issue) {
    	var sub = localStorage.getItem(issue.name);

    	subtasks.push(sub);
		var issueList = "<tr><td>" + issue.id + "</td><td>" + issue.type + "</td><td>"
	    	+ issue.name + "</td><td>" + issue.sprint + "</td><td>" + issue.createdBy + "</td><td>"
	    	+ issue.assignee + "</td><td>" + issue.description + "</td><td>" + issue.status + "</td><td>"
	    	+ subtasks + "</td><td>" + 'issue.comments' + "</td><td>" + 'issue.updated_at' + "</td><td>"
	    	+ issue.createdAt + "</td><td><a href=edit.html?issue_id=" + issue.id + ">Edit</a></td>";
		document.getElementById("issues").innerHTML += issueList;
		});
	}
}

