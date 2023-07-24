// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');


//Отслеживаем клик по странице
window.addEventListener('click',function(event){
   
    //Проверяем что кликнули на кнопку в корзину
    if(event.target.hasAttribute('data-cart')){

        //Находим карточку с товаром, внутри которого был совершен клик
        const card = event.target.closest('.card');
        //Сщбираем данные с этого товара и запсываем их в единый объект productInfo
        const productInfo = {
            id: card.dataset.id,//номер
            imgSrc: card.querySelector('.product-img').getAttribute('src'),//Картинка
            title: card.querySelector('.item-title').innerText,//Внутренний текст
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,//Колличество 
            weight: card.querySelector('.price__weight').innerText,//Вес
            price: card.querySelector('.price__currency').innerText,//Цена
            counter: card.querySelector('[data-counter]').innerText,//Счетчик

        }

        //Проверяем если товар в корзине(чтобы предотвратить повторение итерации)
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        console.log(itemInCart);

        //Если товар есть в корзине
        if(itemInCart){
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            
        //Если товара нет в корзине
        //console.log(productInfo);
        //Формирование товара в корзине(подствляем данные в шаблон)
 
       const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
            <div class="cart-item__img">
                <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
            </div>
            <div class="cart-item__desc">
                <div class="cart-item__title">${productInfo.title}</div>
                <div class="cart-item__weight">${productInfo.itemsInBox}${productInfo.weight}</div>

                <!-- cart-item__details -->
                <div class="cart-item__details">

                    <div class="items items--small counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter="">${productInfo.counter}</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__currency">${productInfo.price}</div>
                    </div>

                </div>
                <!-- // cart-item__details -->

            </div>
        </div>
    </div>
    <!-- // Cart item -->`;

        //Отобразим товар в корзине
        cartWrapper.insertAdjacentHTML('beforeend',cartItemHTML);

        }

        //Обнуление счетчика после добавления в корзину
        card.querySelector('[data-counter]').innerText = '1';


        //Отбражение статуса корзины Пустая/Полная
        toggleCartStatus();

        //Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();

    }
});