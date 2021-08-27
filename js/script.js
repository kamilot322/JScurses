"use strict"; //всегда писать

// const obj = new object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        background: "red"
    }
};

console.log(Object.keys(options).length); //Кол-во свойств в объекте

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);

//Счётчик свойств объекта
let counter = 0;

//Перебор свойств options
for (let key in options){
    //Свойства в объекте объекта
    if (typeof(options[key])== 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++; //Вложенные свойства
        }
    } else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++; //Верхний уровень
    }
}

//Классический метод счёта свойств в объекте
for (let key in options){
        counter++; //Верхний уровень 
}

console.log(counter);