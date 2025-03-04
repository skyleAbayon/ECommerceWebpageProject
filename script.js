function addToCart(product, price) {
    alert(`${product} has been added to your cart for $${price}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        setTimeout(() => {
            product.classList.add('fade-in');
        }, index * 200);
    });
});