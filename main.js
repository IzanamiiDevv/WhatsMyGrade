//PureJS
function Evaluate() {
    const grade = document.getElementById('textfield').value - 0;
    if (grade >= 101) alert("Invalid Grade");
    if (grade <= 100 && grade >= 98) alert("With Highest Honors");
    if (grade <= 97 && grade >= 95) alert("With High Honors");
    if (grade <= 94 && grade >= 90) alert("With Honors");
    if (grade <= 89 && grade >= 75) alert("Passed");
    if (grade <= 74) alert("Failed");
}