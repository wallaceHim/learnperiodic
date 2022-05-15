/*========================================
POPUP TUTORIAL
========================================*/
//initialize popup modal
$('.inline').modaal({
    start_open: true,
    hide_close: true
});

//close button for modal
$('.modal_close').click(function(){
    $('.modaal-inner-wrapper').trigger('click');
});
   
/*========================================
NAVIGATION BAR
========================================*/
//Default Bootstrap Script
$(function() {
			$('#mainNav a').on('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
				}, 1500, 'easeInOutExpo');
				return false;
			});

			// Activate scrollspy to add active class to navbar items on scroll
			$('body').scrollspy({
				target: '#mainNav'
			});

			// Closes responsive menu when a link is clicked
			$('.navbar-collapse>div>a').click(function() {
				$('.navbar-collapse').collapse('hide');
			});
		});

var isOpened = 0; //state of hidden content, closed by deafult
        
//Change NavBar background when content is opened
function expandNavContent(event){
    //Add navbar background: clicking navbar-toggler button (i.e. opening the menu)
    if(event.name != "linkClick" && isOpened == 0){
        isOpened = 1;
        event.name = "btnClick";
        $("#mainNav").addClass('contentActivated'); //add CSS class 
    } 
    //remove navbar background: clicking navbar-toggler button (i.e. closing the menu)
    else if(event.name == "btnClick" && isOpened ==1){
        isOpened = 0;
        event.name = "btnUnclick";
        $("#mainNav").removeClass('contentActivated'); //remove CSS class
    }
    
    //remove navbar background: clicking menu links (i.e. closing the menu)
    else if(event.name != "Click" && isOpened == 1){
        isOpened = 0;
        event.name = "linkClick";
        $("#mainNav").removeClass('contentActivated'); //remove CSS class
    } 
}

//assign background image to menu card
var cardList = document.querySelectorAll(".menu_card[data-image]");
for (var i = 0; i < cardList.length; i++) {
    var src = cardList[i].getAttribute('data-image');
    cardList[i].style.backgroundImage="url('" + src + "')";
}