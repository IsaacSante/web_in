var i = 0;
function change() {
  var doc = document.getElementById("venncircbtm");
  var color = ["darkgrey", "lightgrey"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);


function checkTime(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('vennleft').innerHTML = h +'&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp' + m;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();


//function newTime() {
//  var today = new Date();
//  var h = today.getHours();
//  var m = today.getMinutes();
//  var s = today.getSeconds();
//  // add a zero in front of numbers<10
//  m = checkTime(m);
//  s = checkTime(s);
//  document.getElementById('vennright').innerHTML = m ;
//  t = setTimeout(function() {
//    startTime()
//  }, 500);
//}
//newTime();