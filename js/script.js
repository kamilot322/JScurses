"use strict"; //всегда писать

let num = 30;

function showFirstMessage(text) {
    console.log(text);
    num = 20;
    console.log(num);
}

showFirstMessage("Hello Wolrd!");
console.log(num);

//Не ошибка!
console.log(calc(4,3));
console.log(calc(2,5));
console.log(calc(5,7));


function calc(a, b){
    return(a + b);
}

//Function declaration

//Не ошибка! Т.к. функция может использоваться до и после создания
console.log(calc(4,3));
console.log(calc(2,5));
console.log(calc(5,7));

function ret(){
    let num = 50;
    /*
    some code
    some code
    */
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//Function exprassion

//Ошибка т.к. функция ещё не была создана,а уже используется
logger();

//Function exprassion
const logger = function(){
    console.log("Hello!");
};
logger();

//Стрелочные ф-ции

//Упрощённый вариант
const calculate = (a, b) => a + b; 
/*
"calculate" - название ф-ции
"= (a, b) =>" - синтаксис стрелочной ф-ции
"(a, b)" - аргументы ф-ции
"=>" - говорит о выполнении кода
*/

//Классический вариант
const calculate2 = (a, b) => {
    console.log("Calc2");
    return a + b;
};