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
    console.log(operTable);

    let total = 0;
    let max = Number.NEGATIVE_INFINITY;
    let min = Number.POSITIVE_INFINITY;
    
    document.close();
    document.open();

    // CSS
    document.write("<link href='main.css' type='text/css' rel='stylesheet'>");

    // Header
    document.write("<div class='topnav'> <a href='index.html'>Index</a> <a href='introduction.html'>Introduction</a> <a href='little_prince.html'>Little Prince</a> <a class='active' href='calculator.html'>Calculator</a> </div>");

    // Table One
    document.write("<h1 style='text-align:center'>Here is Your Function Table</h1>")
    document.write("<table border = 1 style='width: 75%; margin: auto; border:black; padding: 20px; text-align: center;>'");
    document.write("<tr><th class = 'functionHeaders'>x</th><th class = 'functionHeaders'>op</th><th class = 'functionHeaders'>y</th><th class = 'functionHeaders'>result</th></tr>");
    for (let i = 0; i<operTable.length; i++) {
        let rowResult = operTable[i].result;
        document.write("<tr><td>");
        document.write(operTable[i].x_value);
        document.write("</td><td class='operCol'>");
        document.write(operTable[i].operation);
        document.write("</td><td>");
        document.write(operTable[i].y_value);
        document.write("</td><td>")
        document.write(rowResult)
        document.write("</td></tr>"); 
        if (!isNaN(rowResult)) {
            total += rowResult
            if (max < rowResult) {
                max = rowResult
            }
            if (min > rowResult) {
                min = rowResult
            }
        } else {
            min = "0"
            max = "0"
        }
    }
    document.write("</table>");

    // Table 2
    document.write("<table border = 1 style='width: 75%; margin: auto; border:black; padding: 20px; text-align: center;>'");
    document.write("<tr><th class = 'functionHeaders'>Min</th><th class = 'functionHeaders'>Max</th><th class = 'functionHeaders'>Average</th><th class = 'functionHeaders'>Total</th></tr>");
    document.write("<tr><td>");
    document.write(min);
    document.write("</td><td>");
    document.write(max);
    document.write("</td><td>");
    document.write(total / operTable.length);
    document.write("</td><td>");
    document.write(total);
    document.write("</td></tr>");
    document.write("</table>"); 

    // Reset Button
    document.write("<button onClick='reset()'>Reset</button>");
}

function reset() {
    // Reset values
    operTable = new Array();

    document.close();
    document.open();

    // CSS
    document.write("<link href='main.css' type='text/css' rel='stylesheet'>");

    // Navigation
    document.write("<div class='topnav'> <a href='index.html'>Index</a> <a href='introduction.html'>Introduction</a> <a href='little_prince.html'>Little Prince</a> <a class='active' href='calculator.html'>Calculator</a> </div>");

    // Header & Button
    document.write("<h1>Welcome to the Calculator!</h1>");
    document.write("<button onClick='collectValues()'>Input Values</button>");
}