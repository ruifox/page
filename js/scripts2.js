$(document).ready(function(){ 


var enterparameteres = anime.timeline({});

enterparameteres
  .add({
    targets: '.logotipo',
	top:25, 
	left: '4%',
    duration: 3000,
	offset: 500
  })
  .add({
    targets: '.nav-masthead',    
   	top:25, 
	right:'4%' ,
    duration: 3000,
    offset: 500
  })
  .add({
    targets: '.qut1',
    translateX: '-84%' ,  
	translateZ: .4,
	scale : .6,
	rotate: -8,
    duration: 3000,
    offset: 1000
  })
  .add({
    targets: '.qut2',
    translateX:  '70%',  
	translateZ: .4,
	scale : .6,
	rotate: 10,
    duration: 3000,
    offset: 1000
  });


	
	$(function() {	  
	    var form = $('#ajax-contact');
	
	    var formMessages = $('#form-messages');
	
		$(form).submit(function(event) {
		 event.preventDefault();		   
		var formData = $(form).serialize();	
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		}).done(function(response) {
		    alert('Sucesso no envio!');
		
		    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#message').val('');
		}).fail(function(data) {
		    alert('ERRO/FALHA no envio');
		   
		});
		return false;	
		});
	});
	
	
	
});

//Menu fixo, e activar menu com base na secção

$(function(){
	var menu_top = $(".main_menu").offset();	
	var section_1 = $(".about").offset().top;
	var section_2 = $(".information").offset().top;
	var section_3 = $(".contact").offset().top;
	
	
	$(document).on('scroll', function(){
		var scroll_pos = $(document).scrollTop();		
		
		if(scroll_pos > menu_top.top){
			$(".main_menu").addClass("menu_fixed");
		}else{
			$(".main_menu").removeClass("menu_fixed");
		}
	});
	
	
	$(document).on('scroll', function(){
		var scroll_pos = $(document).scrollTop();
		var activeSection = 0;
		if(scroll_pos == 0){
			$(".nav-masthead>a:nth-child(1)").removeClass('active');
			$(".logo_text").removeClass("not_logo_text");
			$(".logo_img").addClass("not_logo_img");
		}else if(scroll_pos < section_1){
			activeSection = $(".nav-masthead>a:nth-child(1)");
			$(".logo_img").removeClass("not_logo_img");
			$(".logo_text").addClass("not_logo_text");
		}else if(scroll_pos < section_2){
			activeSection = $(".nav-masthead>a:nth-child(2)");
		}else{
			activeSection = $(".nav-masthead>a:nth-child(3)");
		}
		if(activeSection == 0){
			$('.nav-masthead>a').not(activeSection).removeClass('active');
		}else{
			activeSection.addClass('active');
			$('.nav-masthead>a').not(activeSection).removeClass('active');
		}
		
		
	});
	
});

//animar transição
$('.nav-link').click(function(e){
   // prevent default action
   e.preventDefault();
   
   // get id of target div (placed in href attribute of anchor element)
   // and pass it to the scrollToElement function
    // also, use 2000 as an argument for the scroll speed (2 seconds, 2000 milliseconds)
   scrollToElement( $(this).attr('href'), 2000 );
});

var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}



//abrir fechar menu mobile
function mm_abrir() {
    document.getElementById("menu_mobile").style.width = "100%";
}

function mm_fechar() {
    document.getElementById("menu_mobile").style.width = "0%";
}

