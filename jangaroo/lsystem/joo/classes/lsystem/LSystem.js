joo.classLoader.prepare("package lsystem",/* {
import flash.display.Shape;
import flash.display.Sprite;
import flash.events.Event;
import flash.geom.Point;

import lsystem.parser.Rule;
import lsystem.rendering.Turtle;*/

"public class LSystem extends flash.display.Shape",4,function($$private){var $$bound=joo.boundMethod,trace=joo.trace;return[function(){joo.classLoader.init(Math,flash.events.Event);}, 
  "private var",{ turtle/*:Turtle*/:null},
  "private var",{ _start/*:String*/:null},
  "private var",{ _rules/*:Array*/:null},

  "private var",{ _angle/*:Number*/:NaN},
  "private var",{ _order/*:Number*/:NaN},
  "private var",{ _fProductions/*:Array*/:null},
  "private var",{ _distance/*:Number*/:NaN},

  "private var",{ finalPath/*:Array*/ :function(){return( []);}},

  "public function LSystem",function LSystem$(start/*:String*/, rules/*:Array*/, angle/*:Number*/, order/*:Number*/, distance/*:Number*/) {flash.display.Shape.call(this);this.finalPath$4=this.finalPath$4();
    this._start$4 = start;
    this._rules$4 = rules;
    this._angle$4 = angle;
    this._order$4 = order;
    this._distance$4 = distance;
    this._fProductions$4 = new Array();

    for/* each*/ (var $1 in rules) {var r/*:Rule*/ = rules[$1];
      if (r.variable == "F") {
        this._fProductions$4.push(r.expression);
      }
    }

    this.produceString$4(this._start$4, this._order$4);
    this.finalPath$4.position = 0;
  },

  "public function get start",function start$get()/*:String*/ {
    return this._start$4;
  },

  "public function get rules",function rules$get()/*:Array*/ {
    return this._rules$4;
  },

  "public function get angle",function angle$get()/*:Number*/ {
    return this._angle$4;
  },

  "public function draw",function draw(x/*:Number*/, y/*:Number*/, startAngle/*:Number*/, lineThickness/*:Number*/, iterationSteps/*:Number = -1*/)/*:void*/ {if(arguments.length<5){iterationSteps = -1;}
    this.turtle$4 = new lsystem.rendering.Turtle(new flash.geom.Point(x, y), this.degToRad$4(startAngle), 0x659D32, lineThickness, this.graphics);

    this.addEventListener(flash.events.Event.ENTER_FRAME, $$bound(this,"handleFrameEvent$4"));
  },

  "private function handleFrameEvent",function handleFrameEvent(event/*:Event*/)/*:void*/ {
    trace("handle frame event");
    if (!this.iteratePath$4()) {
      trace("stop drawing");
      this.removeEventListener(flash.events.Event.ENTER_FRAME, $$bound(this,"handleFrameEvent$4"));
    }
  },

  "private function iteratePath",function iteratePath()/*:Boolean*/ {
    for (var i/*:uint*/ = 0; i < this.finalPath$4.length; i++) {
      var step/*:int*/ = this.finalPath$4[i];

      switch (step) {
        case 1:
          this.turtle$4.turn(this.degToRad$4(this.angle));
          break;
        case 2:
          this.turtle$4.turn(-this.degToRad$4(this.angle));
          break;
        case 3:
          this.turtle$4.turn(this.degToRad$4(180.0));
          break;
        case 4:
          this.turtle$4.forward(this._distance$4, true);
          break;
        case 5:
          this.turtle$4.saveTurtle();
          break;
        case 6:
          this.turtle$4.restoreTurtle();
          break;

      }
    }
    return false;
  },

  "private function produceString",function produceString(production/*:String*/, order/*:uint*/)/*:void*/ {
    for (var i/*:uint*/ = 0; i < production.length; i++) {
      switch (production.charAt(i)) {
        case '+':
          this.finalPath$4.push(1);
          break;
        case '-':
          this.finalPath$4.push(2);
          break;
        case '|':
          this.finalPath$4.push(3);
          break;
        case 'F':
          if (order > 0) {
            var randomNo/*:uint*/ = $$uint(Math.random() * (this._fProductions$4.length));
            var fStr/*:String*/ = this._fProductions$4[randomNo];
            if (fStr) {
              this.produceString$4(fStr, order - 1);
            }
          }
          else {
            this.finalPath$4.push(4);
          }
          break;
        case '[':
          this.finalPath$4.push(5);
          break;
        case ']':
          this.finalPath$4.push(6);
          break;
        default:
          if (order > 0) {
            for (var r/*:int*/ =0; r < this.rules.length; r++) {
              var rule/*:Rule*/ = this.rules[r];
              if (rule.variable == production.charAt(i)) {
                this.produceString$4(rule.expression, order - 1);
              }
            }
          }
          break;
      }
    }
  },

  "private function getLineAngleRad",function getLineAngleRad(deltaX/*:Number*/, deltaY/*:Number*/)/*:Number*/ {
    return Math.atan2(deltaY, deltaX);
  },

  "private function getDistBetPts",function getDistBetPts(pt1/*:Point*/, pt2/*:Point*/)/*:Number*/ {
    return flash.geom.Point.distance(pt1, pt2);
  },

  "private function degToRad",function degToRad(deg/*:Number*/)/*:Number*/ {
    return 2.0 * Math.PI / 360.0 * deg;
  },
];},[],["flash.display.Shape","Array","lsystem.rendering.Turtle","flash.geom.Point","flash.events.Event","uint","Math"], "0.8.0", "0.9.6"
);