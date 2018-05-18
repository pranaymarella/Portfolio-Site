$(document).ready(function() {
    var window_width = $(window).width();

    if (window_width > 800) {
        // Hide certain objects on page load
        $('.education_hider').slideUp();
        $('#school').slideUp();

        $('.skills_hider').slideUp();
        $('.languages').slideUp();
    }

    // typing animation
    (function($) {
      $.fn.writeText = function(content) {
          var contentArray = content.split(""),
              current = 0,
              elem = this;
          setInterval(function() {
              if(current < contentArray.length) {
                  elem.text(elem.text() + contentArray[current++]);
              }
          }, 80);
      };

    })(jQuery);

    // input text for typing animation
    $("#holder").writeText("Entrepreneur. Software Engineer.");

    // Push the body and the nav over by 285px over
    var main = function() {
      $('.fa-bars').click(function() {
        $('.nav-screen').animate({
          right: "0px"
        }, 200);

        $('body').animate({
          right: "285px"
        }, 200);
      });

      // Then push them back */
      $('.fa-times').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 200);

        $('body').animate({
          right: "0px"
        }, 200);
      });

      $('.nav-links a').click(function() {
        $('.nav-screen').animate({
          right: "-285px"
        }, 500);

        $('body').animate({
          right: "0px"
        }, 500);
      });
    };

    // Fullpage.js initalization
    $('#fullpage').fullpage({
        scrollBar: true,
        responsiveWidth: 800,
        navigation: true,
        navigationTooltips: ['home', 'education', 'skills', 'projects', 'contact'],
        anchors:['home', 'education', 'skills', 'projects', 'contact'],
        menu: '#Menu',
        fitToSection: false,

        afterLoad: function (anchorLink, index) {
            var loadedSection = $(this);

            if (window_width > 800) {
                if (index == 2) {
                    $('.education_hider').slideDown();
                    $('#school').delay(100).slideDown();
                } else {
                    $('.education_hider').slideUp();
                    $('#school').slideUp();
                }

                if (index == 3) {
                    $('.skills_hider').slideDown();
                    $('.languages').delay(100).slideDown();
                    $('.add_animation').delay(100).addClass('animated fadeInLeft');
                } else {
                    $('.skills_hider').slideUp();
                    $('.languages').slideUp();
                    $('.add_animation').removeClass('animated fadeInLeft');
                }
            }
        },
    });

    $(document).on('click', '#moveDown', function() {
        $.fn.fullpage.moveSectionDown();
    });

    $(document).on('click', '#home', function() {
        $.fn.fullpage.moveTo(1);
    });

    $(document).on('click', '#education', function() {
        $.fn.fullpage.moveTo(2);
        $('.uiuc').remove();
    });

    $(document).on('click', '#skills', function() {
        $.fn.fullpage.moveTo(3);
    });

    $(document).on('click', '#projects', function() {
        $.fn.fullpage.moveTo(4);
    });

    $(document).on('click', '#contact', function() {
        $.fn.fullpage.moveTo(5);
    });
});
