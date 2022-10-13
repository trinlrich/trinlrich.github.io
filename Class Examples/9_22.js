function getWords() {
    let sentence = document.split_test.elements["inText"].value;
    let words = sentence.split(" ");
    document.split_test.elements["outText"].value = "";
    for (let i = 0; i < words.length; i++) {
        document.split_test.elements["outText"].value += words[i] + "\n";
    }
}

function submitOrder() {
    let items = document.checkboxes.elements;
    let output = "";
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            output += items[i].value + "<br/>"
        }
        document.getElementById("order_summary").innerHTML = output;
    }
}