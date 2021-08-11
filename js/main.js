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


      
/* 
      let num_1=-10;
      let num_2=10;
      let num_3=-50;

      console.log("El mayor es: "+mayorMenor([num_1,num_2,num_3])[1])
      console.log("El menor es: "+mayorMenor([num_1,num_2,num_3])[0])
    function mayorMenor(arr){
        let menor=0;
        let mayor=0;
        arr.forEach(element => {
            if(element<menor){
                menor=element;
            }
            if(element>menor){
                mayor=element;
            }
        });
        return [menor,mayor]
    } */

});