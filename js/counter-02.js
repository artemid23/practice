// Добавляю прослушку на всем окне
window.addEventListener('click',function(event){

    //Проверка и поиск + и - по всей странице

    if(event.target.dataset.action === 'plus'){
        console.log('Plus');


        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper);

        //Поиск счетчика 
        const counter = counterWrapper.querySelector('[data-counter]');
        console.log(counter);

        counter.innerText = ++counter.innerText;

        };

        if(event.target.dataset.action === 'minus'){
        console.log('Minus');


        const counterWrapper = event.target.closest('.counter-wrapper');
        console.log(counterWrapper);

        //Поиск счетчика 
        const counter = counterWrapper.querySelector('[data-counter]');
        console.log(counter);



        if(parseInt(counter.innerText) > 1){
            counter.innerText = --counter.innerText;

        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            //Удаление товара из корзины
           event.target.closest('.cart-item').remove();

            toggleCartStatus();

            //Пересчет стомимости
            calcCartPriceAndDelivery();
        }

    };

    //Проверяю клие на + или - внутри корзины
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){

        calcCartPriceAndDelivery();

    }

});
