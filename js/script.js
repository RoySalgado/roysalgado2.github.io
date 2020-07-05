let boton= document.getElementById("icono");

let enlaces=document.getElementById("enlaces");

let contador=0;
boton.addEventListener("click", function(){
	if (contador==0) {
		enlaces.className=("enlaces dos")
		contador=1;
	}else{
		enlaces.classList.remove("dos")
		enlaces.className=("enlaces uno")
		contador=0;
	}
});

jQuery(document).ready(function(){
         
 $('.hero .owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    smartSpeed:500,
    dots:false   
  });
         
});