"use strict"; //всегда писать

// let a = 5,
//     b = a;

// b = b + 5;

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //Ссылка на obj
// copy.a = 10;
//Лог вывода: { a: 10, b: 1 }
//            { a: 10, b: 1 } изменилось и в основном объекте
// console.log(obj);
// console.log(copy);

//Поверхностная копия объектов, не делает копии со вложенными объектами
// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }


//Копирование объекта
// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(numbers);
// console.log(newNumbers);



const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:7
    }
};

const add = {
    d:7,
    e:20
};
//Копирование объекта
const clone = Object.assign({},add);
clone.d = 20;

// console.log(add);
// console.log(clone);

//Копирование старого массива
const oldArray = ["a","b","c"];
const newArray = oldArray.slice();

newArray[1] = "abcs";
console.log(oldArray);
console.log(newArray);

//Оператор разворота

const video = ["youtube", "vimeo","rutube"],
    blogs = ["wordpress","livejournal","blogger"],
    internet = [...video, ...blogs, "vk","facebook"];
console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 4, 6];
//2
// 4
// 6
log(...num);

const array = ["a", "b"];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};