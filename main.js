//Bài 3: In tam giác vuông
function exercise3_function() {
    let myContainer = document.getElementById("exercise3_container");
    let myTriangle = "";
    let printFirstFlag = 0; // 0: * first ; 1: " " _space first
    let firstChar, secondChar;

    for (printFirstFlag = 0; printFirstFlag <= 1; printFirstFlag++) {
        if (printFirstFlag == 0) {
            firstChar = "*";
            secondChar = `\xa0\xa0`; //nbsp character
        } else {
            firstChar = `\xa0\xa0`; //nbsp character
            secondChar = "*";
        }
        for (let printFirstChar = 1; printFirstChar <= 5; printFirstChar++) {
            for (let i = 1; i <= printFirstChar; i++) {
                myTriangle += firstChar;
            }
            for (let printSecondChar = 5 - printFirstChar; printSecondChar >= 0; printSecondChar--) {
                myTriangle += secondChar;
            }
            myContainer.innerHTML += myTriangle + "<br>";
            console.log(myTriangle);

            myTriangle = "";
        }
        myContainer.innerHTML += "<br>";

        for (let printFirstChar = 5; printFirstChar >= 1; printFirstChar--) {
            for (let i = 1; i <= printFirstChar; i++) {
                myTriangle += firstChar;
            }
            for (let printSecondChar = 5 - printFirstChar; printSecondChar >= 0; printSecondChar--) {
                myTriangle += secondChar;
            }
            myContainer.innerHTML += myTriangle + "<br>";
            console.log(myTriangle);
            myTriangle = "";
        }
        myContainer.innerHTML += "<br>";
    }
}
//Bài 4: In hình chữ nhật rỗng
function exercise4_function() {
    let myRectangle = document.getElementById("exercise4_text");
    let myText = "";
    let myChar = "*";
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 21; j++) {
            myText += myChar;
            if (0 < i && i < 6 && j < 19) {
                myChar = `\xa0\xa0`; //nbsp character
            } else myChar = "*";
        }
        myText += "<br>";
        console.log(myText);
        myRectangle.innerHTML += myText;
        myText = "";
    }
    // myRectangle.innerHTML = myText;
}
//Bài 5: In hình trái tim
function exercise5_function() {
    let myHeart = document.getElementById("exercise5_text");
    let myText = "";

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 15; j++) {
            switch (i) {
                case 0:
                    if (2 < j && j < 6 || 8 < j && j < 12) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                case 3:
                    if (j == 1 || j == 6 || j == 8 || j == 13) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                case 6:
                    if (j == 0 || j == 7 || j == 14) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                case 9:
                    if (j == 1 || j == 13 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                case 12:
                    if (j == 3 || j == 11 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                case 15:
                    if (j == 5 || j == 9 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                case 18:
                    if (j == 7 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    // myText += "<br>"
                    // myHeart.innerHTML += myText;
                    // myText = "";
                    break;
                default:
                    myText += `\xa0\xa0`;
            }
            
        }
        myText += "<br>"
        myHeart.innerHTML += myText;
        myText = "";

    }
    // myHeart.innerHTML = myText;
}
