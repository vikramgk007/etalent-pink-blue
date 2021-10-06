$("#navbar-btn-icon").click(function() {
  $("span.navbar-toggler-icon").toggleClass('clicked');
});

$('[data-aos]').parent().addClass('hideOverflowOnMobile');

// On Prog Title Click - Hide all prog-info, show the specified #prog-info
function showProgInfo(title, no) {
	$(".prog"+no+"-info").css("display", "none");
    $("#"+title+"-info").css("display", "flex");
	$(".prog"+no+"-img").css("display", "none");
	$("#"+title+"-img").css("display", "block");
}	

$(document).ready(function(){
  $("#all-prog").addClass("btn-rounded-white-select");
  $("#ntc-info, #pss-info, #ng-info, #iep-info, #pssfa-info").css("display","none");
  $("#ntc-img, #pss-img, #ng-img").css("display","none");
  $('[data-aos]').parent().addClass('hideOverflowOnMobile');
  
  // all, jsct, educators, employers, policymakers
  $("#all-prog").click(function(){
	// Show all
	$("#jsct").show();
    $("#educators").show();
	$("#employers").show();
	$("#policymakers").show();
	$("#lmi-map").show();
	$("#our-partners").show();
	// Add select class & remove it from others
	$("#all-prog").addClass("btn-rounded-white-select");
	$("#jsct-prog").removeClass("btn-rounded-white-select");
	$("#employers-prog").removeClass("btn-rounded-white-select");
	$("#educators-prog").removeClass("btn-rounded-white-select");
	$("#policymakers-prog").removeClass("btn-rounded-white-select");
	AOS.refresh();
  });
  
  $("#jsct-prog").click(function(){
	// Show & hide others
	$("#jsct").show();
    $("#educators").hide();
	$("#employers").hide();
	$("#policymakers").hide();
	$("#lmi-map").hide();
	$("#our-partners").hide();
	// Add select class & remove it from others
	$("#all-prog").removeClass("btn-rounded-white-select");
	$("#jsct-prog").addClass("btn-rounded-white-select");
	$("#employers-prog").removeClass("btn-rounded-white-select");
	$("#educators-prog").removeClass("btn-rounded-white-select");
	$("#policymakers-prog").removeClass("btn-rounded-white-select");
	AOS.refresh();
  });

  $("#employers-prog").click(function(){
	// Show & hide others
	$("#jsct").hide();
    $("#educators").hide();
	$("#employers").show();
	$("#policymakers").hide();
	$("#lmi-map").hide();
	$("#our-partners").hide();
	// Add select class & remove it from others
	$("#all-prog").removeClass("btn-rounded-white-select");
	$("#jsct-prog").removeClass("btn-rounded-white-select");
	$("#employers-prog").addClass("btn-rounded-white-select");
	$("#educators-prog").removeClass("btn-rounded-white-select");
	$("#policymakers-prog").removeClass("btn-rounded-white-select");
	AOS.refresh();
  });
  
  $("#educators-prog").click(function(){
	// Show & hide others
	$("#jsct").hide();
    $("#educators").show();
	$("#employers").hide();
	$("#policymakers").hide();
	$("#lmi-map").hide();
	$("#our-partners").hide();
	// Add select class & remove it from others
	$("#all-prog").removeClass("btn-rounded-white-select");
	$("#jsct-prog").removeClass("btn-rounded-white-select");
	$("#employers-prog").removeClass("btn-rounded-white-select");
	$("#educators-prog").addClass("btn-rounded-white-select");
	$("#policymakers-prog").removeClass("btn-rounded-white-select");
	AOS.refresh();
  });
  
  $("#policymakers-prog").click(function(){
	// Show & hide others
	$("#jsct").hide();
    $("#educators").hide();
	$("#employers").hide();
	$("#policymakers").show();
	$("#lmi-map").hide();
	$("#our-partners").hide();
	// Add select class & remove it from others
	$("#all-prog").removeClass("btn-rounded-white-select");
	$("#jsct-prog").removeClass("btn-rounded-white-select");
	$("#employers-prog").removeClass("btn-rounded-white-select");
	$("#educators-prog").removeClass("btn-rounded-white-select");
	$("#policymakers-prog").addClass("btn-rounded-white-select");
	AOS.refresh();
  });
  
});