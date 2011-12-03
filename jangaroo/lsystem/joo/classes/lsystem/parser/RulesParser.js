joo.classLoader.prepare("package lsystem.parser",/*
{*/

  "public class RulesParser",1,function($$private){;return[
  
    "private var",{ _token/*:Token*/:null},
    "private var",{ _scanner/*:Scanner*/:null},

    "public function RulesParser",function RulesParser$(scanner/*:Scanner*/)
    {
      this._scanner$1 = scanner;
    },

    "public function parse",function parse()/*:Array*/
    {
      var rules/*:Array*/ = new Array();
      this._token$1 = this._scanner$1.nextToken();
      while (this._token$1.type != "eof")
      {
        rules.push(this.parseRule$1());
        this._token$1 = this._scanner$1.nextToken();
      }

      if (this._token$1.type == "eof")
      {
        return rules;
      }
      else
      {
        throw new Error("Unexpected token");
      }
    },


    "private function parseRule",function parseRule()/*:Rule*/
    {
      var left/*:String*/;
      var right/*:String*/;
      left = this.parseVariable$1();
      right = this.parseExpression$1();
      return new lsystem.parser.Rule(left, right);
    },

    "private function parseVariable",function parseVariable()/*:String*/
    {
      var result/*:String*/ = "";
      while (this._token$1.type == "name")
      {
        result += this._token$1.value;
        this._token$1 = this._scanner$1.nextToken();
      }
      if (this._token$1.type == "operator" && this._token$1.value == "->")
      {
        this._token$1 = this._scanner$1.nextToken();
      }
      return result;
    },

    "private function parseExpression",function parseExpression()/*:String*/
    {
      var result/*:String*/ = "";
      while (this._token$1.type != "eol" && this._token$1.type != "eof")
      {
        result += this._token$1.value;
        this._token$1 = this._scanner$1.nextToken();
      }
      return result;
    },
  ];},[],["Array","Error","lsystem.parser.Rule"], "0.8.0", "0.9.6"
);