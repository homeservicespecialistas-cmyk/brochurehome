$(document).ready(function() { 
    
    // 1. Configuración y Activación de Booklet.js
    $("#revista").booklet({
        width: 1000, 
        height: 600, 
        speed: 800,
        pageNumbers: true, 
        arrows: true, 
        mouse: true, 
        closed: false, 
        autoCenter: true, 
        shadows: true, 
        overlays: true, 
        hover: true, 
        zoom: false,
        autoplay: false
    });

    // 2. Carga y Activación del Audio
    var flipSound = new Howler.Howl({
        src: ['sounds/pasar-pagina.mp3']
    });

    // 3. Conecta el audio al evento de pasar página
    $("#revista").bind("change", function(event, data) {
        flipSound.play();
    });

}); // <-- ESTA LÍNEA ES LA CORRECCIÓN CLAVE
