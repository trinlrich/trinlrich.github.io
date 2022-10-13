function getInput() {
    let fn = document.name.first_name.value;
    let ln = document.name.last_name.value;
    document.getElementById("output").innerHTML = "Hello! " + fn + " " + ln;

    console.log(document.name.elements);
}

function sumIntegers() {
    let f_int = parseInt(document.sum_form.elements["first_int"].value);
    let s_int = parseInt(document.sum_form.elements["second_int"].value);
    document.sum_form.elements["sum"].value = f_int + s_int;
}