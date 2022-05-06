// JavaScript Document

$(document).ready(function () {

	
	
  $(function () {
    $(document).scroll(function () {
      var $nav = $("#masthead");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
	$(".anchorLinks").click(function(){
		$("html,body").animate({scrollTop:$(this.hash).offset().top} , 500);
	});

  $(".flexslider").flexslider({

    animation: "slide",
	
    controlNav: false
  })

$(".gallery").fancybox({
	toolbar:false
});
  //Smooth Scrolling Acnhor Links


  $("#portfolioNav a:not(:first)").addClass("inactive");

  // Hide All tabs and show the first
  $(".tabContent").hide();
  $(".tabContent:first").show();

  // Photo Gallery nav click, show tab
  $("#portfolioNav a").click(function () {
    // Grab data-tab value, store as variable
    var tabId = $(this).attr("data-tab");

    // If the nav button is inactive, do the following
    if ($(this).hasClass("inactive")) {
      // Add class inactive to all nav links, remove from clicked
      $("#portfolioNav a").addClass("inactive");
      $(this).removeClass("inactive");
      // Hide all tabContent, show clicked
      $(".tabContent").hide();
      $("#" + tabId).fadeIn("slow");
    }


  });
  //Show and hide services list
  $("#learnMore").click(function () {
    //Show and hide services list
    $("#learnMore i").toggleClass("fa-chevron-down fa-chevron-up");
    $("#servicePoints").fadeToggle();

  })
});
