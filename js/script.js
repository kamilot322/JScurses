"use strict"; //всегда писать

const str = "tESt";
const arr = [1, 2, 4, 6,3];

//Кол-во символов
// console.log(str.length);
// console.log(arr.length);

//Нельзя менять опеределенный символ в строке,делается с помощью методов
// console.log(str[2]);

//Регистры
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "some fruit";
//Если выводится "-1", то отсутсвует символ или часть строки
console.log(fruit.indexOf("q"));

const logg = "Hello world";
//Вырезка подстроки с n до q, может принимать отрицательные значения, может принимать один аргумент
console.log(logg.slice(6, 11));
//Вырезка подстроки тоже самое только без отриц чисел, отриц. число = 0, можно задавать 1-ый аргумент > чем 2-ой
console.log(logg.substring(6, 11));
//Вырезка подстроки с n-ой позиции и q элементов
console.log(logg.substr(6, 5));

