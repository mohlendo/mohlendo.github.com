joo.classLoader.prepare("package lsystem.parser",/*
{*/

  "public class Scanner",1,function($$private){;return[
  
    "private var",{ _source/*:String*/:null},
    "private var",{ _tokens/*:Array*/:null},
    "private var",{ _pos/*:int*/:0},

    "public function Scanner",function Scanner$(source/*:String*/)
    {
      this._pos$1 = 0;
      this._tokens$1 = new Array();
      this._source$1 = source;
    },

    "public function nextToken",function nextToken()/*:Token*/
    {
      if (this._tokens$1.length > 0)
      {
        return this._tokens$1.shift();
      }
      this.skipWhites();
      if (this.isEOF())
      {
        return new lsystem.parser.Token("eof", null);
      }
      var c/*:String*/ = this._source$1.charAt(this._pos$1++);
      var buf/*:String*/ = "";
      var code/*:int*/ = c.charCodeAt(0);
      if (this.isAlpha(code) || (c == '_'))
      {
        /*while (isAlpha(code) || (c == '_'))
           {
           buf += c;
           if (isEOF())
           {
           ++_pos;
           break;
           }
           c = _source.charAt(_pos++);
           code = c.charCodeAt(0);
           }
         --_pos;*/
        buf += c;
        return new lsystem.parser.Token("name", buf);
      }
      else if (c == "\n")
      {
        return new lsystem.parser.Token("eol", null);
      }
      else if (c == "-")
      {
        buf = c;
        while (!this.isEOF())
        {
          c = this._source$1.charAt(this._pos$1);
          if (c != '>')
          {
            break;
          }
          buf += c;
          this._pos$1++;
        }
        return new lsystem.parser.Token("operator", buf);
      }
      else
      {
        return new lsystem.parser.Token("operator", c);
      }
    },

    "public function pushBack",function pushBack(token/*:Token*/)/*:void*/
    {
      this._tokens$1.push(token);
    },

    "protected function isAlpha",function isAlpha(c/*:int*/)/*:Boolean*/
    {
      return ((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90));
    },

    "protected function isEOF",function isEOF()/*:Boolean*/
    {
      return (this._pos$1 >= this._source$1.length);
    },

    "protected function skipWhites",function skipWhites()/*:void*/
    {
      while (!this.isEOF())
      {
        var c/*:String*/ = this._source$1.charAt(this._pos$1++);
        if ((c != " ") && (c != "\t"))
        {
          --this._pos$1;
          break;
        }
      }
    },
  ];},[],["Array","lsystem.parser.Token"], "0.8.0", "0.9.6"
);