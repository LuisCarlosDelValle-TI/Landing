document.addEventListener('DOMContentLoaded', () => {
    const comprarButtons = document.querySelectorAll('.comprar-btn');

    comprarButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Producto añadido al carrito');
        });
    });
});