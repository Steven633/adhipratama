const toggleButton = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typewriter-text");
    const text = "Dengan tim profesional yang berpengalaman dan komitmen yang kuat terhadap kelestarian lingkungan, GreenScape telah berhasil mewujudkan berbagai proyek landscape yang inovatif dan menarik. Keahlian kami meliputi desain taman, instalasi tanaman, perawatan lansekap, dan konsultasi hortikultura.";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 55);
        }
    }

    type();
});