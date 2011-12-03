joo.classLoader.prepare("package flashx.textLayout.utils",/* {
import flashx.textLayout.elements.TextFlow;
import flashx.textLayout.elements.TextRange;*/

/**
 * Utilities for manipulating a TextRange The methods of this class are static and must be called using the syntax <code>NavigationUtil.method(<i>parameter</i>)</code>.
 */
"public final class NavigationUtil",1,function($$private){;return[ 
  /**
   * Sets the TextRange at the end of the document.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function endOfDocument",function endOfDocument(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange at the end of the line.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function endOfLine",function endOfLine(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange at the end of the paragraph.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function endOfParagraph",function endOfParagraph(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Returns the absolute position of the next atom.
   * @param flowRoot <code>flowRoot:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/elements/TextFlow.html">flashx.textLayout.elements:TextFlow</a></code>
   * @param absolutePos <code>absolutePos:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   * @return <code><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   */
  "public static function nextAtomPosition",function nextAtomPosition(flowRoot/*:TextFlow*/, absolutePos/*:int*/)/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange forward by one character.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function nextCharacter",function nextCharacter(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange down one line
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function nextLine",function nextLine(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange down one page.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function nextPage",function nextPage(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange forward by one word.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function nextWord",function nextWord(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Returns the absolute position of the beginning of the next word.
   * @param flowRoot <code>flowRoot:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/elements/TextFlow.html">flashx.textLayout.elements:TextFlow</a></code>
   * @param absolutePos <code>absolutePos:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   * @return <code><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   */
  "public static function nextWordPosition",function nextWordPosition(flowRoot/*:TextFlow*/, absolutePos/*:int*/)/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Returns the absolute position of the previous atom.
   * @param flowRoot <code>flowRoot:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/elements/TextFlow.html">flashx.textLayout.elements:TextFlow</a></code>
   * @param absolutePos <code>absolutePos:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   * @return <code><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   */
  "public static function previousAtomPosition",function previousAtomPosition(flowRoot/*:TextFlow*/, absolutePos/*:int*/)/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange backward by one character.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function previousCharacter",function previousCharacter(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange up one line.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function previousLine",function previousLine(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange up one page.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function previousPage",function previousPage(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange backward by one word.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function previousWord",function previousWord(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Returns absolute position of the beginning of the previous word.
   * @param flowRoot <code>flowRoot:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/elements/TextFlow.html">flashx.textLayout.elements:TextFlow</a></code>
   * @param absolutePos <code>absolutePos:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   * @return <code><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code>
   *
   */
  "public static function previousWordPosition",function previousWordPosition(flowRoot/*:TextFlow*/, absolutePos/*:int*/)/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange at the beginning of the document.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function startOfDocument",function startOfDocument(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange at the beginning of the line.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function startOfLine",function startOfLine(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets the TextRange at the beginning of the paragraph.
   * @param range Indicates that only activeIndex should move
   * @param extendSelection <code>extendSelection:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   *
   * @return true if selection changed.
   *
   */
  "public static function startOfParagraph",function startOfParagraph(range/*:TextRange*/, extendSelection/*:Boolean = false*/)/*:Boolean*/ {if(arguments.length<2){extendSelection = false;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},["endOfDocument","endOfLine","endOfParagraph","nextAtomPosition","nextCharacter","nextLine","nextPage","nextWord","nextWordPosition","previousAtomPosition","previousCharacter","previousLine","previousPage","previousWord","previousWordPosition","startOfDocument","startOfLine","startOfParagraph"],["Error"], "0.8.0", "0.9.6"
);