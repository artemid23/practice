//Для суммирования итоговой счета
function calcCartPriceAndDelivery(){

    const cartItems = document.querySelectorAll('.cart-item');

    const totalPriceEl = document.querySelector('.total-price');

    const deliveryCost = document.querySelector('.delivery-cost');

    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let totalPrice = 0;
   
   
    cartItems.forEach(function(item){

        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price__currency');

        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);//Цена одного товар * на колличество
        
        totalPrice = totalPrice + currentPrice;
    
    })

    console.log(totalPrice);

    //Отображаю цену на странице
    totalPriceEl.innerText = totalPrice;

    // Скрываем или показываем блок с доставкой

    if(totalPrice > 0){

        cartDelivery.classList.remove('none');

    } else {
        cartDelivery.classList.add('none');
    }




    if(totalPrice >= 1){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';

    } else {

        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ПФК';


    }

}