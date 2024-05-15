// //Funcion para que cuando se haga scroll en la pagina aparezca el footer (solo en pc)
// window.addEventListener('scroll', function() {
//   var footer = document.getElementById('footer');
//   var isTabletOrMobile = window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(max-width: 365px)").matches;
//   var scrollPosition = window.innerHeight + window.scrollY;
//   var bodyHeight = document.body.offsetHeight;
//   var footerThreshold = 100;

//   if (isTabletOrMobile || scrollPosition >= bodyHeight - footerThreshold) {
//       footer.style.display = 'flex';
//   } else {
//       footer.style.display = 'none';
//   }
// });


//Funcion carrusel

function App() {}
    window.onload = function(event){
        let app = new App();
        window.app = app;
    }

    App.prototype.processingButton = function(event){
        const btn = event.currentTarget;
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');


        const carruselWidth = carrusel[0].offsetWidth;
        const trackWidth = track.offsetWidth;
        const listWidth = carruselList.offsetWidth;

        track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2) * -1);
        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselWidth, track) : nextAction(leftPosition, trackWidth, listWidth, carruselWidth, track);
    }

    let prevAction = (leftPosition, carruselWidth, track) => {
        if (leftPosition > 0) {
            track.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
        }
    }


    let nextAction = (leftPosition, trackWidth, listWidth, carruselWidth, track) => {
        if (leftPosition < (trackWidth - listWidth)) {
            track.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
        }
    }

//Funciones para el sidebar del carrito
function toggleCart() {
    let sidebar = document.getElementById('mySidebar');
    if (sidebar.style.width === '0px' || !sidebar.style.width) {
        openCart();
    } else {
        closeCart();
    }
}

function openCart() {
    let sidebar = document.getElementById('mySidebar');
    sidebar.style.width = '250px';
}

function closeCart() {
    let sidebar = document.getElementById('mySidebar');
    sidebar.style.width = '0';
}

//Anadir objetos al carrito

// Productos

let productos = [
    {
      id: 1,
      nombre: "Tenis OfSport",
      precio: 200,
      img: "./images/tenis.jpg",
      favorito: false,
    },
  
    {
      id: 2,
      nombre: "Chaqueta Nevada",
      precio: 600,
      img: "./images/chaqueta-nevada.jpg",
      favorito: false,
    },
    {
      id: 3,
      nombre: "Balón Goal",
      precio: 200,
      img: "./images/balon-goal.jpg",
      favorito: false,
    },
    {
      id: 4,
      nombre: "Raqueta PointTo",
      precio: 100,
      img: "./images/raqueta-pointto.jpg",
      favorito: false,
    },
    {
      id: 5,
      nombre: "Manta Yoga Spirit",
      precio: 100,
      img: "./images/manta-yoga.jpg",
      favorito: false,
    },
    {
      id: 6,
      nombre: "Camiseta Mountain",
      precio: 50,
      img: "./images/camiseta.jpg",
      favorito: false,
    },
  ];
  
  // variables globales
  const contenedorproductos = document.querySelector("#contenedor-productos");
  const contenedorCarrito = document.querySelector("#contenedor-carrito");
  let carrito = [];
  
  // crear item en el carrito
  
  function crearItemCarrito(arrProductos, contenedor) {
    let card = document.createElement("div");
    let nombreProducto = document.createElement("p");
    let contenedorImagen = document.createElement("div");
    let imagen = document.createElement("img");
    let precio = document.createElement("p");
    let cantidad = document.createElement("p");
    let btnEliminar = document.createElement("button");
  
    card.setAttribute("class", "card-carrito col-12 ");
    nombreProducto.textContent = arrProductos.nombre;
    imagen.setAttribute("src", arrProductos.img);
    imagen.setAttribute("alt", arrProductos.nombre);
    precio.textContent = "$ " + arrProductos.precio;
    cantidad.textContent += 1;
    btnEliminar.textContent = "X";
  
    contenedorImagen.appendChild(imagen);
    card.append(contenedorImagen, nombreProducto, precio, cantidad, btnEliminar);
    contenedor.appendChild(card);
  }
  
  
    // crear card de productos
  function crearCard(producto, contenedor) {
      let card = document.createElement("div");
      let nombreProducto = document.createElement("h4");
      let contenedorImagen = document.createElement("div");
      let imagen = document.createElement("img");
      let precio = document.createElement("p");
      let btnComprar = document.createElement("button");
    
      card.setAttribute("class", "card-producto col-6 col-lg-2 col-md-4");
      nombreProducto.textContent = producto.nombre;
      imagen.setAttribute("src", producto.img);
      imagen.setAttribute("alt", producto.nombre);
      precio.textContent = "$ " + producto.precio;
      btnComprar.setAttribute("class", "btn btn-info");
      btnComprar.textContent = "Comprar";
      btnComprar.onclick = function() {
        carrito.push(producto);
        for (const producto of carrito) {
          crearItemCarrito(producto, contenedorCarrito);
          carrito = []
      }
        console.log(carrito);
    };
    
      contenedorImagen.appendChild(imagen);
      card.append(contenedorImagen, nombreProducto, precio, btnComprar);
      contenedor.appendChild(card);
    }
    
    // renderizar productos
    function renderizarProductos() {
      for (const producto of productos) {
        crearCard(producto, contenedorproductos);  
      }
    }
    renderizarProductos();
  
  
  
  
  

function removeFromCart(button) {
    let itemDiv = button.parentNode;
    itemDiv.parentNode.removeChild(itemDiv);
}

