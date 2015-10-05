$(document).ready(function(){
	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	if( isMobile.any() ){
	    $(document).ready(function(){
			$("header").removeClass("attach");
		    $("header").css({height:500});

		    $(".team-member").toggleClass("hovered");
		    $(".team-member h4").css({"margin-top":"120px"});
		    $(".team-overlay").css({"background-color":"rgba(211, 35, 42, 0.5)"});
		    $("#team col.sm.4").css({"padding-left":"15px"});
		    $("#team col.sm.4").css({"padding-right":"15px"});

		});
	}
	else {
    	var screenHeight = $(window).height();
    	var screenWidth = $(window).width();
        if (screenWidth > 767) {
        	$("header").css({ height: screenHeight });
        }

        $("#team col.sm.4").css({"padding-left":"100px"});
		$("#team col.sm.4").css({"padding-right":"100px"});
	}
});