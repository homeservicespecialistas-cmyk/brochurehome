.ready(function() { 
    
    // 1. Activa la revista (Animación, Sombras y Navegación)
    .booklet({
        width: 1000, 
        height: 600, 
        speed: 800,
        autoCenter: true
    });

    // 2. Carga el audio (Sonido de Pasar Página)
    var flipSound = new Howler.Howl({
        src: ['sounds/pasar-pagina.mp3']
    });

    // 3. Conecta el audio al evento de pasar página
    .bind("change", function(event, data) {
        flipSound.play();
    });

});
