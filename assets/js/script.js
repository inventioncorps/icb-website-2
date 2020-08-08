// Make nav background white instead of transparent after scrolling
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      // $(".navbar-brand>img").attr("width","30px");
      // $(".navbar-brand>img").attr("height","30px");
    });
  });


$(document).ready(function () {
    // Update nav to show where you are
    $(document).on("scroll", onScroll);

    // var url = window.location;
    // $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
    // $('ul.nav a').filter(function() {
    //      return this.href == url;
    // }).parent().addClass('active');
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#navbarNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('navbar-nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

// Lightbox functionality for photo gallery
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

//Using basicScroll to create parallax scrolling on landing
document.querySelectorAll('.scene').forEach((elem) => {
  
  const modifier = elem.getAttribute('data-modifier')
  
  basicScroll.create({
    elem: elem,
    from: 0,
    to: 5000,
    direct: true,
    props: {
      '--translateY': {
        from: '0',
        to: `${ 10 * modifier }px`
      }
    }
  }).start()
    
});