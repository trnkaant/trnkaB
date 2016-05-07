(function ($) {
    var navbar = $('.navbar-nav');
    var navLink = navbar.find('a');
    var menu = $('.navbar-brand');
    navLink.on('click',function (event) {
      console.log("Hello");

      $('html,body').animate({ scrollTop: $(this.hash).offset().top-50},1000,"easeInOutQuint");
      event.preventDefault();
    });

    menu.on('click',function (event) {
      $('html, body').animate({ scrollTop: 0});
      event.preventDefault();
    });

})(jQuery);
