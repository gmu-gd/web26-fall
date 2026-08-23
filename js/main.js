$(document).ready(function() {
    // run function on initial page load
    randomList();
    
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function randomList(){
  var students = ["Jules", "Anna", "Finn", "Claire", "Rayna", "Sung-Ho", "Patrick", "Jenn", "Jess", "Paul", "Alice", "Emily", "Isha", "CeCe", "Valerie", "Brendan"];
  var y;
  $('#generate').click( function(){
    $('ol').empty()
    shuffle(students);
    for (y = 0; y < students.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + students[y] + '</li>';
      $('#list').append(html);
    };
  });
}
