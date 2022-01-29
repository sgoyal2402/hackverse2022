AOS.init({ duration: 600, anchorPlacement: "center-bottom" });

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

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


$(window).on("load", function () {
  if(document.createStyleSheet) {
//@import url("https://codepen.io/DXC/pen/6e5e17a21aa0f1f0df762d0c800aee8b.css");
    document.createStyleSheet("https://codepen.io/DXC/pen/6e5e17a21aa0f1f0df762d0c800aee8b.css")
  }
  else {
    $("head").append($("<link rel='stylesheet' href='https://codepen.io/DXC/pen/6e5e17a21aa0f1f0df762d0c800aee8b.css' type='text/css' media='screen' />"));
  }
})