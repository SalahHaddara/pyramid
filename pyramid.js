var rows = parseInt(prompt("Enter number of rows: "));

for (var i = 0; i < rows; i++) {
    var line = '';
    for (var j = 1; j < 2 * i + 2; j += 2) {
        line += j + ' ';
    }
    console.log(line);
}
