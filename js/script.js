// Objeto que contiene la información del usuario
const usuario = {
  nombre: prompt("Hola, mi nombre es JARVIS, antes de poder ayudarte, me gustaría saber primero tu nombre"),
  apellido: prompt("y tu apellido?"),
  telefono: prompt("Por último, un número de teléfono")
};

// Array que contiene los productos disponibles
const productos = [
  {
    id: 1,
    nombre: 'Mouse',
    opciones: [
      { id: 1, nombre: 'Logitech G502 SE HERO', precio: 40 },
      { id: 2, nombre: 'Razer Basilisk X', precio: 50 },
      { id: 3, nombre: 'Razer DeathAdder', precio: 30 },
      { id: 4, nombre: 'Mars Gaming MM018', precio: 20 }
    ]
  },
  {
    id: 2,
    nombre: 'Teclado',
    opciones: [
      { id: 1, nombre: 'Logitech G513', precio: 100 },
      { id: 2, nombre: 'Razer Huntsman Elite', precio: 150 },
      { id: 3, nombre: 'HyperX Alloy Elite', precio: 80 },
      { id: 4, nombre: 'Corsair K70 RGB', precio: 120 }
    ]
  },
  {
    id: 3,
    nombre: 'Mousepads',
    opciones: [
      { id: 1, nombre: 'Perixx DX-1000', precio: 15 },
      { id: 2, nombre: 'Razer Vespula V2', precio: 30 },
      { id: 3, nombre: 'Roccat Taito Control', precio: 25 },
      { id: 4, nombre: 'Turtle Beach Drift', precio: 20 }
    ]
  },
  {
    id: 4,
    nombre: 'Audífonos',
    opciones: [
      { id: 1, nombre: 'SteelSeries Arctis', precio: 100 },
      { id: 2, nombre: 'Razer Kraken Tournament Edition', precio: 80 },
      { id: 3, nombre: 'Budget Gaming', precio: 30 },
      { id: 4, nombre: 'Open-Back Gaming', precio: 120 }
    ]
  }
];

// Función para buscar un producto en el array de productos
function buscarProducto(productos, id) {
  return productos.find(producto => producto.id === id);
}

// Función para buscar una opción de producto en el array de opciones
function buscarOpcion(opciones, id) {
  return opciones.find(opcion => opcion.id === id);
}

// Función para mostrar el detalle de la compra
function mostrarDetalleCompra(producto, cantidad, total) {
  alert(`
    Detalle de compra:
    Producto: ${producto.nombre}
    Cantidad: ${cantidad}
    Precio unitario: $${producto.precio}
    Total: $${total}
  `);
}

// Obtener la opción del usuario
let opcion;
while (true) {
  opcion = prompt(`Bien ${usuario.nombre}, ¿en qué puedo ayudarte?

  1. Comprar
  2. Estado de compra
  3. Soporte`);

  if (opcion === "1" || opcion.toLowerCase() === "comprar" ||
    opcion === "2" || opcion.toLowerCase() === "estado de compra" ||
    opcion === "3" || opcion.toLowerCase() === "soporte") {
    break;
  } else {
    alert("Opción inválida, por favor selecciona una opción válida.");
  }
}

// Realizar acción según la opción seleccionada
if (opcion === "1" || opcion.toLowerCase() === "comprar") {

  // Obtener el tipo de producto que desea comprar
  let tipoProducto;
  while (true) {
    tipoProducto = prompt(`Seleccione el tipo de producto que desea comprar:

    1. Mouse
    2. Teclado
    3. Mousepads
    4. Audífonos`);

    if (tipoProducto === "1" || tipoProducto === "2" || tipoProducto === "3" || tipoProducto === "4") {
      break;
    } else {
      alert("Opción inválida, por favor seleccione una opción válida.");
    }
  }

  // Obtener el producto que desea comprar
  let productoId;
  let productoSeleccionado;
  while (true) {
    if (tipoProducto === "1") {
      productoId = Number(prompt(`Seleccione el mouse que desea comprar:
      1. Logitech G502 SE HERO
      2. Razer Basilisk X
      3. Razer DeathAdder
      4. Mars Gaming MM018`));
      productoSeleccionado = buscarOpcion(productos[0].opciones, productoId);
    } else if (tipoProducto === "2") {
      productoId = Number(prompt(`Seleccione el teclado que desea comprar:
      1. Logitech G513
      2. Razer Huntsman Elite
      3. HyperX Alloy Elite
      4. Corsair K70 RGB`));
      productoSeleccionado = buscarOpcion(productos[0].opciones, productoId);
      
    } else if (tipoProducto === "3") {
      productoId = Number(prompt(`Seleccione el mousepad que desea comprar:
      1. Perixx DX-1000
      2. Razer Vespula
      3. Roccat Taito Control
      4. Turtle Beach Drift`));
      productoSeleccionado = buscarOpcion(productos[1].opciones, productoId);
    } else {
      productoId = Number(prompt(`Seleccione los audífonos que desea comprar:
      1. SteelSeries Arctis
      2. Razer Kraken Tournament Edition
      3. Budget Gaming
      4. Open-Back Gaming`));
      productoSeleccionado = buscarOpcion(productos[2].opciones, productoId);
    }

    if (productoSeleccionado) {
      break;
    } else {
      alert("Producto inválido, por favor seleccione un producto válido.");
    }
  }

  // Obtener la cantidad de productos que desea comprar
  let cantidad;
  while (true) {
    cantidad = Number(prompt("Ingrese la cantidad que desea comprar:"));
    if (Number.isInteger(cantidad) && cantidad > 0) {
      break;
    } else {
      alert("Cantidad inválida, por favor ingrese una cantidad válida.");
    }
  }

  // Mostrar el detalle de la compra
  const total = cantidad * productoSeleccionado.precio;
  mostrarDetalleCompra(productoSeleccionado, cantidad, total);

  alert("En breve te contactará un vendedor para finalizar tu compra.");
}

else if (opcion === "2" || opcion.toLowerCase() === "estado de compra") {
  const pedido = prompt("Por favor ingrese su número de pedido:");
  alert(`El pedido número ${pedido} está listo para ser recogido.`);
  
} else if (opcion === "3" || opcion.toLowerCase() === "soporte") {
  alert("Por favor envía un correo a soporte@tienda.com para recibir ayuda.");
} else {
  alert(`Para obtener soporte técnico, por favor envíe un correo electrónico a soporte@ejemplo.com o llame al número 123-456-7890.`);
}