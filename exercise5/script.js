var words = document.getElementById("words");



function sizeFunction(){
	var checkSize= document.getElementById("size").value;
	words.style.fontSize = checkSize + "px";

}


function fontFunction(){
    var font = document.getElementById("myFonts").value;
    words.style.fontFamily = font;
}


function myFunction1() {
  document.getElementById("whole").style.background = "salmon";
}


function myFunction2() {
  document.getElementById("whole").style.background = "turquoise";
}
