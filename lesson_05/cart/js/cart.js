'use strict';

/**
 * Корзина, например включает в себя: цена товара, количество товара, = метод подсчета общей цены товара.
 * Метод подсчтета общей суммы товаров.
 *
 */

"use strict";

/**
 *  Объект каталога товаров
 */
const catalog = {
    catalogBlock: null,
    list: [
        {
            product_id: 12,
            product_name: 'goods_1',
            price: 50,
            quantity: 1,
        },
        {
            product_id: 34,
            product_name: 'goods_2',
            price: 75,
            quantity: 1,
        },
        {
            product_id: 56,
            product_name: 'goods_2',
            price: 150,
            quantity: 1,
        }
    ],

    /**
     * Инициальзация каталога.
     * @param catalogBlockClass - класс блока каталога
     */
    init(catalogBlockClass) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.render();
    },

    /**
     * Рендер каталога
     */
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    /**
     * Метод получения количества товаров в каталоге
     * @returns {number}
     */
    getCatalogListLength() {
        return this.list.length;
    },

    /**
     * Рендер списка товаров
     */
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.list.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    /**
     * Рендер отдельного товара из списка
     * @param item - товар
     * @returns {string} - сгенерированая строка разметки
     */
    renderCatalogItem(item) {
        return `<article class="product">                
                    <div class="product__text">
                        <h2><a href="#" class="product__name">${item.product_name}</a></h2>
                        <p class="product__price">&#x24;${item.price}</p>
                    </div>
                    <a href="#" class="product__add">Add to Cart</a>
                </article>
                <div>
            </div>`;
    },

    /**
     * Рендер пустого каталога
     */
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.insertAdjacentHTML('beforeend', `Каталог товаров пуст.`);
    },
};

/**
 *  Объект корзины
 */
const cart = {
    cartBlock: null,
    clrCartButton: null,
    clrItemButton: null,
    goods: [
        {
            product_id: 12,
            product_name: 'goods_1',
            price: 50,
            quantity: 3,
        },
        {
            product_id: 34,
            product_name: 'goods_2',
            price: 75,
            quantity: 1,
        },
    ],

    /**
     * Метод инициальзации корзины
     * @param cartBlockClass - класс блока корзины
     * @param clrCartButton - класс кнопки очистки корзины
     * @param clrItemButton - класс кнопки удаления товара из корзины
     */
    init(cartBlockClass, clrCartButton, clrItemButton) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);
        this.clrItemButton = document.querySelector(`.${clrItemButton}`);
        this.removeProductsCart();
        this.removeItemCart();
        this.render();
    },

    /**
     * Метод установки обработчиков событий для удаления с корзины
     */
    removeProductsCart() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    /**
     * Метод установки обработчиков событий для удаления товара с корзины
     */
    removeItemCart() {
        this.clrCartButton.addEventListener('click', this.dropItem.bind(this));
    },

    /**
     * Метод удаления товара из корзины
     */
    dropItem() {
        this.goods = [];
        this.renderItem();
    },

    /**
     * Метод очистки корзины
     */
    dropCart() {
        this.goods = [];
        this.render();
    },

    /**
     * Рендер товара
     */

    renderItem() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    /**
     * Рендер корзины
     */
    render() {
        if (this.getCartGoodsLength() > 0) {
            this.renderCartList();
        } else {
            this.renderEmptyCart();
        }
    },

    /**
     * Получение количества товаров в корзине
     * @returns {number}
     */
    getCartGoodsLength() {
        return this.goods.length;
    },

    /**
     * Рендер пустой корзины
     */
    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
    },

    /**
     * Рендер списка товаров в корзине
     */
    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
        });
    },

    /**
     * Рендер отдельного товара в корзине
     * @param item - товар
     * @returns {string} - сгененрированая строка разметки
     */
    renderCartItem(item) {
        return `<tr class="product__tr">
                    <th scope="row" class="first__th"> <h4 class="h4">${item.product_name}</h4> </th>
                    <td class="cart__td">${item.price}</td>
                    <td class="cart__td">
                        <label>
                            <input type="number" min="1" max="10" value="${item.quantity}" class="quantity__product">
                        </label>
                    </td>
                    <td class="cart__td">${item.price * item.quantity}</td>
                    <td class="cart__td"> <button class="remove__product">x</button> </td>                
                </tr>
                `;
    },

};

/**
 * Подключение каталога и корзины
 */
catalog.init('wrapper__catalog');
cart.init('goods', 'clearShoppingCart', 'remove__product');
