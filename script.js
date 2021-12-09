var url_to_redirect = "https://api.thingspeak.com/update?api_key=H0YG1GCY4ZDC9UUX"

function redirector() {
    var msg = document.getElementById("msg").value;
    var time = document.getElementById("time").value;
    var days = document.getElementById("days").value;
    url_to_redirect += "&field7=" + msg + "&field5=" + time + "&field6=" + days;
    document.getElementById("pipa").innerHTML = "<a href=\"" + url_to_redirect + "\">&#9989</a>";
    //alert("Ezt küldted:" + url_to_redirect);
}