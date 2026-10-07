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
  var students = ["ashley" ,"camila" ,"dana" ,"emma" ,"gyara" ,"ira" ,"jess" ,"jinan" ,"lance" ,"michael" ,"sage" ,"norman" ,"quinn" ,"rayna" ,"sade" ,"uzziah" ,"winnie" ,"zeynep"];
  // var students = [
  //   '<a href="https://www.figma.com/proto/rMyOrN0ZutZ45U4dUgXIlj/index?node-id=1-4&t=EpVNWXHdOkFGvvhS-1">ashley</a>',
  //   '<a href="https://www.figma.com/proto/QndKxCgWqmPOnQSjajMXui/Index---Camila-VL?node-id=1-9038&p=f&t=voUVoUgdk1rd4Ew4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1">camila</a>',
  //   '<a href="https://www.figma.com/proto/5mZ7j6POJcbspKnspzg1a6/Best_Index?node-id=4-2&t=0fNrrHsSgNVCUKQz-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A847&starting-point-node-id=4%3A2">dana</a>',
  //   '<a href="https://www.figma.com/proto/1a2YQKhlJzpOf04KQTp7xe/Index?node-id=1-1682&p=f&t=WJUcZS1S7gQCLnJu-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">emma</a>',
  //   '<a href="https://www.figma.com/proto/D7CPXaEqSnezeGWpV7Ndqx/Index?node-id=1-3&t=zMolfdXt0lRJZOwI-1&scaling=min-zoom&content-scaling=fixed&page-id=1%3A2&hide-ui=1">gyara</a>',
  //   '<a href="https://www.figma.com/proto/eM6LAv3waabnrekFT8wQmr/Project-Index?node-id=3-48&t=TFpypJhLBg817qdU-1">ira</a>',
  //   '<a href="https://www.figma.com/proto/HKN9K7fl4kFZhNsEixmFXQ/Index?node-id=1-4&p=f&t=84MLUKgegPHfwrD0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">jess</a>',
  //   '<a href="https://www.figma.com/proto/jM5tuODhFCX1olnf1NNEHJ/Index?node-id=1-2&t=5RTK2AaGXajI1xpy-1">jinan</a>',
  //   '<a href="https://www.figma.com/proto/oihCXM8MOl78SEEKE3SIzo/Index?node-id=1-2&p=f&t=0i6vSZCA0H79ieTl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2">lance</a>',
  //   '<a href="https://www.figma.com/proto/fbCsoC3JcQGKNhsWamn7lt/Index?node-id=2-3&t=jqnWBZpLOiu4RiZ7-1">michael</a>',
  //   '<a href="https://www.figma.com/proto/1ZiSYByJZMzD2cIqjwO23x/Index?node-id=1-2725&t=6GyibuS8jXtihd0u-1">norman</a>',
  //   '<a href="https://www.figma.com/proto/a1Y21Jg2rw00aU7shhTLJS/index?node-id=1-2&p=f&viewport=34%2C345%2C0.38&t=dopUUsD0TfX4e5EB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">quinn</a>',
  //   '<a href="https://www.figma.com/proto/WTMgbdgLK0o1JtcDQbWzpM/Index?node-id=2-2&t=gwDX5hkK7NxcDkBA-1">rayna</a>',
  //   '<a href="https://www.figma.com/proto/AJPDcVlRasDktNY6rKCx32/index?node-id=1-11&p=f&t=PuAG1jVu43yszGjZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">sade</a>',
  //   '<a href="https://www.figma.com/proto/IoQX2UfVdO2tsmatCdbWDp/Index?timeline=keyframe&node-id=1-2&p=f&t=QtFrBonNcaAreutB-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">sage</a>',
  //   '<a href="https://www.figma.com/proto/7x8w5BqzlSnMd6o8XMIxn6/Archive?node-id=1-7&t=ATswKjORgj9uAjLV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1">uzziah</a>',
  //   '<a href="https://www.figma.com/proto/i4AKL0uk7KxyTBeUNaJpw4/Archive?node-id=1-2&t=IWrg6lCWcF2WlQ6H-1">winnie</a>',
  //   '<a href="https://www.figma.com/proto/bGK1oKuz0R0j04WAQWWRTt/Zeynep-Acun-%E2%80%93-Semester-Index?node-id=1-2&t=VjKq2LCi1nEB1yke-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">zeynep</a>'
  // ]
  var y;
  $('#generate').click( function(){
    $('ol').empty()
    shuffle(students);
    for (y = 0; y < students.length; y++) {
      var html = '<li>' + (y + 1) + '. ' + students[y] + '</li>';
      $('#list').append(html);
    };
  });
  $('#list').on('click', 'li', function() {
    $(this).remove();
  });
}


