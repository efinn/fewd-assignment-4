$(document).ready(function(){ //show and hide readmore and readless
	$(".readless").hide();
    $(".readmore").click(function(){
    	event.preventDefault();
        $("p.readmore").hide();
        $("p.readless").show();
        $("p#show-on-click").slideDown();
    });
    $(".readless").click(function(){
    	event.preventDefault();
        $("p.readmore").show();
        $("p.readless").hide();
        $("p#show-on-click").slideUp();

    });
    $(".learnmore").click(function(){
    	event.preventDefault();
        $("span.hide").show();
        $(".learnmore").hide();
        $("span.hide").slideDown();

    });

    
});