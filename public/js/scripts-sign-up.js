$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function(){scroll(0,0)});


    $(".menu-toggler").click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{enabled:true}
    });

    $(".textbox input").focusout(function(){
        if($(this).val() == ""){
            $(this).siblings().removeClass("hidden");
            $(this).css("background","#554343");
        }
        else {
            $(this).siblings().addClass("hidden");
            $(this).css("background","#484848");
        }
    });

    $(".textbox input").keyup(function(){
        var inputs = $(".textbox input");
        if(inputs[0].value != "" && inputs[1].value){
            $(".login-btn").attr("disabled",false);
            $(".login-btn").addClass("active");
        }
        else{
            $(".login-btn").attr("disabled",true);
            $(".login-btn").removeClass("active");
        }
    });
});


