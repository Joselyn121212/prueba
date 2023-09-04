document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
        // Aquí puedes agregar lógica de autenticación si es necesario.

        // Redirigir a otra página después de iniciar sesión.
        window.location.href = "iniciodesesion.html";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const adContainer = document.getElementById("ad-container");

    // Lista de anuncios ficticios
    const ads = [
        "¡Nueva oferta! - 50% de descuento en productos electrónicos",
        "Aprovecha nuestro servicio de envío rápido",
        "Conoce nuestros productos exclusivos",
        "Descarga nuestra aplicación móvil",
    ];

    // Función para mostrar un anuncio aleatorio
    function displayRandomAd() {
        const randomAdIndex = Math.floor(Math.random() * ads.length);
        const randomAd = ads[randomAdIndex];

        const adElement = document.createElement("div");
        adElement.className = "ad";
        adElement.textContent = randomAd;

        adContainer.innerHTML = "";
        adContainer.appendChild(adElement);
    }

    // Mostrar un anuncio al cargar la página
    displayRandomAd();

    // Mostrar un anuncio nuevo cada 10 segundos (10000 milisegundos)
    setInterval(displayRandomAd, 10000);
});
