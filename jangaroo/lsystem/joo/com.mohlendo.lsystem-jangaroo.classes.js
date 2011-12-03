// class lsystem.parser.Rule
joo.classLoader.prepare("package lsystem.parser",
"public class Rule",1,function($$private){;return[

"public var",{variable:null},
"public var",{expression:null},
"public function Rule",function(variable,expression)
{
this.variable=variable;
this.expression=expression;
},
];},[],[], "0.8.0", "0.9.6"
);
// class lsystem.parser.RulesParser
joo.classLoader.prepare("package lsystem.parser",
"public class RulesParser",1,function($$private){;return[

"private var",{_token:null},
"private var",{_scanner:null},
"public function RulesParser",function(scanner)
{
this._scanner$1=scanner;
},
"public function parse",function()
{
var rules=new Array();
this._token$1=this._scanner$1.nextToken();
while(this._token$1.type!="eof")
{
rules.push(this.parseRule$1());
this._token$1=this._scanner$1.nextToken();
}
if(this._token$1.type=="eof")
{
return rules;
}
else
{
throw new Error("Unexpected token");
}
},
"private function parseRule",function()
{
var left;
var right;
left=this.parseVariable$1();
right=this.parseExpression$1();
return new lsystem.parser.Rule(left,right);
},
"private function parseVariable",function()
{
var result="";
while(this._token$1.type=="name")
{
result+=this._token$1.value;
this._token$1=this._scanner$1.nextToken();
}
if(this._token$1.type=="operator"&&this._token$1.value=="->")
{
this._token$1=this._scanner$1.nextToken();
}
return result;
},
"private function parseExpression",function()
{
var result="";
while(this._token$1.type!="eol"&&this._token$1.type!="eof")
{
result+=this._token$1.value;
this._token$1=this._scanner$1.nextToken();
}
return result;
},
];},[],["Array","Error","lsystem.parser.Rule"], "0.8.0", "0.9.6"
);
// class lsystem.parser.Scanner
joo.classLoader.prepare("package lsystem.parser",
"public class Scanner",1,function($$private){;return[

"private var",{_source:null},
"private var",{_tokens:null},
"private var",{_pos:0},
"public function Scanner",function(source)
{
this._pos$1=0;
this._tokens$1=new Array();
this._source$1=source;
},
"public function nextToken",function()
{
if(this._tokens$1.length>0)
{
return this._tokens$1.shift();
}
this.skipWhites();
if(this.isEOF())
{
return new lsystem.parser.Token("eof",null);
}
var c=this._source$1.charAt(this._pos$1++);
var buf="";
var code=c.charCodeAt(0);
if(this.isAlpha(code)||(c=='_'))
{
buf+=c;
return new lsystem.parser.Token("name",buf);
}
else if(c=="\n")
{
return new lsystem.parser.Token("eol",null);
}
else if(c=="-")
{
buf=c;
while(!this.isEOF())
{
c=this._source$1.charAt(this._pos$1);
if(c!='>')
{
break;
}
buf+=c;
this._pos$1++;
}
return new lsystem.parser.Token("operator",buf);
}
else
{
return new lsystem.parser.Token("operator",c);
}
},
"public function pushBack",function(token)
{
this._tokens$1.push(token);
},
"protected function isAlpha",function(c)
{
return((c>=97)&&(c<=122))||((c>=65)&&(c<=90));
},
"protected function isEOF",function()
{
return(this._pos$1>=this._source$1.length);
},
"protected function skipWhites",function()
{
while(!this.isEOF())
{
var c=this._source$1.charAt(this._pos$1++);
if((c!=" ")&&(c!="\t"))
{
--this._pos$1;
break;
}
}
},
];},[],["Array","lsystem.parser.Token"], "0.8.0", "0.9.6"
);
// class lsystem.parser.Token
joo.classLoader.prepare("package lsystem.parser",
"public class Token",1,function($$private){;return[

"public var",{value:null},
"public var",{type:null},
"public function Token",function(type,value)
{
this.type=type;
this.value=value;
},
];},[],[], "0.8.0", "0.9.6"
);
// class lsystem.LSystem
joo.classLoader.prepare("package lsystem",
"public class LSystem extends flash.display.Shape",4,function($$private){var $$bound=joo.boundMethod,trace=joo.trace;return[function(){joo.classLoader.init(Math,flash.events.Event);},
"private var",{turtle:null},
"private var",{_start:null},
"private var",{_rules:null},
"private var",{_angle:NaN},
"private var",{_order:NaN},
"private var",{_fProductions:null},
"private var",{_distance:NaN},
"private var",{finalPath:function(){return([]);}},
"public function LSystem",function(start,rules,angle,order,distance){flash.display.Shape.call(this);this.finalPath$4=this.finalPath$4();
this._start$4=start;
this._rules$4=rules;
this._angle$4=angle;
this._order$4=order;
this._distance$4=distance;
this._fProductions$4=new Array();
for(var $1 in rules){var r=rules[$1];
if(r.variable=="F"){
this._fProductions$4.push(r.expression);
}
}
this.produceString$4(this._start$4,this._order$4);
this.finalPath$4.position=0;
},
"public function get start",function(){
return this._start$4;
},
"public function get rules",function(){
return this._rules$4;
},
"public function get angle",function(){
return this._angle$4;
},
"public function draw",function(x,y,startAngle,lineThickness,iterationSteps){if(arguments.length<5){iterationSteps=-1;}
this.turtle$4=new lsystem.rendering.Turtle(new flash.geom.Point(x,y),this.degToRad$4(startAngle),0x659D32,lineThickness,this.graphics);
this.addEventListener(flash.events.Event.ENTER_FRAME,$$bound(this,"handleFrameEvent$4"));
},
"private function handleFrameEvent",function(event){
trace("handle frame event");
if(!this.iteratePath$4()){
trace("stop drawing");
this.removeEventListener(flash.events.Event.ENTER_FRAME,$$bound(this,"handleFrameEvent$4"));
}
},
"private function iteratePath",function(){
for(var i=0;i<this.finalPath$4.length;i++){
var step=this.finalPath$4[i];
switch(step){
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
this.turtle$4.forward(this._distance$4,true);
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
"private function produceString",function(production,order){
for(var i=0;i<production.length;i++){
switch(production.charAt(i)){
case'+':
this.finalPath$4.push(1);
break;
case'-':
this.finalPath$4.push(2);
break;
case'|':
this.finalPath$4.push(3);
break;
case'F':
if(order>0){
var randomNo=$$uint(Math.random()*(this._fProductions$4.length));
var fStr=this._fProductions$4[randomNo];
if(fStr){
this.produceString$4(fStr,order-1);
}
}
else{
this.finalPath$4.push(4);
}
break;
case'[':
this.finalPath$4.push(5);
break;
case']':
this.finalPath$4.push(6);
break;
default:
if(order>0){
for(var r=0;r<this.rules.length;r++){
var rule=this.rules[r];
if(rule.variable==production.charAt(i)){
this.produceString$4(rule.expression,order-1);
}
}
}
break;
}
}
},
"private function getLineAngleRad",function(deltaX,deltaY){
return Math.atan2(deltaY,deltaX);
},
"private function getDistBetPts",function(pt1,pt2){
return flash.geom.Point.distance(pt1,pt2);
},
"private function degToRad",function(deg){
return 2.0*Math.PI/360.0*deg;
},
];},[],["flash.display.Shape","Array","lsystem.rendering.Turtle","flash.geom.Point","flash.events.Event","uint","Math"], "0.8.0", "0.9.6"
);
// class lsystem.LSystemConfig
joo.classLoader.prepare("package lsystem",
"public class LSystemConfig",1,function($$private){;return[
"public native function get productions",
"public native function get name",
"public native function get start",
"public native function get order",
"public native function get angle",
"public native function get startAngle",
"public native function get lineLength",
"public native function get lineThickness",
];},[],[], "0.8.0", "0.9.6"
);
// class lsystem.rendering.Turtle
joo.classLoader.prepare("package lsystem.rendering",
"public class Turtle",1,function($$private){;return[
"private var",{curPos:null},
"private var",{curPosOriginal:null},
"private var",{curDirRad:NaN},
"private var",{color:0},
"private var",{lineThickness:0},
"private var",{graphics:null},
"private var",{stateStack:null},
"public function Turtle",function(_curPos,_curDir,_color,_lt,_graphics){
this.curPos$1=new flash.geom.Point(_curPos.x,_curPos.y);
this.curPosOriginal$1=new flash.geom.Point(_curPos.x,_curPos.y);
this.curDirRad$1=_curDir;
this.color$1=_color;
this.lineThickness$1=_lt;
this.graphics$1=_graphics;
this.stateStack$1=new Array();
this.resetTurtle();
},
"public function turnTo",function(angleNew){
this.curDirRad$1=angleNew;
},
"public function turn",function(angleIncrement){
this.curDirRad$1+=angleIncrement;
},
"public function forward",function(distance,isVisible){
this.curPos$1.x+=(distance*Math.cos(this.curDirRad$1));
this.curPos$1.y+=(distance*Math.sin(this.curDirRad$1));
if(isVisible){
this.graphics$1.lineStyle(this.lineThickness$1,this.color$1);
this.graphics$1.lineTo(this.curPos$1.x,this.curPos$1.y);
}
else{
this.graphics$1.moveTo(this.curPos$1.x,this.curPos$1.y);
}
},
"public function saveTurtle",function(){
var curState=new Object;
curState.curPos=new flash.geom.Point(this.curPos$1.x,this.curPos$1.y);
curState.curDirRad=this.curDirRad$1;
this.stateStack$1.push(curState);
},
"public function restoreTurtle",function(){
if(this.stateStack$1.length>0){
var curState=this.stateStack$1.pop();
this.curPos$1.x=curState.curPos.x;
this.curPos$1.y=curState.curPos.y;
this.curDirRad$1=curState.curDirRad;
this.graphics$1.moveTo(this.curPos$1.x,this.curPos$1.y);
}
},
"public function resetTurtle",function(){
this.graphics$1.clear();
this.curPos$1.x=this.curPosOriginal$1.x;
this.curPos$1.y=this.curPosOriginal$1.y;
this.graphics$1.moveTo(this.curPos$1.x,this.curPos$1.y);
},
"private function getLineAngleRad",function(deltaX,deltaY){
return Math.atan2(deltaY,deltaX);
},
"private function getDistBetPts",function(pt1,pt2){
return flash.geom.Point.distance(pt1,pt2);
},
];},[],["flash.geom.Point","Array","Math","Object"], "0.8.0", "0.9.6"
);
// class Main
joo.classLoader.prepare("package",
{SWF:{backgroundColor:'0xFFFFFF',frameRate:'30',width:'640',height:'480'}},
"public class Main extends flash.display.Sprite",6,function($$private){var trace=joo.trace;return[
"private var",{lsystems:function(){return([
{
name:"Lsystema vulgaris",
productions:"F -> F[+F]F[-F]F",
start:"F",
order:5,
angle:27.7,
startAngle:-90.0,
lineLength:3.0,
lineThickness:1
},
{
name:"Tree 1",
productions:"X -> F-[[X]+X]+F[+FX]-X\n F -> FF",
start:"X",
order:6,
angle:27.0,
startAngle:-90.0,
lineLength:3.0,
lineThickness:1
},
{
name:"Tree 2",
productions:"T -> R-[T]++[++L]R[--L]+[T]--T\n"+
"R -> F[++L][--L]F\n"+
"L -> [+FX-FX-FX+|+FX-FX-FX|+FXFX]\n"+
"FX -> FX\n"+
"F -> FF",
start:"T",
order:6,
angle:37.0,
startAngle:-90.0,
lineLength:4.0,
lineThickness:1
},
{
name:"Tree 3",
productions:"F -> FF-[-F+F+F]+[+F-F-F]\n"+
"F -> FF-[-F+F][FF]+[+F-F]\n"+
"X -> YYYYF",
start:"X",
order:5,
angle:22.0,
startAngle:-90.0,
lineLength:6.0,
lineThickness:1
},
{
name:"Koch curve",
productions:"F -> F-F++F-F",
start:"F",
order:4,
angle:60.0,
startAngle:-90.0,
lineLength:4.0,
lineThickness:2
},
{
name:"Quad Koch curve",
productions:"F -> F+F-F-FF+F+F-F",
start:"F+F+F+F",
order:3,
angle:90.0,
startAngle:-90.0,
lineLength:5.0,
lineThickness:1
},
{
name:"Hilbert curve",
productions:"F -> F\n"+
"X -> -YF+XFX+FY-\n"+
"Y -> +XF-YFY-FX+\n",
start:"X",
order:6,
angle:90.0,
startAngle:-90.0,
lineLength:5.0,
lineThickness:1
},
{
name:"Sierpinski Arrowhead",
productions:"F -> F\n"+
"X -> YF+XF+Y\n"+
"Y -> XF-YF-X",
start:"YF",
order:6,
angle:60.0,
startAngle:-90.0,
lineLength:5.0,
lineThickness:1
},
{
name:"Dragon curve",
productions:"F -> F\n"+
"X -> X+YF+\n"+
"Y -> -FX-Y",
start:"X",
order:10,
angle:90.0,
startAngle:-90.0,
lineLength:5.0,
lineThickness:1
},
{
name:"Lévy C curve",
productions:"F -> +F--F+",
start:"F",
order:12,
angle:45.0,
startAngle:-90.0,
lineLength:5.0,
lineThickness:1
},
{
name:"Penrose Tiling P3",
productions:"W -> YF++ZF----XF[-YF----WF]++\n"+
"X -> +YF--ZF[---WF--XF]+\n"+
"Y -> -WF++XF[+++YF++ZF]-\n"+
"Z -> --YF++++WF[+ZF++++XF]--XF\n"+
"F -> F",
start:"[X]++[X]++[X]++[X]++[X]",
order:6,
angle:36.0,
startAngle:-90.0,
lineLength:6.0,
lineThickness:1
}
]);}},
"private function queryParams",function(){
var qsParm={};
var query=window.location.search.substring(1);
var parms=query.split('&');
for(var i=0;i<parms.length;i++){
var pos=parms[i].indexOf('=');
if(pos>0){
var key=parms[i].substring(0,pos);
var val=parms[i].substring(pos+1);
qsParm[key]=val;
}
}
return qsParm;
},
"public function Main",function(){flash.display.Sprite.call(this);this.lsystems$6=this.lsystems$6();
var lsystemConfig;
var index=this.queryParams$6()['lsystem'];
lsystemConfig=(this.lsystems$6[index]);
if(!lsystemConfig){
throw new Error("no config provided!");
}
var rulesParser=new lsystem.parser.RulesParser(new lsystem.parser.Scanner(lsystemConfig.productions));
var rules=rulesParser.parse();
for(var $1 in rules){var r=rules[$1];
trace(r.variable+" "+r.expression);
}
var helloWorld=new flash.text.TextField();
helloWorld.text=lsystemConfig.name;
this.addChild(helloWorld);
var lSystem=new lsystem.LSystem(lsystemConfig.start,rules,lsystemConfig.angle,lsystemConfig.order,lsystemConfig.lineLength);
this.addChild(lSystem);
lSystem.draw(320,480,lsystemConfig.startAngle,lsystemConfig.lineThickness,-1);
},
];},[],["flash.display.Sprite","lsystem.LSystemConfig","Error","lsystem.parser.RulesParser","lsystem.parser.Scanner","flash.text.TextField","lsystem.LSystem"], "0.8.0", "0.9.6"
);
