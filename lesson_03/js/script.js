'use strict';

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

console.log('task_1');
//2,3,5,7,11,13,17,19,23,29,31,37, ...
let arr = [];
let a = 0;
primeNum:
    while (a < 100) {
        a++;
        let b = 2;
        while (b < a) {
            if (a % b === 0) continue primeNum;
            b++;
        }
        if (a !== 1) arr.push(a);   // вывод в массив для читаемости в 1 строку
    }
console.log(arr);

// С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// Товары в корзине хранятся в массиве. Задачи:
//     a)Организовать такой массив для хранения товаров в корзине;
//     b)Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
console.log('task_2');
let basket = [
    ['goods_1', 50],
    ['goods_2', 75],
    ['goods_3', 100],
    ['goods_4', 125],
    ['goods_5', 150],
];

function countBasketPrice(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i][1];
    }
    console.log(sum);
}
countBasketPrice(basket);


//3.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}
console.log('task_3');
for (let j = 0; j <= 9; console.log(j++) ) {

}

//4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:
console.log('task_4');

let x = '\nx';
for ( let i = 0; i < 20; i++) {
    console.log( x );
    x = x + 'x';
}