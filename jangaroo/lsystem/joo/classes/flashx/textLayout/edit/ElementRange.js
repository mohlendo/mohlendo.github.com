joo.classLoader.prepare("package flashx.textLayout.edit",/* {
import flashx.textLayout.elements.FlowLeafElement;
import flashx.textLayout.elements.ParagraphElement;
import flashx.textLayout.elements.TextFlow;
import flashx.textLayout.formats.ITextLayoutFormat;*/

/**
 * The ElementRange class represents the range of objects selected within a text flow.
 * <p>The beginning elements (such as <code>firstLeaf</code>) are always less than or equal to the end elements (in this case, <code>lastLeaf</code>) for each pair of values in an element range.</p>
 * @see flashx.textLayout.elements.TextFlow
 *
 */
"public class ElementRange",1,function($$private){;return[ 
  /**
   * The absolute text position of the FlowLeafElement object that contains the end of the range.
   */
  "public function get absoluteEnd",function absoluteEnd$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set absoluteEnd",function absoluteEnd$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The absolute text position of the FlowLeafElement object that contains the start of the range.
   */
  "public function get absoluteStart",function absoluteStart$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set absoluteStart",function absoluteStart$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The format attributes of the characters in the range.
   * <p>If the range spans more than one FlowElement object, which means that more than one character format may exist within the range, the format of the first FlowElement object is returned.</p>
   */
  "public function get characterFormat",function characterFormat$get()/*:ITextLayoutFormat*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The format attributes of the container displaying the range.
   * <p>If the range spans more than one container, the format of the first container is returned.</p>
   */
  "public function get containerFormat",function containerFormat$get()/*:ITextLayoutFormat*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The FlowLeafElement object that contains the start of the range.
   */
  "public function get firstLeaf",function firstLeaf$get()/*:FlowLeafElement*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set firstLeaf",function firstLeaf$set(value/*:FlowLeafElement*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The ParagraphElement object that contains the start of the range.
   */
  "public function get firstParagraph",function firstParagraph$get()/*:ParagraphElement*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set firstParagraph",function firstParagraph$set(value/*:ParagraphElement*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The FlowLeafElement object that contains the end of the range.
   */
  "public function get lastLeaf",function lastLeaf$get()/*:FlowLeafElement*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set lastLeaf",function lastLeaf$set(value/*:FlowLeafElement*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The ParagraphElement object that contains the end of the range.
   */
  "public function get lastParagraph",function lastParagraph$get()/*:ParagraphElement*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set lastParagraph",function lastParagraph$set(value/*:ParagraphElement*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The format attributes of the paragraph containing the range.
   * <p>If the range spans more than one paragraph, the format of the first paragraph is returned.</p>
   */
  "public function get paragraphFormat",function paragraphFormat$get()/*:ITextLayoutFormat*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The TextFlow object that contains the range.
   */
  "public function get textFlow",function textFlow$get()/*:TextFlow*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set textFlow",function textFlow$set(value/*:TextFlow*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates an ElementRange object.
   * @param textFlow the text flow
   * @param absoluteStart absolute text position of the first character in the text range
   * @param absoluteEnd one beyond the absolute text position of the last character in the text range
   *
   * @return <code><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/edit/ElementRange.html">ElementRange</a></code>
   *
   */
  "public static function createElementRange",function createElementRange(textFlow/*:TextFlow*/, absoluteStart/*:int*/, absoluteEnd/*:int*/)/*:ElementRange*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},["createElementRange"],["Error"], "0.8.0", "0.9.6"
);