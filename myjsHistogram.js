


var scene = document.querySelector('a-scene');


 




 
   
 <!-- le plancher -->

 for (j = 0; j < 20; j++) {
  for (i = 0; i < 12; i++) {

   
  posx=-22+(i*4);
  posy=-12;
  posz=-20+(j*-1); 
   
   var rad = 0.1;
  
 
		


 var sphere = document.createElement('a-sphere');    
    sphere.setAttribute('radius', rad.toString());
    sphere.setAttribute('color', "blue");
    sphere.setAttribute('opacity','1');
    sphere.setAttribute('position', posx.toString() + " " + posy.toString() + " " +  posz.toString());
  scene.appendChild(sphere);

}

 
 
 


  }
  
    
 


 

 
















