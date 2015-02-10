joo.classLoader.prepare("package flashx.textLayout.elements",/* {*/


/**
 * The BreakElement class defines a line break, which provides for creating a line break in the text without creating a new paragraph. It inserts a U+2028 character in the text of the paragraph.
 * <p><b>Note</b>: This class exists primarily to support break tags in MXML markup. To create line breaks, you can add newline characters (\n) directly into the text like this:</p>
 * <listing>
 *     spanElement1.text += '\n';
 *    </listing>In markup, either FXG, TEXT_LAYOUT_FORMAT or MXML, you can simply insert a where you want the break.
 * <p>Default MXML Property<code>mxmlChildren</code></p>
 * @see ParagraphElement
 * @see SpanElement
 *
 */
"public final class BreakElement extends flashx.textLayout.elements.SpecialCharacterElement",5,function($$private){;return[ 
  /**
   * Constructor.
   */
  "public function BreakElement",function BreakElement$() {flashx.textLayout.elements.SpecialCharacterElement.call(this);
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.elements.SpecialCharacterElement","Error"], "0.8.0", "0.9.6"
);