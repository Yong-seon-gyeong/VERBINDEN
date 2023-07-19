//hamberger_btn작동하기
var burger = $('.menu-trigger');

burger.each(function (index) {
    var $this = $(this);

    $this.on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active-' + (index + 1));
        $('.m_menu').css('margin-right', $(this).hasClass('active-' + (index + 1)) ? '0' : '100vw');

        $('body').toggleClass('menu-open');

    });
});

$('.m_menu li a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('.m_menu').css('margin-right', '100vw');

    setTimeout(function () {
        window.location.href = target;
    }, 500);
});

$('.m_menu li a').on('click', function () {
    $('.menu-trigger').toggleClass('active-1');
    $('body').removeClass('menu-open');
});

//search_btn작동하기
$('.search_bar').hide()
$('.search_btn').click(function () {
    if ($('.search_bar').is(':visible')) {
        $('.search_bar').slideUp();
    } else {
        $('.search_bar').slideDown();
    }
});
$(document).click(function (e) {
    if (!$('.search_bar').is(e.target) && !$('.search_btn').is(e.target) && !$('.search_btn').has(e.target).length && !$('.search_bar').has(e.target).length) {
        $('.search_bar').slideUp();
    }
});


// collections more_btn 작동하기

$(window).on('resize', function (){
    if ($(window).width() > 1303) {
        $('.grid-item').show();
    }
    else{
        if ($(window).width() <= 1303 && $(window).width() >= 550) {
            $('.grid-item:nth-child(n+5)').hide();
            $('.grid-item:nth-child(-n+4)').show();
        }
        if ($(window).width()<= 583) {
            $('.grid-item:nth-child(n+3)').hide();
            }
    }
});

$(window).trigger('resize');


$(window).resize(function () {
    showGridItems();
});

$('.more_btn').click(function () {
    if ($(window).width() < 1321) {
        if ($(window).width() < 583) {
            $('.collections .grid-item:hidden').slice(0, 1).toggle();
        } else {
            $('.collections .grid-item:hidden').slice(0, 2).toggle();
        }
    }
});

//scroll_top_btn 적용하기
$('.scroll_top').hide();
$(window).scroll(function(){
    var height = $(window).scrollTop();
    if(height >200){
        $('.scroll_top').fadeIn(0)
    }
    else{
        $('.scroll_top').fadeOut(0);
    }
});
$('.scroll_top').click(function(){
    $(window).scrollTop(0) ;
});
