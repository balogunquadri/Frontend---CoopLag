

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
    

    $("#close-sign-up-btn-trigger").click(() => {
        $("#close-sign-up-btn-target").click();
        $("#call-sign-in-modal").click();
    });

    $("#close-sign-in-btn-trigger").click(() => {
        $("#close-sign-in-btn-target").click();
        $("#call-sign-up-modal").click();
    });

    $("#login-btn-call").click(() => {
        $("#call-sign-in-modal").click();
    })

    $("#slide-left").click(() => {
        $("#goLeft").click();
    });

    $("#slide-right").click(() => {
        $("#goRight").click();
    });


    ///////////modal switch///////////

    $("#openStepOneModal").click(() => {
        $("#createFairStepOne").modal('show');
    });

    $("#closeModal").click(() => {
        $("#createFairStepOne").modal('hide');
    });

    
    $("#goToStepTwo").click(() => {
        //$("#stepTwoLink").click();
        $("#home").removeClass("active");
        $("#stepOneLink").removeClass("active");
        $("#stepTwoLink").addClass("active");
        $("#menu1").addClass('active');
    });



    /*
    $("#goToStepThree").click(() => {
        $("#stepThreeLink").click();
    });

    $("#goBackToStepThree").click(() => {
        $("#stepOneLink").click();
    });

    */



})




function callSignUpModal(){
    $("#call-sign-up-modal").click();
}


var totalSib = document.getElementsByClassName('sib');
var i = 0;

setInterval(() => {  

    var textin = totalSib[i].innerHTML;
    totalSib[i].remove();   
    ///totalSib[i].slideUp();
    
    totalSib[i].style.color = "orange";
    var myBody = document.getElementById("body-text");
    var createText = document.createElement('h4');

    var att = document.createAttribute("class");       
    att.value = "sib";                           
    createText.setAttributeNode(att);

var textnode = document.createTextNode(textin);
        createText.appendChild(textnode);
        myBody.appendChild(createText);  

}, 2000);




var totalSib2 = document.getElementsByClassName('sib2');
var t = 0;
var cPlus2 = setInterval(() => {  
var textin2 = totalSib2[t].innerHTML;

 totalSib2[t].remove();   
   console.log(t);

totalSib2[t].style.color = "orange";
var myBody2 = document.getElementById("body-text2");
var createText2 = document.createElement('h5');
var att2 = document.createAttribute("class");       
        att2.value = "sib2";                           
        createText2.setAttributeNode(att2);
var textnode2 = document.createTextNode(textin2);
        createText2.appendChild(textnode2);
        myBody2.appendChild(createText2);  

}, 2000);







   

