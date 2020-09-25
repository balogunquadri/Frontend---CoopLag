

$(document).ready(() => {

    $("#visitors-btn").click(() => {
        $("#visitors-btn").removeClass("btn-outline-secondary");
        $("#visitors-btn").addClass("bg-secondary text-white");
        $("#shop-btn").removeClass("bg-secondary text-white");
        $("#shop-btn").addClass("btn-outline-secondary");  

        window.location = "index.html";
      
    });


    $("#shop-btn").click(() => {
        $("#visitors-btn").removeClass("bg-secondary text-white"); 
        $("#visitors-btn").addClass("btn-outline-secondary");
        $("#shop-btn").removeClass("btn-outline-secondary");
        $("#shop-btn").addClass("bg-secondary text-white");
        window.location = "vendor-shop.html";
    });

   
    $("#cart").click(() => {
        window.location = "cart.html";
    });
    
    $("#home").click(() => {
        window.location = "index.html";
    });

    $("#profile").click(() => {
        window.location = "profile.html";
    });

    $("#story").click(() => {
        window.location = "story.html";
    });

    $("#event").click(function() {
        window.location.assign("./event.html");
    });

    $("#shop-btn").click(() => {
        window.location.assign("./shop.html");
    });

    $("#visitor-btn").click(() => {
        window.location = "visitors.html";
    });

    $("#live-btn").click(() => {
        window.location = "index.html";
    });
    

    
    $('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		speed: 3000
	});


})

