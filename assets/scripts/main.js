

require('jquery')
require('slick-carousel')
require('popper.js')
require('bootstrap')

// sticky menu
var head = document.getElementById('head');
    window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        head.classList.remove('fixed-top');
        head.classList.add('fixed-tran');
    }
    else {
        head.classList.remove('fixed-tran');
        head.classList.add('fixed-top');
    }
});


// Client Slide
$('.client-carou').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    margin:10,
    prevArrow: "<button type='button' class='btn-prev'><i class='fas fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='btn-next'><i class='fas fa-chevron-right'></i></button>",
    responsive: [
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });