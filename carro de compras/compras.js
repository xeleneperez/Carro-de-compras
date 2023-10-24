// Variables
const listaProductos = document.getElementById("listaProductos");
const carrito = document.getElementById("carrito");
const total = document.getElementById("total");

let carritoProductos = []; // Almacena productos al carrito

// Función actualiza el carrito
function actualizarCarrito() {
    carrito.innerHTML = ""; // Limpiar el carrito
    let precioTotal = 0;

    carritoProductos.forEach(producto => {
        const listItem = document.createElement("li");
        listItem.textContent = producto.nombre + " - $" + producto.precio;
        carrito.appendChild(listItem);
        precioTotal += producto.precio;
    });

    total.textContent = precioTotal;
}

// Manejar clic en "Agregar al carrito"
listaProductos.addEventListener("click", function (event) {
    if (event.target.classList.contains("agregar")) {
        const productoSeleccionado = event.target.parentElement;
        const id = productoSeleccionado.getAttribute("data-id");
        const nombre = productoSeleccionado.textContent.split(" - ")[0];
        const precio = parseInt(productoSeleccionado.textContent.split("$")[1]);
        carritoProductos.push({ id, nombre, precio });
        actualizarCarrito();
    }
});

// Inicialización
actualizarCarrito();