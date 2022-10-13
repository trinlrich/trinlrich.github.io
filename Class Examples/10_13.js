// Click Events
function reportEvent() {
    let rep = document.getElementById("rep");
    rep.innerHTML += "Event <br/>"
}

// Mouse Events
let a = 0, b = 0, c = 0, d = 0
function mouseOverEvent() {
    let span = document.getElementById("span1");
    span.innerHTML = ++a
}
function mouseEnterEvent() {
    let span = document.getElementById("span2");
    span.innerHTML = ++b
}
function mouseLeaveEvent() {
    let span = document.getElementById("span3");
    span.innerHTML = ++c
}
function mouseOutEvent() {
    let span = document.getElementById("span4");
    span.innerHTML = ++d
}

// Register Handler
function makeRed() { //Can't pass ref in
    this.style.color = "red";
}
function registerRed() {
    let elt = document.getElementById("p");
    elt.onclick = makeRed;
}
function removeRed() {
    let elt = document.getElementById("p");
    elt.onclick = null;
    elt.style.color = "black";
}

// Event Handler
function foo(e) {
    let sh = document.getElementById("show");
    sh.innerHTML = "Echoing " + e.target.innerHTML;
    console.log(e);
}