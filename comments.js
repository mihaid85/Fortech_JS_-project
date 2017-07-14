//Comment
getCommentsFromStorage();
if (localStorage.getItem('comment_id') === null) {
	localStorage.setItem('comment_id', 1)
	var comment_id = 1;
} else {
	var comment_id = parseInt(localStorage.getItem('comment_id'));
}

function Comment (name)	{
	this.id = parseInt(localStorage.getItem('comment_id'));
	this.name = name;
	comment_id++;
	localStorage.setItem('comment_id', comment_id);
}

function addComment (){
	var comment_name = document.getElementById("comment_name").value;
	var comment = new Comment(comment_name);
	if (typeof(Storage) !== "undefined") {
		if (localStorage.getItem('comments') != null) {
			var comments = JSON.parse(localStorage.getItem('comments'));
		} else {
			var comments = [];
		}
		
		comments.push(comment);
		
    	localStorage.setItem('comments', JSON.stringify(comments));
    	var commentList = comment.id + ": " + comment.name;

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(commentList));
		document.getElementById("comments").appendChild(li);
	} else {
	    listUsers(comment);// Sorry! No Web Storage support..
	}
}

function getCommentsFromStorage () {
	if (localStorage.getItem('comments') != null) {
		var comments = JSON.parse(localStorage.getItem('comments'));
	    comments.forEach( function(comment) {
			var commentList = "<li>" + comment.id + ": " + comment.name + "</li>";
			document.getElementById("comments").innerHTML += commentList;
		});
	}
}

function listComment(comment){
	commentList = "<li>" + comment.id + ": " + comment.name + "</li>";
	document.getElementById("comments").innerHTML += commentList;
 }