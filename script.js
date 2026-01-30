$(document).ready(function () {

  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }

    if (this.scrollY > 400) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  $('.menu-btn').click(function () {
    $('.menu').toggle();
  });

  new Typed(".typing", {
    strings: [
      "IT Professional",
      "Web Developer",
      "Graphic Designer",
      "Full-Stack Developer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1000: { items: 3 }
    }
  });

});
