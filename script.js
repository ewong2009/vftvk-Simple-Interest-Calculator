// Compute function validates input and calculates interest when button is clicked
function compute()
{
    var principal = document.getElementById("principal").value;
	// Validate input
	if (principal <= 0){
			alert("Enter a positive number");	
			document.getElementById("principal").focus();
			document.getElementById("result").innerHTML="";
	}
	// If valid, calculate and display results
	else{
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest =(principal * years * rate/100).toFixed(2);
		var year = new Date().getFullYear()+parseInt(years);
		var str = "<br> If you deposit <mark>" + principal + 
		"</mark>,<br> at an interest rate of <mark>" + rate +
		"%</mark>.<br> You will receive an amount of <mark>" + interest +
		"</mark>,<br> in the year <mark>" + year + "</mark><br>";
		document.getElementById("result").innerHTML=str;
	}
}

// Update rate function allows user to see the rate of interest change as the range is moved up and down
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
