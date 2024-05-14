document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = '1';
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.cursor');
    cursor.style.opacity = '0'; // Hide cursor when leaving the window
});

function toggleMenu() {
    const menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("show-menu");

    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("change");
}

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove("active");
        slides[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        showSlide(nextSlideIndex);
    }

    function prevSlide() {
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlideIndex);
    }

    // Show the first slide initially
    showSlide(0);

    // Automatic slide change (uncomment to enable)
    // setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Event listeners for navigation buttons (optional)
    const nextButton = document.querySelector("#next");
    const prevButton = document.querySelector("#prev");

    if (nextButton && prevButton) {
        nextButton.addEventListener("click", nextSlide);
        prevButton.addEventListener("click", prevSlide);
    }
});