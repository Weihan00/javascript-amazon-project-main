export let cart = JSON.parse(localStorage.getItem('cart'));
console.log('cart', cart)

if (!cart) {
 cart = [
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 6
    },
    {
      productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      quantity: 2
    },
    {
      productId: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
      quantity: 3
    }
  ]
  console.log('default cart', cart)
}


function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
    const selectedQuantity = document.querySelector(`.js-quantity-selector-${productId}`).value;
    let matchingItem = false;
      cart.forEach((item)=>{
        if(productId === item.productId){
          item.quantity += Number(selectedQuantity);
          matchingItem = true;
        }
      })
  
      if (!matchingItem) {
        cart.push({
          productId: productId,
          quantity: Number(selectedQuantity)
        })
      }

      saveToStorage();
  }

  export function removeFromCart(productId) {
    const newCart = [];
  
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
  
    cart = newCart;
    console.log(newCart)

    saveToStorage();
  
  }