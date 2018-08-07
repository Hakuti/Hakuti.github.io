// external js: flickity.pkgd.js

var $carousel = $('.carousel').flickity({
    initialIndex: 2
  });
  
  $('.button--append').on( 'click', function() {
    var $cellElems = $( makeCellHtml() + makeCellHtml() );
    $carousel.flickity( 'append', $cellElems );
  });
  
  var cellCount = 3;
  
  function makeCellHtml() {
    cellCount++;
    return '<div class="carousel-cell">' + cellCount + '</div>';
  }
  