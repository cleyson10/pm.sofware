
function calcularTotal(precio, cantidad) {
    if (precio < 0 || cantidad < 0) {
        return "Error: valores negativos";
    }

    let total = precio * cantidad;
    return total;
}

console.log(calcularTotal(100, 3));
console.log(calcularTotal(50, 2));
console.log(calcularTotal(-10, 3));
