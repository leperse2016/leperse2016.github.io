var scene = document.querySelector('a-scene');
<!-- le plancher usa-->
for (i = 0; i < 11; i++) {
  for (j = 0; j < 9; j++) {   

   posx=-1.3 + (j*0.3);
   posy=0.05 + -1;
   posz=0 + (-.4*i) ;    

   var rad = 0.01;

  
  var sphere = document.createElement('a-sphere');    
     sphere.setAttribute('radius', rad.toString());
     sphere.setAttribute('color', "blue");
     sphere.setAttribute('opacity','1');
     sphere.setAttribute('position', posx.toString() + " " + posy.toString() + " " +  posz.toString());
  scene.appendChild(sphere);

   }
}



