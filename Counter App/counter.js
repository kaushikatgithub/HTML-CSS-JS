let count = document.querySelector(".count");
let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let cnt = 0;

inc.onclick = function(){
    cnt++;
    count.textContent = cnt;
}
dec.onclick = function(){
    cnt--;
    count.textContent = cnt;
}
reset.onclick = function(){
    cnt = 0;
    count.textContent = cnt;
}