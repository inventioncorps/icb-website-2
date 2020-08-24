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

// FullPage
var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'B0E530F8-0B8A4153-91BE1E37-7F6A6A9C',
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors: ['banner', 'content'],
	navigation: false,

	//Scrolling
	css3: true,
	scrollingSpeed: 1000,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopHorizontal: true,
	offsetSections: false,
	fadingEffect: false,
	scrollOverflow: true,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor: ['#FFFFFF', '#FFFFFF'],
	// fixedElements: '#footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {
		type: 'reveal',
		percentage: 62,
		property: 'translate'
	},
	cards: false,
	cardsOptions: {
		perspective: 100,
		fadeContent: true,
		fadeBackground: true
	},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function (origin, destination, direction) {},
	afterLoad: function(origin, destination, direction){
		var loadedSection = this;

	},
	afterRender: function () {},
	afterResize: function (width, height) {},
	afterReBuild: function () {},
	afterResponsive: function (isResponsive) {},
	afterSlideLoad: function( section, origin, destination, direction){},
	onSlideLeave: function (section, origin, destination, direction) {}
});