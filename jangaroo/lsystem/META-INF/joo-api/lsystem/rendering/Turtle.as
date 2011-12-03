package lsystem.rendering {
import flash.display.Graphics;
import flash.geom.Point;

public class Turtle {

  // curPos is the current position of the turtle
  // curDir is the current direction of the turtle in radians
  // color is the color of the line drawn by turtle
  // lineThickness is the thickness of said line
  // sprite is the Sprite we're drawing on
  public function Turtle(_curPos:Point, _curDir:Number, _color:uint, _lt:uint, _graphics:Graphics){super();}

  // turn turtle to given angle, angle is given in radians
  public native function turnTo(angleNew:Number):void;

  // turn the turtle by the angle increment, angle given in radians
  public native function turn(angleIncrement:Number):void;

  // move the turtle forward in current direction by dist amount
  // if turtle is visible draw line along movement path, else
  // just move the turtle invisibly.
  public native function forward(distance:Number, isVisible:Boolean):void;

  public native function saveTurtle():void;

  public native function restoreTurtle():void;

  // Reset the turtle
  public native function resetTurtle():void;
}
}