package lsystem.parser
{

  public class Scanner
  {

    public function Scanner(source:String){super();}

    public native function nextToken():Token;

    public native function pushBack(token:Token):void;

    protected native function isAlpha(c:int):Boolean;

    protected native function isEOF():Boolean;

    protected native function skipWhites():void;
  }
}