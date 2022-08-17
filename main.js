import './style.scss'
import * as bootstrap from 'bootstrap';
import './vendor/slick-1.8.1/slick/slick.min';


 $(document).ready(function(){
     $('.multiple-items').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 1500,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 5,
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 3
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 2
                 }
             }

         ]
     });
});

 let carAni = document.getElementById('carAni');

 window.addEventListener('scroll',function (){
     let value = this.scrollY;

     // console.log(value);

     carAni.style.top = (value-2000) * 0.2 + 'px';
 })



