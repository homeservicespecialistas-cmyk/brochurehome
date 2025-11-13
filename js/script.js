$(function() {
  // Inicializa el flipbook
  var $bookBlock = $('#bb-bookblock');
  $bookBlock.bookblock({
    speed: 800,
    shadowSides: 0.8,
    shadowFlip: 0.7
  });

  // Referencias a los botones
  var $navNext = $('#bb-nav-next');
  var $navPrev = $('#bb-nav-prev');

  // Funciones para moverse entre páginas
  function nextPage() {
    $bookBlock.bookblock('next');
  }

  function prevPage() {
    $bookBlock.bookblock('prev');
  }

  // Eventos de botones
  $navNext.off('click').on('click', function(e) {
    e.preventDefault();
    nextPage();
  });

  $navPrev.off('click').on('click', function(e) {
    e.preventDefault();
    prevPage();
  });

  // Soporte con teclado
  $(document).keydown(function(e) {
    var keyCode = e.keyCode || e.which,
        arrow = { left: 37, right: 39 };

    switch (keyCode) {
      case arrow.left:
        prevPage();
        break;
      case arrow.right:
        nextPage();
        break;
    }
  });
});
