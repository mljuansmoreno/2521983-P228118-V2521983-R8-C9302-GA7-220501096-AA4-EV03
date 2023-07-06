function addToCart() {
  var precioText = document.getElementById("precio1").innerText;
  var precioNumber = precioText.replace(/[^0-9]/g, ''); // Extraer solamente el número del precio
  var url = "carrito.html?precio1=" + precioNumber;
  window.location.href = url; // Redireccionar a la página del carrito
}

// Get the precio value from the URL query parameter
var urlParams = new URLSearchParams(window.location.search);
var precioNumber = urlParams.get('precio1');

// Function to dynamically generate table rows
function generateTableRow(producto, precio1, cantidad) {
  var subtotal = precio1 * cantidad;
  
  var row = document.createElement("tr");
  var cellProducto = document.createElement("td");
  var cellPrecio = document.createElement("td");
  var cellCantidad = document.createElement("td");
  var cellSubtotal = document.createElement("td");
  
  cellProducto.innerText = producto;
  cellPrecio.innerText = "$" + precio1.toLocaleString(); // Add commas to the price
  cellCantidad.innerText = cantidad;
  cellSubtotal.innerText = "$" + subtotal.toLocaleString();
  
  row.appendChild(cellProducto);
  row.appendChild(cellPrecio);
  row.appendChild(cellCantidad);
  row.appendChild(cellSubtotal);
  
  return row;
}

// Retrieve product information from the previous page (index.html) and generate table row
var producto = "Producto"; // Replace with the actual product name from index.html
var cantidad = 1; // Replace with the actual quantity from index.html

var tableBody = document.querySelector("#carritoTable tbody");
var newRow = generateTableRow(producto, precioNumber, cantidad);
tableBody.appendChild(newRow);

// Calculate and update total subtotal
var totalSubtotal = precioNumber * cantidad;
var totalSubtotalElement = document.getElementById("totalSubtotal");
totalSubtotalElement.innerText = "$" + totalSubtotal.toLocaleString();
