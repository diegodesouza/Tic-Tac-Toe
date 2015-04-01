// Initialize current player as player 'x'
var currentPlayerToken = 'x';

$('.board').on('click', '.square', function(event) {
  // Select the square
  var $square = $(event.currentTarget);
  $square.addClass('square-' + currentPlayerToken);

  // Swap current player's token
  if (currentPlayerToken === 'x') {
    currentPlayerToken = 'o';
  } else {
    currentPlayerToken = 'x';
  }
});
