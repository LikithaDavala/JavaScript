let wordOfA = "";
let wordOfB = "";
let wordOfC = "";
let wordOfOthers = "";

function StartsWithWord() {
    debugger;
    let word = document.getElementById("txtWord").value.toLowerCase();
    if (word.startsWith("a")) {
        if (wordOfA === "") {
            wordOfA = wordOfA + "";
        } else {
            wordOfA = wordOfA + ",";
        }
        wordOfA = wordOfA + word;
        document.getElementById("pArrangeA").innerHTML = wordOfA;
        document.getElementById("txtWord").value = "";
    }

    else if (word.startsWith("b")) {
        if (wordOfB === "") {
            wordOfB = wordOfB + "";
        } else {
            wordOfB = wordOfB + ",";
        }
        wordOfB = wordOfB + word;
        document.getElementById("pArrangeB").innerHTML = wordOfB;
        document.getElementById("txtWord").value = "";
    }


   else if (word.startsWith("c")) {
        if (wordOfC === "") {
            wordOfC = wordOfC + "";
        } else {
            wordOfC = wordOfC + ",";
        }
        wordOfC = wordOfC + word;
            document.getElementById("pArrangeC").innerHTML = wordOfC;
    document.getElementById("txtWord").value = "";
    }


    else  {
        if (wordOfOthers === "") {
            wordOfOthers = wordOfOthers + "";
        } else {
            wordOfOthers = wordOfOthers + ",";
        }
        wordOfOthers = wordOfOthers + word;
    }
    document.getElementById("pArrangeOthers").innerHTML = wordOfOthers;
    document.getElementById("txtWord").value = "";
}