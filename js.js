(function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$(document).ready(main);
var contador = 1;

function main() {
    $('.menu-bar').click(function(){
        if(contador==1){
            $('.menu').animate({
              left= '0' 
    });
            contador=0;
        }else{
            contador=1;
           $('.menu').animate({
              left= '-100%'            
    });
    }
    });
};
