var operTable = new Array();

function collectValues() {
    let x = prompt("Please input a value for x:")
    let oper = prompt("Please input an operator (+, -, *, /, %):")
    let y = prompt("Please input a value for y:")
    const func = {x_value:x, operation:oper, y_value:y, result:getResult(x, oper, y)}
    console.log(func)
    operTable.push(func)
    let yesorno = confirm("Would you like to continue?")

    if (yesorno == true) {
        collectValues()
    } else {
        createTable()
    }
}

function getResult(x, oper, y) {
    if (isNaN(x)) {
        return "Wrong Input Number for x"
    }
    if (isNaN(y)) {
        return "Wrong Input Number for y"
    }
    switch (oper) {
        case "+":
            return parseFloat(x) + parseFloat(y)
        case "-":
            return parseFloat(x) - parseFloat(y)
        case "*":
            return parseFloat(x) * parseFloat(y)
        case "/":
            return parseFloat(x) / parseFloat(y)
        case "%":
            return parseFloat(x) % parseFloat(y)
        default:
            return "Computation Error"
    }
}

function createTable() {
    console.log(operTable)

    let table = document.createElement("table")

    document.write("<h1 style='text-align:center'>Here is Your Function Table</h1>")
    document.write("<table border = 1 style='width: 75%; margin: auto; border:black; padding: 20px; text-align: center;>'");
    document.write("<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>");
    for (let i = 0; i<operTable.length; i++) {
        document.write("<tr><td>");
        document.write(operTable[i].x_value);
        document.write("</td><td>");
        document.write(operTable[i].operation);
        document.write("</td><td>");
        document.write(operTable[i].y_value);
        document.write("</td><td>")
        document.write(operTable[i].result)
        document.write("</td></tr>");
    }
    document.write("</table>"); 
}