jQuery(document).ready(function($) {

  // Inicializar sonido
  const sonidoPagina = new Howl({
    src: ['sounds/pasar-pagina.mp3'],
    volume: 0.7
  });

  // Inicializar el libro
  const revista = $("#revista").booklet({
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
    autoplay: false,

    // 🔊 Reproducir sonido cada vez que se pasa una página
    next: function() {
      sonidoPagina.play();
    },
    prev: function() {
      sonidoPagina.play();
    }
  });

});
