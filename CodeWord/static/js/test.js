// On button click, first derive button identifier, then display button text in
// correct location and change button color.
function buttonFunc(buttonId) {
    var buttonVal = buttonId.replace('button', '');
    if (buttonVal === "BLANK" || buttonVal === "DEL" || buttonVal === "ENTER") {
        return;
    } else if (isNaN(buttonVal)) {
        document.getElementById("ansIdx0").innerHTML = buttonVal;
    } else {
        document.getElementById("numIdx00").innerHTML = buttonVal;
    }
    document.getElementById(buttonId).style.backgroundColor = 'Green';
}
