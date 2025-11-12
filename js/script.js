// Este código activa la revista y el audio una vez que la página está lista.
.ready(function() { 
    .booklet({
        width: 1000, 
        height: 600, 
        speed: 800,
        autoCenter: true
    });

    var flipSound = new Howler.Howl({
        src: ['sounds/pasar-pagina.mp3']
    });

    .bind("change", function(event, data) {
        flipSound.play();
    });

}); 
