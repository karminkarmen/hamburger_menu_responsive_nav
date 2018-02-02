$(".mcBurger").click(function() {
    $(".topsandwich").toggleClass('topsandwichstart');
    $(".meat").toggleClass("hidden");
    $(".downsandwich").toggleClass("downsandwichstart");
});


var menu = document.querySelector('.menu'),
    menuTrigger = document.querySelector('.mcBurger'),
    mobile = window.matchMedia('(max-width: 450px)');

function mobileMatches(mobile) {
    if (mobile.matches) {
        onMobile();
    } else {
        onDesktop();
    }
}
mobileMatches(mobile);
mobile.addListener( mobileMatches );

menuTrigger.addEventListener( 'click', function(){
    menu.hidden = !menu.hidden;
});

function onMobile(){
    menu.hidden = true;
    menuTrigger.hidden = false;
}

function onDesktop(){
    menu.hidden = false;
    menuTrigger.hidden = true;
}