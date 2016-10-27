/*Da Popup splashpage*/
jQuery(document).ready(function(){
    jQuery('#popup-container a.close').click(function(){
        jQuery('#popup-container').fadeOut();
        jQuery('#active-popup').fadeOut();
    });

    var visits = jQuery.cookie('visits') || 0;
    visits++;

    jQuery.cookie('visits', visits, { expires: 1, path: '/' });

    console.debug(jQuery.cookie('visits'));

    if ( jQuery.cookie('visits') > 100 ) {
        jQuery('#active-popup').hide();
        jQuery('#popup-container').hide();
    } else {
        var pageHeight = jQuery(document).height();
        jQuery('<div id="active-popup"></div>').insertBefore('body');
        jQuery('#active-popup').css("height", pageHeight);
        jQuery('#popup-container').show();
    }

    if (jQuery.cookie('noShowWelcome')) { jQuery('#popup-container').hide(); jQuery('#active-popup').hide(); }
});
/*Accordian*/

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

        //Expand or collapse this panel
        $(this).next().slideToggle('fast');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');

    });
});
/*Pop-Up*/
jQuery(document).mouseup(function(e){
    var container = jQuery('#popup-container');

    if( !container.is(e.target)&& container.has(e.target).length === 0)
    {
        container.fadeOut();
        jQuery('#active-popup').fadeOut();
    }

});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    console.log(document.getElementById("mySidenav").style.width);
    if(document.getElementById("mySidenav").style.width == "0px" || document.getElementById("mySidenav").style.width == "")
    {
        document.getElementById("mySidenav").style.width = "25%";
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("map").style.width = "75%";
    }
    else{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("map").style.width = "100%";
    }

}





