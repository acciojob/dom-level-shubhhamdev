//your JS code here. If required.
let element = document.getElementById("level");
let list = document.querySelectorAll("ul li");
let level = Array.from(list).indexOf(element)+1;

alert(level);
