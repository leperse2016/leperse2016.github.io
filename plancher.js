


var scene = document.querySelector('a-scene');




	



 
   
 <!-- le plancher -->

for (j = 0; j < 11; j++) {

  for (i = 0; i < 100; i++) {

   
  posx=-4 + (j*0.727272);
  posy=0.1;
  posz=0 + (-0.2*i); 
   
   var rad = 0.01;
  
 
		


 var sphere = document.createElement('a-sphere');    
     sphere.setAttribute('radius', rad.toString());
     sphere.setAttribute('color', "blue");
     sphere.setAttribute('opacity','1');
     sphere.setAttribute('position', posx.toString() + " " + posy.toString() + " " +  posz.toString());
  scene.appendChild(sphere);

}

 }
 
 


  
  
    
 


 

 
















