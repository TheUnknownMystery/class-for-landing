class red_landing {

//constructing the object(position and width and height)
 constructor(x,y,width,height){

//making a static object and storing it in the variable

  var options = {

 isStatic: true

                }

 //creating bodies in rectangle using arguments               
 this.body   =     Bodies.rectangle(x,y,width,height,options);

 this.width  =    width;

 this.height =    height;

 //World.add(world,this.body) ;

                            }
                        

 display(){
         
//nameSpaceing the this.body.position into pos and storing it

 var pos = this.body.position;

 fill(225);

 //rectMode(CENTER);

 //defining how to represent it

 rect(pos.x,pos.y,width,height);

         }
                   }
 


                   