$(document).ready(function(){
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
});


