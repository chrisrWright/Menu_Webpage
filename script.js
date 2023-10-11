let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmountElement = document.getElementById('total-amount');
    let totalAmount = 0;

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
        totalAmount += item.price;
    });

    totalAmountElement.innerText = totalAmount;
}

function checkout() {
    alert(`Thank you for your order! Total amount: $${document.getElementById('total-amount').innerText}`);
    cart = [];
    updateCart();
}
