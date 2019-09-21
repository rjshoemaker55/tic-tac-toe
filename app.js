$('#error-display').hide();
$('#winner-display').hide();
$('#play-again').hide();


// Starts event listener
const start = () => {
  $(document.body).on('click', '.boxes', checkBoxUser);
}


// Checks if a square has already been taken, if not adds color and data-checked attribute
const checkBoxUser = (e) => {
  if ($(e.target).data('checked')) {
    $('#error-display').show();
    $('#error-display').text('That box is already taken!');
    return;
  } else {
    $('#error-display').hide();
    $(e.target).addClass('red-box').data('checked', true);
    return checkWin();
  };
};

// Checks if the user has 3 boxes in a row
const checkWinUser = () => {
  let boxOneCheck = $('#box-1').data('checked');
  let boxTwoCheck = $('#box-2').data('checked');
  let boxThreeCheck = $('#box-3').data('checked');
  let boxFourCheck = $('#box-4').data('checked');
  let boxFiveCheck = $('#box-5').data('checked');
  let boxSixCheck = $('#box-6').data('checked');
  let boxSevenCheck = $('#box-7').data('checked');
  let boxEightCheck = $('#box-8').data('checked');
  let boxNineCheck = $('#box-9').data('checked');

  if (
  (boxOneCheck && boxTwoCheck && boxThreeCheck) ||
  (boxOneCheck && boxFourCheck && boxSevenCheck) ||
  (boxOneCheck && boxFiveCheck && boxNineCheck) ||
  (boxTwoCheck && boxFiveCheck && boxEightCheck) ||
  (boxThreeCheck && boxSixCheck && boxNineCheck) ||
  (boxThreeCheck && boxFiveCheck && boxSevenCheck) ||
  (boxFourCheck && boxFiveCheck && boxSixCheck) ||
  (boxSevenCheck && boxEightCheck && boxNineCheck) 
  ) {
    return winGame();
  };
};


// Displays win banner and shows the play again button.
const winGame = () => {
  $('#winner-display').show();
  $(document.body).off('click', '.boxes', chechBoxUser);
  $('#play-again').show();
};


// Resets game board and turns on click listener back on
$('#play-again').on('click', () => {
  for (i = 1; i < 10; i++) {
    $('#box-' + i).data('checked', false).removeClass('red-box');
    const boxData = $('#box-' + i).data('checked');
  };

  $('#play-again').hide();
  $('#winner-display').hide();
  $(document.body).on('click', '.boxes', checkBoxUser);
});

start();

