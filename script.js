$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:3,
        margin: 25,
        autoHeight:true,
        loop: true,
        nav:true,
        autoplay: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
});