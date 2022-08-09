import './style.scss'
import * as bootstrap from 'bootstrap';
import './vendor/slick-1.8.1/slick/slick.min';


 $(document).ready(function(){
     $('.multiple-items').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 1500,
     });
});


