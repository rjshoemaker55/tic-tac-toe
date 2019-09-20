$('#error-display').hide();
$('#winner-display').hide();
$('#play-again').hide();

const checkWin = () => {
  let boxOneCheck = $('#box-1').data('checked');
  let boxTwoCheck = $('#box-2').data('checked');
  let boxThreeCheck = $('#box-3').data('checked');
  let boxFourCheck = $('#box-4').data('checked');
  let boxFiveCheck = $('#box-5').data('checked');
  let boxSixCheck = $('#box-6').data('checked');
  let boxSevenCheck = $('#box-7').data('checked');
  let boxEightCheck = $('#box-8').data('checked');
  let boxNineCheck = $('#box-9').data('checked');

  console.clear();
  console.log(`boxOneCheck: ${boxOneCheck}`)
  console.log(`boxTwoCheck: ${boxTwoCheck}`)
  console.log(`boxThreeCheck: ${boxThreeCheck}`)
  console.log(`boxFourCheck: ${boxFourCheck}`)
  console.log(`boxFiveCheck: ${boxFiveCheck}`)
  console.log(`boxSixCheck: ${boxSixCheck}`)
  console.log(`boxSevenCheck: ${boxSevenCheck}`)
  console.log(`boxEightCheck: ${boxEightCheck}`)
  console.log(`boxNineCheck: ${boxNineCheck}`)

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
  }
}

const checkBox = (e) => {

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

$(document.body).on('click', '.boxes', checkBox);

const winGame = () => {
  $('#winner-display').show();
  $(document.body).off('click', '.boxes', checkBox);
  $('#play-again').show();
};

$('#play-again').on('click', () => {
  for (i = 1; i < 10; i++) {
    $('#box-' + i).data('checked', false).removeClass('red-box');

    const boxData = $('#box-' + i).data('checked');
    console.log(`Box ${i}: ${boxData}`)
  };

  $('#play-again').hide();
  $('#winner-display').hide();
  $(document.body).on('click', '.boxes', checkBox);
});

