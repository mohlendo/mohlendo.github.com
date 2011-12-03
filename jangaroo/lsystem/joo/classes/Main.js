joo.classLoader.prepare("package",/* {
import flash.display.Sprite;
import flash.text.TextField;

import lsystem.LSystem;
import lsystem.LSystemConfig;
import lsystem.parser.Rule;
import lsystem.parser.RulesParser;
import lsystem.parser.Scanner;*/

{SWF:{ backgroundColor:'0xFFFFFF', frameRate:'30', width:'640', height:'480'}},
"public class Main extends flash.display.Sprite",6,function($$private){var trace=joo.trace;return[ 

  //0-10
  "private var",{ lsystems/*:Array*/ :function(){return( [
    {
      name:  "Lsystema vulgaris",
      productions: "F -> F[+F]F[-F]F",
      start: "F",
      order: 5,
      angle: 27.7,

      startAngle:-90.0,
      lineLength: 3.0,
      lineThickness: 1
    },
    {
      name:  "Tree 1",
      productions: "X -> F-[[X]+X]+F[+FX]-X\n F -> FF",
      start: "X",
      order: 6,
      angle: 27.0,

      startAngle:-90.0,
      lineLength: 3.0,
      lineThickness: 1
    },
    {
      name:  "Tree 2",
      productions: "T -> R-[T]++[++L]R[--L]+[T]--T\n" +
              "R -> F[++L][--L]F\n" +
              "L -> [+FX-FX-FX+|+FX-FX-FX|+FXFX]\n" +
              "FX -> FX\n" +
              "F -> FF",
      start: "T",
      order: 6,
      angle: 37.0,

      startAngle:-90.0,
      lineLength: 4.0,
      lineThickness: 1
    },
    {
      name:  "Tree 3",
      productions: "F -> FF-[-F+F+F]+[+F-F-F]\n" +
              "F -> FF-[-F+F][FF]+[+F-F]\n" +
              "X -> YYYYF",
      start: "X",
      order: 5,
      angle: 22.0,

      startAngle:-90.0,
      lineLength: 6.0,
      lineThickness: 1
    },
    {
      name:  "Koch curve",
      productions: "F -> F-F++F-F",
      start: "F",
      order: 4,
      angle: 60.0,

      startAngle:-90.0,
      lineLength: 4.0,
      lineThickness: 2
    },
    {
      name:  "Quad Koch curve",
      productions: "F -> F+F-F-FF+F+F-F",
      start: "F+F+F+F",
      order: 3,
      angle: 90.0,

      startAngle:-90.0,
      lineLength: 5.0,
      lineThickness: 1
    },
    {
      name:  "Hilbert curve",
      productions: "F -> F\n" +
              "X -> -YF+XFX+FY-\n" +
              "Y -> +XF-YFY-FX+\n",
      start: "X",
      order: 6,
      angle: 90.0,

      startAngle:-90.0,
      lineLength: 5.0,
      lineThickness: 1
    },
    {
      name:  "Sierpinski Arrowhead",
      productions: "F -> F\n" +
              "X -> YF+XF+Y\n" +
              "Y -> XF-YF-X",
      start: "YF",
      order: 6,
      angle: 60.0,

      startAngle:-90.0,
      lineLength: 5.0,
      lineThickness: 1
    },
    {
      name:  "Dragon curve",
      productions: "F -> F\n" +
              "X -> X+YF+\n" +
              "Y -> -FX-Y",
      start: "X",
      order: 10,
      angle: 90.0,

      startAngle:-90.0,
      lineLength: 5.0,
      lineThickness: 1
    },
    {
      name:  "Lévy C curve",
      productions: "F -> +F--F+",
      start: "F",
      order: 12,
      angle: 45.0,

      startAngle:-90.0,
      lineLength: 5.0,
      lineThickness: 1
    },
    {
      name:  "Penrose Tiling P3",
      productions: "W -> YF++ZF----XF[-YF----WF]++\n" +
              "X -> +YF--ZF[---WF--XF]+\n" +
              "Y -> -WF++XF[+++YF++ZF]-\n" +
              "Z -> --YF++++WF[+ZF++++XF]--XF\n" +
              "F -> F",
      start: "[X]++[X]++[X]++[X]++[X]",
      order: 6,
      angle: 36.0,

      startAngle:-90.0,
      lineLength: 6.0,
      lineThickness: 1
    }
  ]);}},

  "private function queryParams",function queryParams()/*:Object*/ {
    var qsParm/*:Object*/ = {};
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i = 0; i < parms.length; i++) {
      var pos = parms[i].indexOf('=');
      if (pos > 0) {
        var key = parms[i].substring(0, pos);
        var val = parms[i].substring(pos + 1);
        qsParm[key] = val;
      }
    }
    return qsParm;
  },

  "public function Main",function Main$() {flash.display.Sprite.call(this);this.lsystems$6=this.lsystems$6();
    var lsystemConfig/*:LSystemConfig*/;
    var index/*:Number*/ = this.queryParams$6()['lsystem'];
    lsystemConfig =/* lsystem.LSystemConfig*/(this.lsystems$6[index]);

    if (!lsystemConfig) {
      throw new Error("no config provided!");
    }
    var rulesParser/*:RulesParser*/ = new lsystem.parser.RulesParser(new lsystem.parser.Scanner(lsystemConfig.productions));
    var rules/*:Array*/ = rulesParser.parse();
    for/* each*/ (var $1 in rules) {var r/*:Rule*/ = rules[$1];
      trace(r.variable + " " + r.expression);
    }
    var helloWorld/*:TextField*/ = new flash.text.TextField();
    helloWorld.text=lsystemConfig.name;
    this.addChild(helloWorld);
    var lSystem/*:LSystem*/ = new lsystem.LSystem(lsystemConfig.start, rules, lsystemConfig.angle, lsystemConfig.order, lsystemConfig.lineLength);
    this.addChild(lSystem);
    lSystem.draw(320, 480, lsystemConfig.startAngle, lsystemConfig.lineThickness, -1);

  },
];},[],["flash.display.Sprite","lsystem.LSystemConfig","Error","lsystem.parser.RulesParser","lsystem.parser.Scanner","flash.text.TextField","lsystem.LSystem"], "0.8.0", "0.9.6"
);