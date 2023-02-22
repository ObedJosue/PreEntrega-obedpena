let nombre = prompt("Hola, mi nombre es JARVIS, antes de poder ayudarte, me gustaría saber primero tu nombre");
let apellido = prompt("y tu apellido?");
let telefono = prompt("Por último, un número de teléfono");

let opcion;
while (true) {
  opcion = prompt("Bien " + nombre + ", ¿en qué puedo ayudarte?\n\n1. Comprar\n2. Estado de compra\n3. Soporte");
  if (opcion === "1" || opcion.toLowerCase() === "comprar" ||
      opcion === "2" || opcion.toLowerCase() === "estado de compra" ||
      opcion === "3" || opcion.toLowerCase() === "soporte") {
    break;
  } else {
    alert("Opción inválida, por favor seleccione una opción válida.");
  }
}

if (opcion === "1" || opcion.toLowerCase() === "comprar") {
  
  let producto;
  while (true) {
    producto = prompt("Seleccione el producto que desea comprar: \n\n1. Mouse \n2. Teclado \n3. Mousepads \n4. Audífonos");
    if (producto === "1" || producto === "2" || producto === "3" || producto === "4") {
      break;
    } else {
      alert("Producto inválido, por favor seleccione un producto válido.");
    }
  }

  let cantidad;
  while (true) {
    cantidad = prompt("Ingrese la cantidad que desea comprar:");
    if (Number(cantidad)) {
      break;
    } else {
      alert("Cantidad inválida, por favor ingrese un número válido.");
    }
  }

  let precio;
  if (producto === "1") {
    precio = 20;
    } else if (producto === "2") {
    precio = 40;
    } else if (producto === "3") {
    precio = 10;
    } else if (producto === "4") {
    precio = 30;
  }

  let total = precio * cantidad;

  alert("Detalle de compra:\n\nProducto: " + producto + "\nCantidad: " + cantidad + "\nPrecio unitario: $" + precio + "\nTotal: $" + total );
  alert("En breve te contactara un vendedor para finalizar tu compra.");


} 
else if (opcion === "2" || opcion.toLowerCase() === "estado de compra") {
  let pedido = prompt("Por favor ingresa tu número de pedido");
  alert("Tu pedido " + pedido + " está listo para ser recogido en nuestros depósitos");
}
else if (opcion === "3" || opcion.toLowerCase() === "soporte") {
  alert("En estos momentos nos encontramos actualizando nuestra plataforma. Para obtener ayuda, por favor escribe un correo electrónico a soporte@gmail.com o comunícate a nuestros números 5555-5555 o 7895-7899 de lunes a viernes de 8 a 17 horas.");
}
else {
  alert("Lo siento, opción inválida.");
}
