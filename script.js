const toggleButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

<script>
document.addEventListener("DOMContentLoaded", function () {

    /* -------- MENÚ HAMBURGUESA -------- */
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });


    /* -------- LIGHTBOX PARA IMÁGENES -------- */
    const imgs = document.querySelectorAll('.zoom-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    imgs.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = "hidden";
        });
    });

    window.cerrarLightbox = function () {
        lightbox.classList.remove('active');
        document.body.style.overflow = "auto";
    };

});
</script>
