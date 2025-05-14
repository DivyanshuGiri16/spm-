$(document).ready(function() {
    // Fade in the hero text on page load
    $(".hero-text").hide().fadeIn(1500);

    // Smooth scrolling for navigation links
    $("nav a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var target = this.hash;
        $("html, body").animate({
          scrollTop: $(target).offset().top
        }, 800);
      }
    });

    // Enlarge the product card on hover
    $(".product").hover(
      function() {
        $(this).css("transform", "scale(1.05)");
      },
      function() {
        $(this).css("transform", "scale(1)");
      }
    );

    // Newsletter form submission handler
    $(".newsletter form").on("submit", function(event) {
      event.preventDefault();
      alert("Thank you for subscribing!");
      $(this).find("input[type='email']").val("");
    });
  });