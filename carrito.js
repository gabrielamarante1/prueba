const pintarCarrito = () => {
    contenedorModal.innerHTML = ""
    contenedorModal.style.display = "flex"
    const cabeceraModal = document.createElement("div");
    cabeceraModal.className = "cabecera-modal"
    cabeceraModal.innerHTML = `
        <h1 class="titulo-cabecera-modal">Carrito de Compras</h1>
    `;
    contenedorModal.append(cabeceraModal);

    const botonCerrarModal = document.createElement("h1");
    botonCerrarModal.innerText = "X";
    botonCerrarModal.className = "boton-cerrar-cabecera-modal";

    botonCerrarModal.addEventListener("click", () => {
        contenedorModal.style.display = "none";
    });

    cabeceraModal.append(botonCerrarModal);
    carrito.forEach((producto) => {

    let contenidoCarrito = document.createElement("div");
    contenidoCarrito.className = "contenido-modal";
    contenidoCarrito.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>${producto.precio} $</p>
            <p>Unidades: ${producto.cantidad}</p> 
            <p>Total: ${producto.cantidad * producto.precio}</p>
                `;
        contenedorModal.append(contenidoCarrito);

        let eliminar = document.createElement("span");
        eliminar.innerText = "✖️";
        eliminar.className = "delete-product";
        contenidoCarrito.append(eliminar);

        eliminar.addEventListener("click", eliminarproducto);
    });
    

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-contenido";
    totalCompra.innerHTML = `Total a Pagar: ${total} $` ;
    contenedorModal.append(totalCompra);

    const botonFinalizarCompra = document.createElement("button");
    botonFinalizarCompra.innerText = "Finalizar Compra";
    botonFinalizarCompra.className = "boton-finalizar-compra";
    contenedorModal.append(botonFinalizarCompra);

    
    botonFinalizarCompra.addEventListener("click", () => {
        Swal.fire("¡Gracias por tu compra!");
        
        
        
        carrito = [];
        contenedorModal.style.display = "none";
        localStorage.clear();
        
        
    });
    }

    verCarrito.addEventListener("click", pintarCarrito)

    const eliminarproducto = () => {
        const foundId = carrito.find((element) => element.id);
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });
    savelocal();    
    pintarCarrito();    
    };