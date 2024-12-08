// Select all "Add to Cart" buttons
const btns = document.querySelectorAll(".add-to-cart");
for (let b of btns) {
    b.addEventListener("click", function (e) {
        e.stopPropagation();
        incrementCount(e);
    });
}

// Select all menu items for removal
const items = document.querySelectorAll(".menu-it");
for (let it of items) {
    it.addEventListener("click", function (e) {
        e.stopPropagation();
        removeItemFromCart(e);
    });
}

// Global cart counter variable
let cartCount = 0;

// Function to increment the cart count
function incrementCount() {
    cartCount++; // Increment the cart count
    updateCartDisplay(); // Update the cart display
    console.log(`Cart count incremented. Current count: ${cartCount}`);
}

// Function to update the cart display
function updateCartDisplay() {
    const cartDisplay = document.querySelector("#cart-count"); // Example: Cart count element
    if (cartDisplay) {
        cartDisplay.textContent = cartCount; // Update the cart count in the UI
    }
}

// Function to remove an item from the cart
function removeItemFromCart(e) {
    if (cartCount > 0) { // Ensure cart count does not go below zero
        cartCount--; // Decrement the cart count
        updateCartDisplay(); // Update the cart display
        console.log(`Cart count decremented. Current count: ${cartCount}`);
    } else {
        console.log("No items in the cart to remove.");
    }
}
