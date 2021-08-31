"use strict"; //всегда писать

const arr = [0, 21, 33, 12, 66, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){
    return a - b;
}

//Метод перебора массива с callback-функцией внутри item - элемент arr, i  -итератор,arr - ссылка на массив
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// //Так не делать т.к. будет нарушаться "логика" массива
// arr[99] = 0;
// //Длина массива = последний " индекс + 1"
console.log(arr.length);
console.log(arr);


//Удаление последнего элемента
arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0;i < arr.length; i++){
    console.log(arr[i]);
}

for(let value of arr){
    console.log(value);
}

const str = prompt("", "");
//Разделение элементов массива где есть запятая
const products = str.split(",");
//Сортировка массива
products.sort();
//Объединение массива, элементы через ;
console.log(products.join(';'));