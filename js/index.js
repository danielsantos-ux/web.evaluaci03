function calcularTarifa() {
    var ruta = document.getElementById('ruta').value;
    var cantidadPasajes = parseInt(document.getElementById('cantidadPasajes').value);
    var tipoServicio = document.getElementById('tipoServicio').value;
    var metodoPago = document.getElementById('metodoPago').value;

    // Lógica para calcular tarifa
    var tarifaBase;
    switch (ruta) {
        case '1':
            tarifaBase = 100; // Tarifa base para Lima - Cusco
            break;
        case '2':
            tarifaBase = 120; // Tarifa base para Lima - Arequipa
            break;
        case '3':
            tarifaBase = 80;  // Tarifa base para Lima - Trujillo
            break;
        default:
            tarifaBase = 0;
            break;
    }

    // Aplicar el tipo de servicio
    switch (tipoServicio) {
        case 'vip':
            tarifaBase *= 1.10;
            break;
        case 'premium':
            tarifaBase *= 1.15;
            break;
        default:
            break;
    }

    // Aplicar descuento o recargo según el método de pago
    switch (metodoPago) {
        case 'efectivo':
            // Sin recargo ni descuento adicional
            break;
        case 'tarjeta':
            tarifaBase *= 1.05; // 5% de recargo por pago con tarjeta
            break;
        case 'paypal':
            tarifaBase *= 1.02; // 2% de recargo por pago con PayPal
            break;
        default:
            break;
    }

    // Aplicar descuento si hay más de 3 pasajes
    if (cantidadPasajes > 3) {
        tarifaBase -= tarifaBase * 0.1; // 10% de descuento
    }

    // Mostrar el resultado en la página
    var totalSoles = tarifaBase.toFixed(2);
    var totalDolares = (tarifaBase / 3.5).toFixed(2);

    document.getElementById('resultado').innerHTML = 'Total en Soles: <span class="resultado">' + totalSoles + '</span>';
    document.getElementById('resultadoDolares').innerHTML = 'Total en Dólares: <span class="resultado-dolares">' + totalDolares + '</span>';
}

        function calcularTarifa() {
            var ruta = document.getElementById('ruta').value;
            var cantidadPasajes = parseInt(document.getElementById('cantidadPasajes').value);
            var tipoServicio = document.getElementById('tipoServicio').value;

            // Lógica para calcular tarifa
            var tarifaBase;
            switch (ruta) {
                case '1':
                    tarifaBase = 100; // Tarifa base para Lima - Cusco
                    break;
                case '2':
                    tarifaBase = 120; // Tarifa base para Lima - Arequipa
                    break;
                case '3':
                    tarifaBase = 80;  // Tarifa base para Lima - Trujillo
                    break;
                default:
                    tarifaBase = 0;
                    break;
            }

            // Aplicar el tipo de servicio
            switch (tipoServicio) {
                case 'vip':
                    tarifaBase *= 1.10;
                    break;
                case 'premium':
                    tarifaBase *= 1.15;
                    break;
                default:
                    break;
            }

            // Aplicar descuento si hay más de 3 pasajes
            if (cantidadPasajes > 3) {
                tarifaBase -= tarifaBase * 0.1; // 10% de descuento
            }

            // Mostrar el resultado en la página
            var totalSoles = tarifaBase.toFixed(2);
            var totalDolares = (tarifaBase / 3.5).toFixed(2);

            document.getElementById('resultado').innerHTML = 'Total en Soles: <span class="resultado">' + totalSoles + '</span>';
            document.getElementById('resultadoDolares').innerHTML = 'Total en Dólares: <span class="resultado-dolares">' + totalDolares + '</span>';
        }

        function limpiarFormulario() {
            document.getElementById('formPasajes').reset();
            document.getElementById('resultado').innerHTML = '';
            document.getElementById('resultadoDolares').innerHTML = '';
        }

        function imprimir() {
            // Lógica para impresión, puedes usar el método print() de JavaScript
            window.print();
        }