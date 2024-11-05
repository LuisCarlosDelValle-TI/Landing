let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

// Cambiar automáticamente cada 3 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);

// Mostrar la primera imagen al cargar
showSlide(currentIndex);