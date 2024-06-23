document.addEventListener('DOMContentLoaded', () => {
  const criterios = {
    nombrePrenda: ''
  };
  // Lista de productos obtenida del JSON
  const productos = [
    {
      nombrePrenda: "Camiseta",
      talles: ["S", "M", "L"],
      color: "rojo",
      tipoTela: "algodón",
      género: "unisex",
      url: "https://m.media-amazon.com/images/I/71bIyy114PL._AC_SL1500_.jpg",
    },
    {
      nombrePrenda: "Pantalón",
      talles: ["M", "L"],
      color: "azul",
      tipoTela: "denim",
      género: "hombre",
      url: "https://m.media-amazon.com/images/I/71KI2MZQLeS._AC_SL1500_.jpg",
    },
    {
      nombrePrenda: "Falda",
      talles: ["S", "M"],
      color: "negro",
      tipoTela: "poliéster",
      género: "mujer",
      url: "https://m.media-amazon.com/images/I/71r00O82kyL._AC_SL1500_.jpg",
    },
    {
      nombrePrenda: "Remera Lisa",
      talles: ["S", "M", "L"],
      color: "rojo",
      tipoTela: "algodón",
      género: "unisex",
      url: "https://m.media-amazon.com/images/I/61Qd4houSdL._AC_SL1500_.jpg",
    },
    {
      nombrePrenda: "Gorra",
      talles: ["M", "L"],
      color: "azul",
      tipoTela: "denim",
      género: "hombre",
      url: "https://m.media-amazon.com/images/I/91I33Ngvh+L._AC_SL1500_.jpg",
    },
    {
      nombrePrenda: "Camiseta Térmica",
      talles: ["S", "M"],
      color: "negro",
      tipoTela: "poliéster",
      género: "mujer",
      url: "https://m.media-amazon.com/images/I/61M8eYJFQEL._AC_SL1500_.jpg",
    },
  ];

  // Función para mostrar los productos
  function mostrarProductos(productos) {
    const productList = document.getElementById('productList');
    const errorMessage = document.getElementById('errorMessage');
    productList.innerHTML = ''; // Limpiar la lista de productos

    if (productos.length === 0) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      productos.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
         <div class="img"><img src="${producto.url}"></div>
          <div class="info">
          <h4>${producto.nombrePrenda}</h4>
          <p>Color: ${producto.color}</p>
          <p>Tipo de Tela: ${producto.tipoTela}</p>
          <p>Talles: ${producto.talles.join(", ")}</p>
          <p>Género: ${producto.género}</p>
          </div>
        `;
        productList.appendChild(productCard);
      });
    }
  }

  // Función para capturar las opciones seleccionadas
  //cb es CheckBox
  function capturarOpciones() {
    criterios.color = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
    criterios.tipoTela = Array.from(document.querySelectorAll('input[name="tipoTela"]:checked')).map(cb => cb.value);
    criterios.talles = Array.from(document.querySelectorAll('input[name="talles"]:checked')).map(cb => cb.value);
    criterios.nombrePrenda = document.getElementById('searchInput').value.toLowerCase();
  }

  // Filtrar productos basado en los criterios seleccionados
  function filtrarProductosMultiple(productos, criterios) {
    return productos.filter(producto => 
      (criterios.nombrePrenda === '' || producto.nombrePrenda.toLowerCase().includes(criterios.nombrePrenda)) &&
      (criterios.color.length === 0 || criterios.color.includes(producto.color)) &&
      (criterios.tipoTela.length === 0 || criterios.tipoTela.includes(producto.tipoTela)) &&
      (criterios.talles.length === 0 || producto.talles.some(talle => criterios.talles.includes(talle)))
    );
  }

  // Función para limpiar los filtros
  function limpiarFiltros() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('searchInput').value = '';
    mostrarProductos(productos); // Mostrar todos los productos
  }

  // Mostrar todos los productos al cargar la página
  mostrarProductos(productos);

  // Agregar evento de clic al botón de filtrar
  document.getElementById('filtrarBtn').addEventListener('click', () => {
    capturarOpciones();
    const productosFiltrados = filtrarProductosMultiple(productos, criterios);
    mostrarProductos(productosFiltrados);
  });

  // Agregar evento de clic al botón de limpiar filtros
  document.getElementById('limpiarBtn').addEventListener('click', () => {
    limpiarFiltros();
  });

  // Agregar evento de input al campo de búsqueda
  document.getElementById('searchInput').addEventListener('input', () => {
    capturarOpciones();
    const productosFiltrados = filtrarProductosMultiple(productos, criterios);
    mostrarProductos(productosFiltrados);
  });
});