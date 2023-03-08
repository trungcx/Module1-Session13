//Bài 1-6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên
function exercise1_no6_function(){
    let myResult = document.getElementById("exercise1_no6_text");
    let integerNumber = 1;
    let integerNumberSum = 0;
    let sevenDivisibleCount = 0;
    while(sevenDivisibleCount < 30){
        if(integerNumber%7 == 0){
            integerNumberSum += integerNumber;
            ++sevenDivisibleCount;
        }
        ++integerNumber;
    }
    myResult.innerHTML = integerNumberSum;
}

//Bài 1-4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5
function exercise1_no4_function(){
    let myResult = document.getElementById("exercise1_no4_text");
    let firstNumber = 0;
    let secondNumber = 1;
    let fibNumber = 0;
    while(1){
        fibNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = fibNumber;
        if(fibNumber % 5 == 0 && fibNumber != 0){
            break;
        }
    }
    myResult.innerHTML = fibNumber;
}
//Bài 1-3 và 1-5: Hiển thị ra 20 số đầu tiên trong dãy fibonacci
// và Tổng 20 số đó
function exercise1_no3_function(){
    let myResult = document.getElementById("exercise1_no3_text");
    let firstNumber = 0;
    let secondNumber = 1;
    let fibNumber = 0;
    let myText = `${firstNumber}, ${secondNumber}, `;
    let fibCount = 0;
    let fibSum = firstNumber + secondNumber;
    while(fibCount < 20-2){
        fibNumber = firstNumber + secondNumber;
        fibSum += fibNumber;

        firstNumber = secondNumber;
        secondNumber = fibNumber;

        myText += `${fibNumber}, `
        fibCount++;
    }
    myResult.innerHTML = myText + "<br>" + "Tổng 20 số fib đầu tiên : " + `${fibSum}`;

}
//Bài 2-3: In tam giác vuông
function exercise2_no3_function() {
    let myContainer = document.getElementById("exercise2_no3_container");
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
//Bài 2-4: In hình chữ nhật rỗng
function exercise2_no4_function() {
    let myRectangle = document.getElementById("exercise2_no4_text");
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
//Bài 2-5: In hình trái tim
function exercise2_no5_function() {
    let myHeart = document.getElementById("exercise2_no5_text");
    let myText = "";

    for (let i = 0; i < 19; i++) {
        for (let j = 0; j < 15; j++) {
            switch (i) {
                case 0:
                    if (2 < j && j < 6 || 8 < j && j < 12) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                case 3:
                    if (j == 1 || j == 6 || j == 8 || j == 13) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                case 6:
                    if (j == 0 || j == 7 || j == 14) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                case 9:
                    if (j == 1 || j == 13 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                case 12:
                    if (j == 3 || j == 11 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                case 15:
                    if (j == 5 || j == 9 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                case 18:
                    if (j == 7 ) {
                        myText += "*";
                    } else myText += `\xa0\xa0`;
                    break;
                default:
                    myText += `\xa0\xa0`;
                    break;
            }
        }
        myText += "<br>"
        myHeart.innerHTML += myText;
        myText = "";

    }
    // myHeart.innerHTML = myText;
}
setInterval(exercise2_no5_colorChange, 500);
let exercise2_no5_colorChange_flag = 0;
function exercise2_no5_colorChange(){
    let myHeart = document.getElementById("exercise2_no5_text");
    if(exercise2_no5_colorChange_flag == 0){
        myHeart.style.color = "red";
        exercise2_no5_colorChange_flag = 1;
    } else {
        myHeart.style.color = "green";
        exercise2_no5_colorChange_flag = 0;
    }
    
}

