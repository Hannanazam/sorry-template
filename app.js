var get_name = prompt('Enter Yout Name');
$('.name_of_input').text(get_name);


function $hearts() {
    var heart = $('<div id="heart" />').css({
        'position': 'absolute',
        'top': '-50px'
      }).html('&#x2764;'),
      animationHeight = $(document).height(),
      animationWidth = $(document).width();
  
    setInterval(function() {
  
      var startPositionLeft = Math.random() * animationWidth,
        startPositionTop = Math.random() * animationHeight - 100,
        startOpacity = 0,
        duration = Math.random() * animationHeight + 5000,
        colHeart = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  
      heart.clone().appendTo('section.hero').css({
        left: startPositionLeft,
        top: startPositionTop,
        opacity: startOpacity,
        'color': colHeart
  
      }).animate({
          'opacity': 1
        },
        duration,
        'linear',
  
        function() {
          $(this).remove();
        });
  // this will count the amount of hearts, can remove later
      var divCount = $('div#heart').length;
  
      $('span').text(divCount);
  
    }, 100);
  
  }
  
  $hearts();
  