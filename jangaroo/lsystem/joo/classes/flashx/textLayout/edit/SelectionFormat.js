joo.classLoader.prepare("package flashx.textLayout.edit",/* {*/
/**
 * The SelectionFormat class defines the properties of a selection highlight.
 * @see ISelectionManager
 * @see SelectionManager
 *
 */
"public class SelectionFormat",1,function($$private){;return[ 
  /**
   * The alpha for drawing the cursor. Valid values are between 0 (completely transparent) and 1 (completely opaque, which is the default).
   * <p>Setting the <code>pointAlpha</code> and <code>rangeAlpha</code> properties to zero disables selection highlighting.</p>
   * @see #rangeAlpha
   *
   */
  "public function get pointAlpha",function pointAlpha$get()/*:Number*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The blend mode for drawing the cursor.
   * @see flash.display.BlendMode
   *
   */
  "public function get pointBlendMode",function pointBlendMode$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The rate at which the cursor blinks, in milliseconds.
   */
  "public function get pointBlinkRate",function pointBlinkRate$get()/*:Number*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The color for drawing the cursor.
   */
  "public function get pointColor",function pointColor$get()/*:uint*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The alpha for drawing the highlight of a range selection. Valid values are between 0 (completely transparent) and 1 (completely opaque, which is the default).
   * <p>Setting the <code>pointAlpha</code> and <code>rangeAlpha</code> properties to zero disables selection highlighting.</p>
   * @see #pointAlpha
   *
   */
  "public function get rangeAlpha",function rangeAlpha$get()/*:Number*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The blending mode for drawing the highlight of a range selection.
   * @see flash.display.BlendMode
   *
   */
  "public function get rangeBlendMode",function rangeBlendMode$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The color for drawing the highlight of a range selection.
   */
  "public function get rangeColor",function rangeColor$get()/*:uint*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a SelectionFormat object with the specified properties.
   * <p>A SelectionFormat created with the default values will use black for the highlight colors, 1.0 for the alphas, and BlendMode.DIFFERENCE for the blending modes. The cursor blink rate is 500 milliseconds.</p>
   * <p>Setting the <code>pointAlpha</code> and <code>rangeAlpha</code> properties to zero disables selection highlighting.</p>
   * @param rangeColor The color for drawing the highlight.
   * @param rangeAlpha The transparency value for drawing the highlight. Valid values are between 0 (completely transparent) and 1 (completely opaque, which is the default).
   * @param rangeBlendMode The blend mode for drawing the highlight. Use constants defined in the BlendMode class to set this parameter.
   * @param pointColor The color for the drawing cursor.
   * @param pointAlpha The transparency value for drawing the cursor. Valid values are between 0 (completely transparent) and 1 (completely opaque, which is the default).
   * @param pointBlendMode The blend mode for drawing the cursor. Use constants defined in the BlendMode class to set this parameter.
   * @param pointBlinkRate The rate at which the cursor blinks, in milliseconds.
   *
   * @see flash.display.BlendMode
   * @see #pointAlpha
   * @see #rangeAlpha
   *
   */
  "public function SelectionFormat",function SelectionFormat$(rangeColor/*:uint = 0xffffff*/, rangeAlpha/*:Number = 1.0*/, rangeBlendMode/*:String = "difference"*/, pointColor/*:uint = 0xffffff*/, pointAlpha/*:Number = 1.0*/, pointBlendMode/*:String = "difference"*/, pointBlinkRate/*:Number = 500*/) {if(arguments.length<7){if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){rangeColor = 0xffffff;}rangeAlpha = 1.0;}rangeBlendMode = "difference";}pointColor = 0xffffff;}pointAlpha = 1.0;}pointBlendMode = "difference";}pointBlinkRate = 500;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Determines whether this SelectionFormat object has the same property values as another SelectionFormat object.
   * @param selectionFormat the SelectionFormat to compare against.
   *
   * @return <code>true</code>, if the property values are identical; <code>false</code>, otherwise.
   *
   */
  "public function equals",function equals(selectionFormat/*:SelectionFormat*/)/*:Boolean*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["Error"], "0.8.0", "0.9.6"
);