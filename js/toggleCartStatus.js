//Функция дял определения пустая ли корзина (и для кнопки сделать заказ)
function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');

    const cartEmptyBadge = document.querySelector('[data-cart-empty]');

    const orderForm = document.querySelector('#order-form');//Оформить заказ

    if(cartWrapper.children.length > 0){
        console.log('FULL');
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');//Оформить заказ
    } else {
        console.log('EMPTY');        
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');//Оформить заказ
    }







}

