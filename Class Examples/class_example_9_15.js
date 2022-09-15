let p_elem = document.getElementById("demo")
p_elem.innerHTML =
    "<strong>Changed text...</strong>"
let divs = document.getElementsByTagName("div")
divs[0].innerHTML = "<p>First div</p>"
divs[0].setAttribute("id", "d1")
console.log(divs[0])

let h_elem = document.getElementById("h1")
h_elem.style.setProperty("color", "red")

document.body.removeChild(p_elem) // same as p_elem.remove()

let p2 = document.createElement("p")
p2.innerHTML = "this is a new paragraph!"
document.body.insertBefore(p2, divs[0])