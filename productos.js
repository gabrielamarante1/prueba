fetch("db/db.json")
.then((res) => res.json())
.then((data) => {
    const { productos } = data;
    console.log( data.productos );
    console.log( productos );
    renderproductos( productos )
})