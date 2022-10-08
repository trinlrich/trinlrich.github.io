function changeColor() {
    let color1 = "rgb(0, 11, 247)";
    let color2 = "rgb(7, 247, 0)";
    let colorBtn = document.getElementById("colorBtn");
    let currentColor = colorBtn.style.color;

    if (currentColor == color1) {
        colorBtn.style.setProperty("color", color2);
        console.log("Change to color2");
    } else {
        colorBtn.style.setProperty("color", color1);
        console.log("Change to color1");
    }
}