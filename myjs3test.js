


var scene = document.querySelector('a-scene');


 for (j = 0; j < 2; j++) {
 
  for (i = 0; i < 27; i++) {

   
   if (j==0)  {
       var posx = 27;
   }
  
    if (j==1)  {
       var posx = -27;
   }
   
  
   var posz = -18.5 - (i*0.5); 
   var rad = 0.1;
  

 for ( k= 0; k <8; k++) {
     if (k==0) {
         var posy = -8;
    } else if (k==1) {
        var posy = -7.5;
	} else if (k==2) {	
		var posy = -6.5;
	} else if (k==3) {	
        var posy = -4.5;
    } else if (k==4) {	
        var posy = -0.5;
    } else if (k==5) {	
        var posy = 7.5;
    } else if (k==6) {	
        var posy = 17.5;
    } else if (k==7) {	
        var posy = 23.5;
    		
} 


 var sphere = document.createElement('a-sphere');    
    sphere.setAttribute('radius', rad.toString());
    sphere.setAttribute('color', "blue");
    sphere.setAttribute('opacity','1');
    sphere.setAttribute('position', posx.toString() + " " + posy.toString() + " " +  posz.toString());
  scene.appendChild(sphere);

}




  }
  
  
 }



 
   
 <!-- le plancher -->

 for (k = 0; k < 6; k++) {
  for (i = 0; i < 80; i++) {

   
  posx=-20+(i*0.5)
  posy=-10
  
   
   var rad = 0.1;
  
 

 
     if (k==0) {
         var posz = -18;
    } else if (k==1) {
        var posz = -21;
	} else if (k==2) {	
		var posz = -25;
		
	} else if (k==3) {	
        var posz = -28.5;
		
    } else if (k==4) {	
        var posz = -32;
		
    } else if (k==5) {	
        var posz = -35;
    } 
    		


 var sphere = document.createElement('a-sphere');    
    sphere.setAttribute('radius', rad.toString());
    sphere.setAttribute('color', "blue");
    sphere.setAttribute('opacity','1');
    sphere.setAttribute('position', posx.toString() + " " + posy.toString() + " " +  posz.toString());
  scene.appendChild(sphere);

}




  }
  
    
 


 

 
















