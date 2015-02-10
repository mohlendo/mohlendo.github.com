package lsystem {
import flash.display.Shape;
import flash.display.Sprite;
import flash.events.Event;
import flash.geom.Point;

import lsystem.parser.Rule;
import lsystem.rendering.Turtle;

public class LSystem extends flash.display.Shape {

  public function LSystem(start:String, rules:Array, angle:Number, order:Number, distance:Number){super();}

  public native function get start():String;

  public native function get rules():Array;

  public native function get angle():Number;

  public native function draw(x:Number, y:Number, startAngle:Number, lineThickness:Number, iterationSteps:Number = -1):void;
}
}