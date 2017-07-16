var select = document.getElementById("issue_user");
select.onchange = function(){
   var value =  select.options[select.selectedIndex].value; // to get Value
   var text =  select.options[select.selectedIndex].text; // to get Text
}
function login () {
	var value =  select.options[select.selectedIndex].value; // to get Value
   var text =  select.options[select.selectedIndex].text; // to get Text
	window.location='home.html?id=' + value + '&name=' + text;
}

