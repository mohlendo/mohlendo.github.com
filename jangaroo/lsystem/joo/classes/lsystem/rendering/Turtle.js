joo.classLoader.prepare("package lsystem.rendering",/* {
import flash.display.Graphics;
import flash.geom.Point;*/

"public class Turtle",1,function($$private){;return[ 
  "private var",{ curPos/*:Point*/:null},
  "private var",{ curPosOriginal/*:Point*/:null},
  "private var",{ curDirRad/*:Number*/:NaN},
  "private var",{ color/*:uint*/:0},
  "private var",{ lineThickness/*:uint*/:0},
  "private var",{ graphics/*:Graphics*/:null},
  "private var",{ stateStack/*:Array*/:null},

  // curPos is the current position of the turtle
  // curDir is the current direction of the turtle in radians
  // color is the color of the line drawn by turtle
  // lineThickness is the thickness of said line
  // sprite is the Sprite we're drawing on
  "public function Turtle",function Turtle$(_curPos/*:Point*/, _curDir/*:Number*/, _color/*:uint*/, _lt/*:uint*/, _graphics/*:Graphics*/) {
    this.curPos$1 = new flash.geom.Point(_curPos.x, _curPos.y);
    this.curPosOriginal$1 = new flash.geom.Point(_curPos.x, _curPos.y);
    this.curDirRad$1 = _curDir;
    this.color$1 = _color;
    this.lineThickness$1 = _lt;
    this.graphics$1 = _graphics;
    this.stateStack$1 = new Array();
    this.resetTurtle();
  },

  // turn turtle to given angle, angle is given in radians
  "public function turnTo",function turnTo(angleNew/*:Number*/)/*:void*/ {
    this.curDirRad$1 = angleNew;
  },

  // turn the turtle by the angle increment, angle given in radians
  "public function turn",function turn(angleIncrement/*:Number*/)/*:void*/ {
    this.curDirRad$1 += angleIncrement;
  },

  // move the turtle forward in current direction by dist amount
  // if turtle is visible draw line along movement path, else
  // just move the turtle invisibly.
  "public function forward",function forward(distance/*:Number*/, isVisible/*:Boolean*/)/*:void*/ {
    this.curPos$1.x += (distance * Math.cos(this.curDirRad$1));
    this.curPos$1.y += (distance * Math.sin(this.curDirRad$1));
    if (isVisible) {
      this.graphics$1.lineStyle(this.lineThickness$1, this.color$1);
      this.graphics$1.lineTo(this.curPos$1.x, this.curPos$1.y);
    }
    else {
      this.graphics$1.moveTo(this.curPos$1.x, this.curPos$1.y);
    }
  },

  "public function saveTurtle",function saveTurtle()/*:void*/ {
    var curState/*:Object*/ = new Object;
    curState.curPos = new flash.geom.Point(this.curPos$1.x, this.curPos$1.y);
    curState.curDirRad = this.curDirRad$1;
    this.stateStack$1.push(curState);
  },

  "public function restoreTurtle",function restoreTurtle()/*:void*/ {
    if (this.stateStack$1.length > 0) {
      var curState/*:Object*/ = this.stateStack$1.pop();
      this.curPos$1.x = curState.curPos.x;
      this.curPos$1.y = curState.curPos.y;
      this.curDirRad$1 = curState.curDirRad;
      this.graphics$1.moveTo(this.curPos$1.x, this.curPos$1.y);
    }
  },

  // Reset the turtle
  "public function resetTurtle",function resetTurtle()/*:void*/ {
    this.graphics$1.clear();
    this.curPos$1.x = this.curPosOriginal$1.x;
    this.curPos$1.y = this.curPosOriginal$1.y;
    this.graphics$1.moveTo(this.curPos$1.x, this.curPos$1.y);
  },

  "private function getLineAngleRad",function getLineAngleRad(deltaX/*:Number*/, deltaY/*:Number*/)/*:Number*/ {
    return Math.atan2(deltaY, deltaX);
  },

  "private function getDistBetPts",function getDistBetPts(pt1/*:Point*/, pt2/*:Point*/)/*:Number*/ {
    return flash.geom.Point.distance(pt1, pt2);
  },
];},[],["flash.geom.Point","Array","Math","Object"], "0.8.0", "0.9.6"
);