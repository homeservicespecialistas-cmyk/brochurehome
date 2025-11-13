$(function() {
  var book = $('#book').bookblock({
    speed: 900,
    shadowSides: 0.6,
    shadowFlip: 0.3
  });

  $('#next').on('click', function() {
    book.bookblock('next');
    return false;
  });

  $('#prev').on('click', function() {
    book.bookblock('prev');
    return false;
  });
});
