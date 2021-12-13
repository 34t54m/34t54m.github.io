var url_to_redirect = "https://api.thingspeak.com/update?api_key=H0YG1GCY4ZDC9UUX"

function redirector() {
    var msg = document.getElementById("msg").value;
    var time = document.getElementById("time").value;
    var days = document.getElementById("days").value;
    url_to_redirect += "&field7=" + msg + "&field5=" + time + "&field6=" + days;
    document.getElementById("pipa").innerHTML = "<a href=\"" + url_to_redirect + "\">&#9989</a>";
    //document.getElementById("pipa").style.background = "#4CAF50";
    //alert("Ezt küldted:" + url_to_redirect);
}

var i_days = 3;
var i_scale = "";

window.addEventListener('load', onLoad);

function onLoad(event){
    iFrameChanger();
}

function dayModder(){
    i_days = document.getElementById("i_days").value;
    iFrameChanger();
}

function scaleModder(){
    i_scale = document.getElementById("i_scale").value;
    iFrameChanger();
}

function iFrameChanger(){
    document.getElementById("i_NTC").src = "https://thingspeak.com/channels/1498325/charts/2?bgcolor=%23ffffff&color=%23d62020&days=" + i_days + "&dynamic=true&timescale=" + i_scale + "&title=Matrix+Outdoor+Temp+NTC&type=spline";
    document.getElementById("i_DHTtemp").src = "https://thingspeak.com/channels/1498325/charts/3?bgcolor=%23ffffff&color=%23d62020&days=" + i_days + "&dynamic=true&timescale=" + i_scale + "&title=Indoor+Temp+DHT22&type=line";
    document.getElementById("i_DHThum").src = "https://thingspeak.com/channels/1498325/charts/4?bgcolor=%23ffffff&color=%23d62020&days=" + i_days + "&dynamic=true&timescale=" + i_scale + "&title=Indoor+Humidity+DHT22&type=line";
}