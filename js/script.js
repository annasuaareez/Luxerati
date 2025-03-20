document.addEventListener("DOMContentLoaded", () => {
    fetch("php/getData.php") // Llamada al PHP
        .then(response => response.json())
        .then(data => generarTarjetas(data, "news-container"))
        .catch(error => console.error("Error al cargar datos:", error));
});

function generarTarjetas(datos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = "";

    datos.forEach(item => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        tarjeta.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <a href="${item.enlace}">Leer más</a>
        `;

        contenedor.appendChild(tarjeta);
    });
}
