AOS.init({ duration: 600, anchorPlacement: "center-bottom" });

      $(window).scroll(testScroll);
      var viewed = false;

      function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return elemBottom <= docViewBottom && elemTop >= docViewTop;
      }

      function testScroll() {
        if (isScrolledIntoView($(".milestone-number")) && !viewed) {
          viewed = true;
          $(".number-holder").each(function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 4000,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          });
        }
      }