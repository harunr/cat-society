(function($){
    $(function(){
        
        
        $('#hamburger').click(function(){
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
                centerMode: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: true,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
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
        
        

        //contact page
        if($('#interest-items').length){
            $('#interest-items').selectric().on('change', function() {
                $selectValue.text($(this).val());
            });
        }

        if($('#way-to-hear').length){
            $('#way-to-hear').selectric().on('change', function() {
                $selectValue.text($(this).val());
            });
        }
        
        //why-learnfully
        if($('.margo-main').length){
            $('.margo-main').slick({
                arrows:false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 1500,
                speed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,

            });
            $(window).on('resize', function () {
                $('.margo-main').slick('resize');

            });
        }


        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > .accordion-heading").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-content").slideUp();
                if($this.find(".accordion-content:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-content").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-item .accordion-content").slideUp();
                    $this.find(" > .accordion-content").slideDown();
                }
            })
        })
        
        $('.learner-info-item-wrap').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay: false,
        });


        if ($('.get-started-content').length){
            $('body').addClass('get-started-page');
        }
        
    });
    // End the solutin card carousel
})(jQuery)