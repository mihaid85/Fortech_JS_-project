//Sprint
// getSprintsFromStorage();
if (localStorage.getItem('sprint_id') === null) {
	localStorage.setItem('sprint_id', 1)
	var sprint_id = 1;
} else {
	var sprint_id = parseInt(localStorage.getItem('sprint_id'));
}

function Sprint (name) {
	this.id = parseInt(localStorage.getItem('sprint_id'));
	this.name = name;
	sprint_id++;
	localStorage.setItem('sprint_id', sprint_id);
}

function addSprint () {
	var sprint_name = document.getElementById("sprint_name").value;
	var sprint = new Sprint(sprint_name);
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('sprints') != null) {
			var sprints = JSON.parse(localStorage.getItem('sprints'));
		} else {
			var sprints = [];
		}
		
		sprints.push(sprint);
		
    	localStorage.setItem('sprints', JSON.stringify(sprints));
    	var sprintList = sprint.id + ": " + sprint.name;

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(sprintList));
		document.getElementById("sprints").appendChild(li);
	} else {
	    listSprints(sprint);// Sorry! No Web Storage support..
	}
}

function getSprintsFromStorage () {
	if (localStorage.getItem('sprints') != null) {
		var sprints = JSON.parse(localStorage.getItem('sprints'));
	    sprints.forEach( function(sprint) {
			var sprintList = "<li>" + sprint.id + ": " + sprint.name + "</li>";
			document.getElementById("sprints").innerHTML += sprintList;
		});
	}
}

function listSprints(sprint){
	sprintList = "<li>" + sprint.id + ": " + sprint.name + "</li>";
	document.getElementById("sprints").innerHTML += sprintList;
 }