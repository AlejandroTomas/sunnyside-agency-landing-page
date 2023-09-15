document.addEventListener("DOMContentLoaded", function(){
    let vH=window.innerHeight;
    let active=false;
    document.getElementById('svg-nav').addEventListener('click',function(){

        if(active==false){
            document.getElementById('nav-responsive').style.display="flex"
            active=true;
        }else{
            document.getElementById('nav-responsive').style.display="none"
            active=false;
        }
    });

    window.onscroll = function() {
        var y = window.scrollY;
        if(y >vH){
            document.getElementsByClassName('go-top')[0].style.display="flex"
        }else{
            document.getElementsByClassName('go-top')[0].style.display="none"
        }

      };

});