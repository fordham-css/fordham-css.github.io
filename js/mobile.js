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
		    $("header").css({height:600});

		    $(".team-member").toggleClass("hovered");
		    $(".team-overlay").css({"padding-top":"15%"});
		    $("#team col.sm.4").css({"padding-left":"15px"});
		    $("#team col.sm.4").css({"padding-right":"15px"});

		});
	}
	else {
    	var screenHeight = $(window).height();
    	var screenWidth = $(window).width();
        if (screenWidth > 767) {
        	console.log("Hello!")
        	$("header").css({ height: screenHeight });
        	console.log("height changed!");
        }

        $("#team col.sm.4").css({"padding-left":"100px"});
		$("#team col.sm.4").css({"padding-right":"100px"});
	}
});