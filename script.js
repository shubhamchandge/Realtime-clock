
function realtime(){
  
    var time =new Date().toLocaleTimeString();

    document.getElementById("time").innerHTML= time;
}
 var t = setInterval(realtime,1000);