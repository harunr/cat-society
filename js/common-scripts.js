$(function($){
    $(function(){
        
      /* 
        $('.hamberger').click(function () {
            $('body').toggleClass('nav-shown');
        })
        */
        
        $('#hamburger').click(function(){
            console.log('test');
            $('body').toggleClass('nav-shown');
        })


        if($('.different-slider-wrap').length){
            $('.different-slider-wrap').slick({
                arrows:false,
                autoplay: true,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },

                ]
            });
            $(window).on('resize', function () {
                $('#services-nav-slider').slick('resize');

            });
        }
        



        
      
        // Phone nav click function
    
       
    });
    // End the solutin card carousel
})(jQuery)

