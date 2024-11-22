const word = [
    "react", 
    "angular", 
    "javascript",
    "bootstrap",
    "tailwind",
    "Shubham",
    "Vaishnavi",
    "Laptop",
    "Bagpack",
    "Mobile",
];
const hints = [
    "JavaScript framework",
    "JavaScript framework",
    "Scripting Language",
    "Styling Library",
    "Styling Library",
    "Name",
    "Name",
    "Device",
    "Thing",
    "Device",
];
let displayword = "";
function shuffle(str) {
    strArray = Array.from(str);
    for(let i = 0; i < strArray.length - 1; i++) {
        let j = Math.floor(Math.random() * strArray.length);

        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join (" ");
}
function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if ( 
        input.value.toLocaleLowerCase() === displayword.toLocaleLowerCase()
    )
    output.innerHTML = "Result: Correct";
    else output.innerHTML = "Result: Incorrect";
}
function refresh() {
    index = Math.floor(Math.random() * 10);
    displayword = word[index];
    displayhint = hints[index];
    scrambleWord = document.getElementById("scrambleWord");
    scrambleWord.innerText = shuffle(displayword).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint: </b>" + displayhint;
    document.getElementById("output").innerText = "Result:";
}
refresh()