export const cart = [
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 6
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 3
  }
];

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
  }