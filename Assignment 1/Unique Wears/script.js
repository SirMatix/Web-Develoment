function goBack() 
{
	window.history.back();
}

function myFunction() {
  var x = document.getElementById("details");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


 $(document).ready(function() {
    $("#toggle").click(function(){
      $("#company").toggle( 'slow')
    });
    $("#toggle2").click(function(){
      $("#person").toggle( 'slow')
        });
    $("#toggle3").click(function(){
      $("#invisible").toggle( 'slow')
        });

 });

//getting current date
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();

//getting current weekday and displaying it		
var d = new Date();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var n = weekday[d.getDay()];
document.getElementById("day").innerHTML = n;