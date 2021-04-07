 $('.one').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     arrows: true,
     fade: false,
     adaptiveHeight: false,
     infinite: false,
     useTransform: true,
     speed: 400,
     cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });

 $('.two')
     .on('init', function(event, slick) {
         $('.two .slick-slide.slick-current').addClass('is-active');
     })
     .slick({
         slidesToShow: 7,
         slidesToScroll: 1,
         dots: false,
         focusOnSelect: false,
         infinite: false,
         responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 6,
                 slidesToScroll: 5,
             }
         }, {
             breakpoint: 768,
             settings: {
                 slidesToShow: 5,
                 slidesToScroll: 4,
             }
         }, {
             breakpoint: 640,
             settings: {
                 slidesToShow: 4,
                 slidesToScroll: 3,
             }
         }, {
             breakpoint: 420,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 2,
             }
         }]
     });

 $('.one').on('afterChange', function(event, slick, currentSlide) {
     $('.two').slick('slickGoTo', currentSlide);
     var currrentNavSlideElem = '.two .slick-slide[data-slick-index="' + currentSlide + '"]';
     $('.two .slick-slide.is-active').removeClass('is-active');
     $(currrentNavSlideElem).addClass('is-active');
 });

 $('.two').on('click', '.slick-slide', function(event) {
     event.preventDefault();
     var goToSingleSlide = $(this).data('slick-index');

     $('.one').slick('slickGoTo', goToSingleSlide);
 });