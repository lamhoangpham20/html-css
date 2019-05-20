
// Ball.js Copyright (c) Kari Laitinen

// http://www.naturalprogramming.com

// 2012-02-27 File created.
// 2014-02-25 Methods are added to the prototype.
// 2016-10-21 Class defined as ECMAScript 6 class.

// This program shows how JavaScript classes are defined.

// The Ball objects defined in this file are used in
// programs MovingBallOOCanvas.html and MovingBallsWithPointerCanvas.html

class Ball
{
   constructor( given_center_point_x,
                given_center_point_y,
                given_color )
   {
      this.ball_center_point_x  =  given_center_point_x ;
      this.ball_center_point_y  =  given_center_point_y ;
      this.ball_color           =  given_color ;

      this.ball_diameter  =  128 ;

      this.ball_is_activated  =  false ;
   }

   // Next we'll specify the methods for Ball objects.

   activate_ball()
   {
      this.ball_is_activated  =  true ;
   }

   deactivate_ball()
   {
      this.ball_is_activated  =  false ;
   }

   get_ball_center_point_x()
   {
      return this.ball_center_point_x ;
   }

   get_ball_center_point_y()
   {
      return this.ball_center_point_y ;
   }

   get_ball_color()
   {
      return this.ball_color ;
   }

   set_ball_color( new_color )
   {
      this.ball_color  =  new_color ;
   }

   set_diameter( new_diameter )
   {
      if ( new_diameter > 3 )
      {
         this.ball_diameter  =  new_diameter ;
      }
   }

   move_right()
   {
      this.ball_center_point_x  +=  3 ;
   }


   move_left()
   {
      this.ball_center_point_x  -=  3 ;
   }

   move_up()
   {
      this.ball_center_point_y  -=  3 ;
   }


   move_down()
   {
      this.ball_center_point_y  +=  3 ;
   }

   move_this_ball( movement_in_direction_x, movement_in_direction_y )
   {
      this.ball_center_point_x  +=  movement_in_direction_x ;
      this.ball_center_point_y  +=  movement_in_direction_y ;
   }


   move_to_position( new_center_point_x, new_center_point_y )
   {
      this.ball_center_point_x  =  new_center_point_x ;
      this.ball_center_point_y  =  new_center_point_y ;
   }


   contains_point( given_point_x, given_point_y )
   {
      var ball_radius  =  this.ball_diameter / 2 ;

      //  Here we use the Pythagorean theorem to calculate the distance
      //  from the given point to the center point of the ball.
      //  See the note at the end of this file.

      var distance_from_given_point_to_ball_center  =

           Math.sqrt( 

               Math.pow( this.ball_center_point_x  -  given_point_x, 2 )  +
               Math.pow( this.ball_center_point_y  -  given_point_y, 2 )  ) ;

      return ( distance_from_given_point_to_ball_center  <=  ball_radius ) ;
   }


   draw( context )
   {
      //  We'll first save the current drawing context so that we'll
      //  not disturb any drawing operations made by other methods.

      context.save() ;  

      context.fillStyle = this.ball_color ; 

      context.beginPath() ;
      context.arc( this.ball_center_point_x, this.ball_center_point_y,
                   this.ball_diameter / 2, 0, 2 * Math.PI, true )
      context.closePath() ;
      context.fill() ;

      if ( this.ball_is_activated == true )
      {
         context.lineWidth = 6 ; // Thick edge for an activated ball.
      }

      context.stroke() ;   //  Draw the outline of the ball.

      context.restore() ;  //  Restore the saved drawing context.
   }

}  // End of the definition of the Ball class.




