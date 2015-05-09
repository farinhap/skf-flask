
/*---LEFT BAR ACCORDION----*/
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
//        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
});

var Script = function () {


//    sidebar dropdown menu auto scrolling

    jQuery('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if(diff>0)
            $("#sidebar").scrollTo("-="+Math.abs(diff),500);
        else
            $("#sidebar").scrollTo("+="+Math.abs(diff),500);
    });



//    sidebar toggle

    $(function() {
        function responsiveView() {
            var wSize = $(window).width();
            if (wSize <= 768) {
                $('#container').addClass('sidebar-close');
                $('#sidebar > ul').hide();
            }

            if (wSize > 768) {
                $('#container').removeClass('sidebar-close');
                $('#sidebar > ul').show();
            }
        }
        $(window).on('load', responsiveView);
        $(window).on('resize', responsiveView);
    });

    $('.fa-bars').click(function () {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });

// custom scrollbar
    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#515594", cursorwidth: '3', cursorborderradius: '10px', background: '#494949', spacebarenabled:false, cursorborder: ''});

    $("html").niceScroll({styler:"fb",cursorcolor:"#515594", cursorwidth: '6', cursorborderradius: '10px', background: '#494949', spacebarenabled:false,  cursorborder: '', zindex: '1000'});

// widget tools

    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });

    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });


//    tool tips

    $('.tooltips').tooltip();

//    popovers

    $('.popovers').popover();
	
	// Logo animation
	
	$("a.logo").mouseover(function() { 
		$(this).find('.img').addClass('fa-spin');
	}).mouseout(function() { 
		$(this).find('.img').removeClass('fa-spin');
	});
	
	// Menu active items
	
	$('#main-content.page02').each(function () { // Create new project
		$(this).parent().find('#sidebar .page01').addClass('active'); // Keep sub open
		$(this).parent().find('#sidebar .page02').addClass('act'); // Active
	});
	$('#main-content.page03').each(function () { // Create new project
		$(this).parent().find('#sidebar .page01').addClass('active'); // Keep sub open
		$(this).parent().find('#sidebar .page03').addClass('act'); // Active
	});
	$('#main-content.page05').each(function () { // Results
		$(this).parent().find('#sidebar .page04').addClass('active'); // Keep sub open
		$(this).parent().find('#sidebar .page05').addClass('act'); // Active
	});
	$('#main-content.page06').each(function () { // Results
		$(this).parent().find('#sidebar .page04').addClass('active'); // Keep sub open
		$(this).parent().find('#sidebar .page06').addClass('act'); // Active
	});
	$('#main-content.page07').each(function () { // Knowledge Base
		$(this).parent().find('#sidebar .page07').addClass('act'); // Active
	});
	$('#main-content.page08').each(function () { // Code Examples
		$(this).parent().find('#sidebar .page08').addClass('act'); // Active
	});
	
}();

$(document).ready(function() {

	$('.form-control').change(function(){
		$(this).parent().parent().toggleClass('checked', $(this).val() == 'yes');
		$(this).parent().parent().toggleClass('false', $(this).val() == 'no');
		$(this).parent().parent().toggleClass('exclude', $(this).val() == 'na');
	});

	// Page Transition
	
	$(".animsition").animsition({
		inClass               :   'fade-in',
		outClass              :   'fade-out',
		inDuration            :    1500,
		outDuration           :    800
	});	

	
	// Increase Readability
	
	$('.toggle').click(function() { 
		$(this).parent().parent().toggleClass('narrow');
		$(this).toggleClass('act');
	});
	
    $('input[name=search]').keyup(function () {
        var things = $("#accordion div.panel");
        var val = $(this).val();
        var regstr = val;
        var reg = new RegExp(regstr, 'i');
        things.each(function (i) {
            var match = $(this).text().match(reg) !== null;
            $(this).toggleClass('noMatch', !match);
        });
    });
	
	var $divs = $("div.panel");
    var orderedDivs = $divs.sort(function (a, b) {
        return $(a).find("h4").text() > $(b).find("h4").text();
    });
    $("#accordion").html(orderedDivs);	
	
});