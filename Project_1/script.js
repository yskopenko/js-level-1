createTopLetters(letters);
createChessTable(positions);
createBottomLetters(letters);
createLeftNumbers();
createRightNumbers()

function createTopLetters(letters) {
    var topLetters = document.createElement("div");
    topLetters.style.display = "flex";
    topLetters.style.textAlign = "center";
    topLetters.style.marginBottom = "10px";
    topLetters.id = "topLetters";
    document.body.appendChild(topLetters);

    for(letter of letters) {
        var letterSpan = document.createElement("span");
        letterSpan.innerText = letter;
        letterSpan.style.display = "block";
        letterSpan.style.width = "52px";
        letterSpan.style.transform = "rotate(180deg)";
        document.getElementById("topLetters").appendChild(letterSpan);
    }
}

function createChessTable(positions) {
    var chessTable = document.createElement("table");
    chessTable.style.borderSpacing = "0px";
    chessTable.style.border = "1px solid black";
    document.body.appendChild(chessTable);

    for(var i = 8; i > 0; i--) {
        var tableRow = document.createElement("tr");
        tableRow.style.height = "50px";
        tableRow.id = "tableRow" + i;
        document.querySelector("table").appendChild(tableRow);

        for(var j = 2; j < 10; j++) {
            var tableDesc = document.createElement("td");
            tableDesc.style.width = "50px";
            tableDesc.style.fontSize = "30px";
            tableDesc.style.textAlign = "center";
            document.getElementById("tableRow" + i).appendChild(tableDesc);

            if((i % 2 !== 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 !== 0)) {
                tableDesc.style.backgroundColor = "black";
            }

            for(pos of positions) {
                if(pos.x == i && pos.y == (j - 2)) {
                    tableDesc.innerHTML = pos.figure;
                }
            }
        }
    }
}

function createBottomLetters(letters) {
    var bottomLetters = document.createElement("div");
    bottomLetters.style.display = "flex";
    bottomLetters.style.textAlign = "center";
    bottomLetters.style.marginTop = "10px";
    bottomLetters.id = "bottomLetters";
    document.body.appendChild(bottomLetters);

    for(letter of letters) {
        var letterSpan = document.createElement("span");
        letterSpan.innerText = letter;
        letterSpan.style.display = "block";
        letterSpan.style.width = "52px";
        document.getElementById("bottomLetters").appendChild(letterSpan);
    }
}

function createLeftNumbers() {
    var leftNumbers = document.createElement("div");
    leftNumbers.style.position = "absolute";
    leftNumbers.style.textAlign = "center";
    leftNumbers.style.top = "147px";
    leftNumbers.style.left = "-25px";
    leftNumbers.id = "leftNumbers";
    document.body.appendChild(leftNumbers);

    for(var i = 8; i > 0; i--) {
        var numberSpan = document.createElement("span");
        numberSpan.innerText = i;
        numberSpan.style.display = "block";
        numberSpan.style.height = "50px";
        document.getElementById("leftNumbers").appendChild(numberSpan);
    }
}

function createRightNumbers() {
    var rightNumbers = document.createElement("div");
    rightNumbers.style.position = "absolute";
    rightNumbers.style.textAlign = "center";
    rightNumbers.style.top = "147px";
    rightNumbers.style.right = "58px";
    rightNumbers.id = "rightNumbers";
    document.body.appendChild(rightNumbers);

    for(var i = 8; i > 0; i--) {
        var numberSpan = document.createElement("span");
        numberSpan.innerText = i;
        numberSpan.style.display = "block";
        numberSpan.style.height = "50px";
        document.getElementById("rightNumbers").appendChild(numberSpan);
    }
}