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