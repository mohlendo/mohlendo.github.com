joo.classLoader.prepare("package flash.globalization",/* {*/


/**
 * A data structure that holds information about a number that was extracted by parsing a string.
 * <p>The number string can contain a prefix and suffix surrounding a number. In such cases the <code>startIndex</code> property is set to the first character of the number. Also, the <code>endIndex</code> property is set to the index of the character that follows the last character of the number.</p>
 * @see NumberFormatter#parse()
 * @see NumberFormatter#parseNumber()
 *
 */
"public final class NumberParseResult",1,function($$private){;return[ 
  /**
   * The index of the character after the last character of the numeric portion of the input string.
   */
  "public function get endIndex",function endIndex$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The index of the first character of the numeric portion of the input string.
   */
  "public function get startIndex",function startIndex$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The value of the numeric portion of the input string.
   */
  "public function get value",function value$get()/*:Number*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Constructs a number parse result object. NumberParseResult objects are usually created by the <code>NumberFormatter.parse()</code> and <code>NumberFormatter.parseNumber()</code> methods, rather than by calling this constructor directly.
   * @param value The value of the numeric portion of the input string.
   * @param startIndex The index of the first character of the number in the input string.
   * @param endIndex The index of the character after the last character of the number in the input string.
   *
   * @see NumberFormatter#parse()
   * @see NumberFormatter#parseNumber()
   *
   */
  "public function NumberParseResult",function NumberParseResult$(value/*:Number = NaN*/, startIndex/*:int = 0x7fffffff*/, endIndex/*:int = 0x7fffffff*/) {if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){value = NaN;}startIndex = 0x7fffffff;}endIndex = 0x7fffffff;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["Error"], "0.8.0", "0.9.6"
);