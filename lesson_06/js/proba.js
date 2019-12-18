'use strict';

const shop = {

    /**
     *  Объект каталога товаров
     */

    catalog: {
        wrapperCatalog: '.js_wrapper_catalog',
        addToCartButton: '.js_add_to_cart',
        attrId: 'data-id',
        attrName: 'data-name',
        attrPrice: 'data-price',
        attrQuantity: 'data-quantity',

        list: [
            {
                id: 12,
                name: 'ТОВАР_1',
                price: 50,
                img: './img/min/item1.jpg',
                quantity: 1,
            },
            {
                id: 34,
                name: 'ТОВАР_2',
                price: 75,
                img: './img/min/item2.jpg',
                quantity: 1,
            },
            {
                id: 56,
                name: 'ТОВАР_3',
                price: 150,
                img: './img/min/item3.jpg',
                quantity: 1,
            }
        ],

        /**
         * Инициальзация каталога.
         */

        init() {
            this.catalogBlock = document.querySelector(this.wrapperCatalog);
            this.render();
            this.addEventHandlers();
        },


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
                    <img class="product__img" src="${item.img}" alt="photo-product">               
                    <div class="product__text">
                        <h2><a href="#" class="product__name">${item.name}</a></h2>
                        <p class="product__price">&#x24;${item.price}</p>
                    </div>
                    <button class="product__add js_add_to_cart" 
                        data-id=${item.id}
                        data-name=${item.name}
                        data-price=${item.price}
                    >Купить</button>
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

        /**
         * Добавляем обработку событий
         */
        addEventHandlers() {
            this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
        },
        /**
         * Метод добавления в корзину
         */
        addToBasket(event) {
            if (!event.target.classList.contains('js_add_to_cart')) return;
            const id_product = +event.target.dataset.id;
            shop.cart.addToBasket(id_product);
        },
     },


    /**
     *  Объект корзины
     */
  cart: {
        wrapperCart: '.js_wrapper_cart',
        addToCartButton: '.js_add_to_cart',
        removeOfCart: '.js_remove_of_cart',
        removeOfCartAll: '.js-clear_cart',
        attrId: 'data-id',
        attrName: 'data-name',
        attrPrice: 'data-price',
        attrQuantity: 'data-quantity',
        goods: [
            {
                id: 12,
                name: 'ТОВАР_1',
                price: 50,
                quantity: 3,
            },
        ],

              /**
               * Метод инициальзации корзины
               */

              init() {

                  this.catalogList = shop.catalog.list;
                  this.cartBlock = document.querySelector(this.wrapperCart);
                  this.render();
                  this.clrCartButton = document.querySelector(this.removeOfCartAll);
                  this.removeProductsCart();
                  this.removeItem();
              },

              /**
               * Метод установки обработчиков событий для удаления с корзины
               */
              removeProductsCart() {
                  this.clrCartButton.addEventListener('click', ()=>this.dropCart());
              },

              /**
               * Метод очистки корзины
               */
              dropCart() {
                  this.goods = [];
                  this.render();
              },

              /**
               * Методы установки обработчиков событий
               */

        //поиск id
        findProduct(btnId) {
            return this.catalogList.find(item => item.id === btnId);
        },

        /**
         * Добавить товар
         */
        addToBasket(id_product) {
            const product = this.findProduct(id_product);

            if (product) {
                this.goods.push(product);
                this.render();
            } else {
                alert('Ошибка добавления!');
            }

        },
        /**
         * Удалить товар
         */

        removeItem() {
            this.cartBlock.addEventListener('click', event => this.clrItemButton(event));
        },

        /**
         * Метод удаления товара из корзины
         */
        clrItemButton(event) {
            const id_product = +event.target.dataset.id;
            shop.cart.clrItemBtn(id_product);
        },


        clrItemBtn(id_product) {
            const product = this.findProduct(id_product);

            if (product) {
                this.goods.splice(product,1);
                this.render();
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
                  document.querySelector('#clearShoppingCart').style.display = 'none';    //временное решение
                  this.cartBlock.insertAdjacentHTML('beforeend',
                      `
                            <div class="js_cart_empty">
                                <h3 class="wrapper__h3">Ваша корзина пока пуста</h3>
                            </div>
                            `);
              },

              /**
               * Рендер списка товаров в корзине
               */
              renderCartList() {
                  this.cartBlock.innerHTML = '';
                  document.querySelector('#clearShoppingCart').style.display = 'inherit';  //временное решение
                  this.cartBlock.insertAdjacentHTML('beforeend', `
                    <tr>
                        <th scope="col" class="first__th">Название товара</th>
                        <th scope="col" class="cart__th">Цена товара</th>
                        <th scope="col" class="cart__th">Количество</th>
                        <th scope="col" class="cart__th">Общая цена</th>
                        <th scope="col" class="cart__th">Удалить товар из корзины</th>
                    </tr>
                    `);
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
                      return `
                                <tr class="product__tr">
                                          <th scope="row" class="first__th"> <h4 class="h4">${item.name}</h4> </th>
                                          <td class="cart__td">&#8381;${item.price}</td>
                                          <td class="cart__td">
                                              <label>
                                                  <input type="number" min="1" max="10" value="${item.quantity}" class="quantity__product">
                                              </label>
                                          </td>
                                          <td class="cart__td">&#8381;${item.price * item.quantity}</td>
                                          <td class="cart__td"><button class="remove__product js_remove_of_cart" 
                                                                  data-id="${item.id}"
                                                                  data-name="${item.name}"
                                                                  data-quantity="${item.quantity}"
                                                                  >x</button> </td>
                                        </tr>
                             `;
                  },

              },
};


window.addEventListener('load', () => {
    shop.catalog.init();
    shop.cart.init();
});
