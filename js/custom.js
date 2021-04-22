/*-------------------------------------------------------------------------------
  owlling
-------------------------------------------------------------------------------*/

$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

//toggle scroll menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //adjust menu background
    if (window.innerWidth < 768) {
        $('.sticky-navigation').removeClass('sticky-top').addClass('fixed-top');
    } else {
        $('.sticky-navigation').removeClass('fixed-top').addClass('sticky-top');
    }

    // adjust scroll to top
    if (scroll >= 600) {
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }
    return false;
});

// scroll top top
$('.scroll-top').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 300);
});


//update time 
function s(){
document.getElementById("updatetime").innerText = "⊙ 更新于2021年4月22日";
}

