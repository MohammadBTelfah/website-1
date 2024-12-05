document.addEventListener('DOMContentLoaded', function () {
    // استرجاع العناصر من LocalStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // تحديد مكان عرض العناصر
    const cartContainer = document.getElementById('cart-items');

    if (cart.length > 0) {
        cart.forEach(item => {
            let listItem = document.createElement('li');
            listItem.textContent = item;
            cartContainer.appendChild(listItem);
        });
    } else {
        cartContainer.textContent = 'Your cart is empty!';
    }
});
