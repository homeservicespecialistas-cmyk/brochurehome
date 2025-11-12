.ready(function() { 
    
    .booklet({
        width: 1000, // Ancho de la revista
        height: 600, // Alto de la revista
        speed: 800, // Velocidad de la animación al pasar página
        pageNumbers: true, // Muestra los números de página
        pageSelector: false, // No muestra el selector de página
        arrows: true, // Muestra las flechas de navegación
        manual: false, // Las páginas se voltean con las flechas
        direction: 'ltr', // Dirección de lectura (left-to-right)
        next: '#revista .b-next', // Selector para el botón Siguiente
        prev: '#revista .b-prev', // Selector para el botón Anterior
        closed: false, // La revista empieza abierta
        autoCenter: true, // Centra la revista automáticamente
        menu: '#menu', // Si tienes un menú de navegación
        shadows: true, // Activa las sombras en las páginas
        overlays: true, // Activa los overlays (sombras en los bordes)
        hover: true, // Activa el efecto hover en las esquinas para voltear
        tabs: false, // No muestra las pestañas de navegación
        keyboard: true, // Permite usar las flechas del teclado para navegar
        mouse: true, // Permite hacer clic o arrastrar para voltear
        zoom: false, // Desactiva el zoom
        autoplay: false, // Desactiva la reproducción automática
        hovers: false // Desactiva los hovers por defecto
    });

    // Carga el audio
    var flipSound = new Howler.Howl({
        src: ['sounds/pasar-pagina.mp3']
    });

    // Conecta el audio al evento de pasar página
    .bind("change", function(event, data) {
        flipSound.play();
    });

});
