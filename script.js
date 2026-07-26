function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

// Close menu after clicking a link (mobile)
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});

// Sticky header shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});
