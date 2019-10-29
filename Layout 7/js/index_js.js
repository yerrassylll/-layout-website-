$("#tab_item-f,#tab_item-s").not(":first").hide();
$(".wrapper .tab").click(function() {
	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$("#tab_item-f,#tab_item-s").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(document).ready(function() {
 
var owl = $(".reviews-carousel").owlCarousel({
    responsive:{
      0:{
        items:1
      },
      375:{
      	items:1
      },
      768:{
      	items:2
      },
      992:{
      	items:2
      },
      1025:{
      	items:3
      },
    }
  });
  owl.owlCarousel();
  $("#slider-controls-right").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $("#slider-controls-left").click(function() {
    owl.trigger("prev.owl.carousel");
  });
 
});

$(document).ready(function() {
 
var owl = $(".footer-carousel").owlCarousel({
    responsive:{
      0:{
        items:1
      },
      375:{
      	items:1
      },
      768:{
      	items:2
      },
      992:{
      	items:2
      },
      1025:{
      	items:5
      },
    }
  });
  owl.owlCarousel();
  $("#slider-controls-right").click(function() {
    owl.trigger("next.owl.carousel");
  });
  $("#slider-controls-left").click(function() {
    owl.trigger("prev.owl.carousel");
  });
 
});