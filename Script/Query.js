
//checking user inputs in form fields 
function verify() {
  let name = document.forms["form"]["name"].value;
  let email = document.forms["form"]["email"].value;
  let query = document.forms["form"]["query"].value;
  //valiadating radio buttons
  var subjects = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < subjects.length; i++) {
    if (subjects[i].checked) {
      txt = txt + subjects[i].value + " ";
    }
  }
  var divbox = document.getElementById("query-box");
  var detailsbox = document.getElementById("details-box");
  
  document.getElementById('inputName').innerHTML = name;
  document.getElementById('inputEmail').innerHTML = email;
  document.getElementById('inputSubject').innerHTML = txt;
  document.getElementById('inputQuery').innerHTML = query;
  
  //validating user name input fields
  if (!(name == "" || name == " ")) {
  	if(!( document.form.email.value == "" )) {
  		if (!( ( form.subject[0].checked == false ) && ( form.subject[1].checked == false ) && ( form.subject[2].checked == false ))) {
  			if (!(document.form.query.value == "")) {
	    		divbox.style.display = "none";
	    		detailsbox.style.display = "block";
	    		return false;
  			} else {
  				alert("Please fill in your query detail!")
  				return false;
	    		}    
	    	} else {
	    		alert ( "Please choose subject of your query!" );
				return false;
	    	}
        } else {
        	alert( "Please provide your Email!" );
            document.form.email.focus() ;
            return false;
        }
    } else {
    	alert("Please enter your name!");
    	return false;
    }
}

//edit button function 
function edit() {
	var divbox = document.getElementById("query-box");
  	var detailsbox = document.getElementById("details-box");

  	divbox.style.display = "block";
	detailsbox.style.display = "none";

	return false;

}
