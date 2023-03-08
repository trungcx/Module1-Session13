//Bài 3: In tam giác vuông
function exercise3_function(){
    let myContainer = document.getElementById("exercise3_container");
    let myTriangle = "";
    let printFirstFlag = 0; // 0: * first ; 1: " " _space first
    let firstChar, secondChar;
    
    for(printFirstFlag = 0; printFirstFlag <=1; printFirstFlag++){
        if(printFirstFlag == 0){
            firstChar = "*";
            secondChar = `\xa0\xa0`; //nbsp character
        }else{
            firstChar = `\xa0\xa0`; //nbsp character
            secondChar = "*";
        }
        for(let printFirstChar = 1; printFirstChar<=5; printFirstChar++){    
            for(let i = 1; i<=printFirstChar; i++){
                myTriangle += firstChar;
            }
            for(let printSecondChar = 5 - printFirstChar; printSecondChar >= 0; printSecondChar--){
                myTriangle += secondChar;
            }
            myContainer.innerHTML += myTriangle + "<br>";
            console.log(myTriangle);
    
            myTriangle = "";
        }
        myContainer.innerHTML += "<br>";

        for(let printFirstChar = 5; printFirstChar >= 1; printFirstChar--){    
            for(let i = 1; i<=printFirstChar; i++){
                myTriangle += firstChar;
            }
            for(let printSecondChar = 5 - printFirstChar; printSecondChar >= 0; printSecondChar--){
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
function exercise4_function(){
    let myRectangle = document.getElementById("exercise4_text");
    let myText = "";
    let myChar = "*";
    for(let i = 0; i<7; i++){
        for(let j = 0; j<21; j++){
            myText += myChar;
            if(0 < i && i < 6 && j < 19){
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
function exercise5_function(){

}
