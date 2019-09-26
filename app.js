// Starts event listener, sets box checked data to false, and hides errors/winner displays
const start = () => {
  for (i = 1; i < 10; i++) {
    $('#box-' + i).data('checked', false).removeClass('red-box');
  };
  $('#play-again').hide();
  $('#winner-display').hide();
  $('#error-display').hide();
  pickBoxUser();
};

// Check which boxes are checked already and assign them variables
const boxCheck = () => ({
  boxOneCheck: $('#box-1').data('checked'),
  boxTwoCheck: $('#box-2').data('checked'),
  boxThreeCheck: $('#box-3').data('checked'),
  boxFourCheck: $('#box-4').data('checked'),
  boxFiveCheck: $('#box-5').data('checked'),
  boxSixCheck: $('#box-6').data('checked'),
  boxSevenCheck: $('#box-7').data('checked'),
  boxEightCheck: $('#box-8').data('checked'),
  boxNineCheck: $('#box-9').data('checked')
});

const pickBoxUser = () => {
  $(document.body).on('click', '.boxes', checkBoxUser);
}

// Checks if a square has already been taken, if not adds color and data-checked attribute
const checkBoxUser = (e) => {
  if ($(e.target).data('checked') !== false) {
    console.log($(e.target).data('checked'))
    $('#error-display').show();
    $('#error-display').text('That box is already taken!');
    return;
  } else {
    $('#error-display').hide();
    $(e.target).addClass('red-box').data('checked', 'user');
    return checkWinUser();
  };
};

const pickBoxComp = () => {
  $(document.body).off('click', '.boxes', checkBoxUser);
  let boxOneRating = 0;
  let boxTwoRating = 0;
  let boxThreeRating = 0;
  let boxFourRating = 0;
  let boxFiveRating = 0;
  let boxSixRating = 0;
  let boxSevenRating = 0;
  let boxEightRating = 0;
  let boxNineRating = 0;

  let {
    boxOneCheck,
    boxTwoCheck,
    boxThreeCheck,
    boxFourCheck,
    boxFiveCheck,
    boxSixCheck,
    boxSevenCheck,
    boxEightCheck,
    boxNineCheck
  } = boxCheck();

  const boxArray = [
    boxOneCheck,
    boxTwoCheck,
    boxThreeCheck,
    boxFourCheck,
    boxFiveCheck,
    boxSixCheck,
    boxSevenCheck,
    boxEightCheck,
    boxNineCheck
  ];
  
  console.log('computers turn')
  pickBoxUser();
};

// const checkedBoxArray = boxArray.filter(box === )

// Checks if the user has 3 boxes in a row
const checkWinUser = () => {
  let {
    boxOneCheck,
    boxTwoCheck,
    boxThreeCheck,
    boxFourCheck,
    boxFiveCheck,
    boxSixCheck,
    boxSevenCheck,
    boxEightCheck,
    boxNineCheck
  } = boxCheck();

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
  } else {
    return pickBoxComp();
  }
};

// Displays win banner and shows the play again button.
const winGame = () => {
  $('#winner-display').show();
  $(document.body).off('click', '.boxes', checkBoxUser);
  $('#play-again').show();
};


// Resets game board and turns on click listener back on
$('#play-again').on('click', () => {
  start();
});

start();

