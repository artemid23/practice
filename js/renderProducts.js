const productsContainer = document.querySelector('#products-container');


getProducts();

async function getProducts(){

    const response = await fetch('./js/products.json');

    console.log(response);

    //Доставляем данные
    const productsArray = await response.json();
    console.log(productsArray);

    renderProducts(productsArray);

}

function renderProducts(productsArray){

    productsArray.forEach(function(item){

        const productHTML = `<!-- Товар -->
        <div class="col-md-6">
            <div class="card mb-4" data-id="${item.id}">
                <img class="product-img" src="img/tovar/${item.imgSrc}" alt="">
                <div class="card-body text-center">
                    <h4 class="item-title">${item.title}</h4>
                    <p><small data-items-in-box class="text-muted">article number: ${item.itemsInBox}</small></p>

                    <div class="details-wrapper">
                        <!-- Счетчик   --> 
                        <div class="items counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter>1</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <!-- // Счетчик   --> 

                        <div class="price">
                            <div class="price__weight">${item.weight}</div>
                            <div class="price__currency">${item.price} ПФК</div>
                        </div>
                    </div>

                    <button data-cart type="button" class="btn btn-block btn-outline-warning">Добавить в корзину</button>

                </div>
            </div>
        </div>
        <!-- // Товар -->`;


        productsContainer.insertAdjacentHTML('beforeend',productHTML);

    });

}