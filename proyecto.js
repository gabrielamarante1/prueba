const contenidoTienda = document.getElementById("contenido-tienda")
const verCarrito = document.getElementById("verCarrito")
const contenedorModal = document.getElementById("contenedor-modal")

fetch("./db/db.json")
.then((res) => res.json())
.then((data) => {
    const { productos } = data;
    console.log(data.productos);
    console.log(productos);
    renderproductos(productos)
});

let carrito = JSON.parse(localStorage.getItem("carro")) || [];
productos.forEach((producto)=> {
    let contenidoProducto = document.createElement("div")
    contenidoProducto.className = "tarjeta";
    contenidoProducto.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">${producto.precio} $</p>
    `;
    contenidoTienda.append(contenidoProducto);
    let botonComprar = document.createElement("button")
    botonComprar.innerText = "Comprar";
    botonComprar.className = "boton-comprar";
    contenidoProducto.append(botonComprar);

    botonComprar.addEventListener("click", () => {
    const repeat = carrito.some((repeatproduct) => repeatproduct.id === producto.id); 
    if (repeat) {
        carrito.forEach((prod) => {
        if(prod.id === producto.id) {
            prod.cantidad++;
        }
    });
    } else {
        
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: producto.cantidad,
        });
        
        }
        savelocal();
    });
})

const savelocal = () => {
localStorage.setItem("carro", JSON.stringify (carrito));
};

JSON.parse(localStorage.getItem("carro"));


