
$(document).ready(function(){ 
		$("#formContact").submit(function(){
		
           event.preventDefault();
          
			$.post('../mail/action_page.php', $("#formContact").serialize(), function(respostaServidor){
				alert("Email enviado com sucesso");
			    document.getElementById("formContact").reset();
		});
		
		return false;
		
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