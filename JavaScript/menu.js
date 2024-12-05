function addToCart(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to your cart!`);
}
