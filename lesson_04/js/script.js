'use strict';

/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
    надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
    Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/



/*function numToObj() {
    let num = +prompt('Введите число от 0 до 999', '245');

    const digits = [];
    while (num > 0) {
        digits[digits.length] = num % 10;
        num = parseInt(num / 10);     // не пойму почему phpStorm подчеркивает 'num'. change parameter 's' type to 'number'
    }
    //console.log(digits);
    const obj = {};
    if (digits.length > 3) return console.log(obj);
    obj.единицы = digits[0];
    obj.десятки = digits[1];
    obj.сотни = digits[2];

    console.log(obj);
}

numToObj();*/

let num = +prompt('Введите число от 0 до 999', '245');

function numToObj(num) {
    const obj = {};
    if(num > 999) return obj;
    obj['единицы'] = num % 10;
    obj['десятки'] = (num % 100 - num % 10) / 10;
    obj['сотни'] = (num - num % 100) / 100;
    return obj;
}

console.log(numToObj(num));


/*2.Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов.
    a)Какими объектами можно заменить их элементы?
    б)Реализуйте такие объекты.
    в)Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

/**
 * Каталог, пока не будем ложить в отдельный объект
 */


const basket = [
    {
        product_id: 12,
        product_name: 'goods_1',
        price: 50,
        quantity: 2,
    },
    {
        product_id: 34,
        product_name: 'goods_2',
        price: 75,
        quantity: 1,
    },
    {
        product_id: 56,
        product_name: 'goods_3',
        price: 100,
        quantity: 3,
    }
];

// Вариант через for
/*function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i].price*basket[i].quantity
    }
    return totalPrice;
}*/

//Вариант через forEach
function countBasketPrice(basket) {
  let totalPrice = 0;
  basket.forEach((cartItem, i, arr) => {
     totalPrice += cartItem.price*cartItem.quantity;
  });
  return totalPrice;
}

console.log(countBasketPrice(basket));

/**
 * Реализация в псевдо ООП. Описали сущность корзины.
 */
const Basket = {
    goods: [
        {
            product_id: 12,
            product_name: 'goods_1',
            price: 50,
            quantity: 2,
        },
        {
            product_id: 34,
            product_name: 'goods_2',
            price: 75,
            quantity: 1,
        },
        {
            product_id: 56,
            product_name: 'goods_3',
            price: 100,
            quantity: 3,
        }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice += cartItem.price, 0);
    }
};

console.log(Basket.countBasketPrice());


/*3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
    но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
    но в разных местах давал возможность вызывать разные методы.*/

//Каждый продукт имеет свою сущность. Хранится в отдельном объекте со своими свойствами. Допустим есть каталог и корзина.
//Каждый из них будет брать ссылку с объекта продукта.

/**
 * Товар (продукт), состоящий из свойств.
 *
 * const item1 = {
        product_id: 12,
        product_name: 'goods_1',
        price: 50,
        quantity: 1,
    };

 const item2 = {
        product_id: 34,
        product_name: 'goods_2',
        price: 75,
        quantity: 1,
    };

 const item3 = {
        product_id: 56,
        product_name: 'goods_3',
        price: 100,
        quantity: 1,
    };
 */


/**
 * Корзина, например включает в себя: цена товара, количество товара, = метод подсчета общей цены товара. Метод подсчтета общей суммы товаров.
 *
 * const basketR = {
    item1,
    item2,
    item3,

    getItemPriceTotal () {
    },

    countBasketPrice() {
    }
};
 */



