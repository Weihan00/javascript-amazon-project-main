let productsHTML = '';

products.forEach(product => {
    productsHTML += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src=${product.image}>
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-select-prod-quantity">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary
    js-add-to-cart" data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`;
})

let cartProducts = [];
function addToCart(quantity, prodIndex) {
  const addProduct = {
    image: products[prodIndex].image,
    name: products[prodIndex].name,
    priceCents: products[prodIndex].priceCents,
    quantity: quantity,
    deliveryDate: ''
  }
  cartProducts.push(addProduct)
  console.log(cartProducts)
}

function getSelectQuantity(prodIndex){
  const elements = document.querySelectorAll('.js-select-prod-quantity');
  const elementsArray = Array.from(elements);
  const selectElement = elementsArray.filter((element, index) => {
    return index === prodIndex;
  });
  console.log('element', selectElement)
  selectElement.addEventListener('change', ()=>{
    const selectedValue = selectElement.value;
    console.log('quantity', selectedValue)
    return selectedValue;
  })
}

//render all products
document.querySelector('.js-products-grid').innerHTML = productsHTML

//add product to cart
document.querySelectorAll('.js-add-to-cart').forEach((button, index)=>{
  button.addEventListener('click', ()=>{
    const productId = button.dataset.productId;

    let matchingItem = false;
    cart.forEach((item)=>{
      if(productId === item.productId){
        item.quantity += 1;
        matchingItem = true;
      }
    })

    if (!matchingItem) {
      console.log('..')
      cart.push({
        productId: productId,
        quantity:1
      })
    }
    console.log('cart:', cart)
  })
})