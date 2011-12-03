joo.classLoader.prepare("package flashx.textLayout.formats",/* {*/
/**
 * The TabStopFormat class represents the properties of a tab stop in a paragraph. You can set the <code>TextLayoutFormat.tabstops</code> property to an array of TabStopFormat objects.
 * <p><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/formats/TabStopFormat.html#includeExamplesSummary">View the examples</a></p>
 * @see flashx.textLayout.elements.TabElement
 * @see TextLayoutFormat#tabStops
 *
 */
"public class TabStopFormat implements flashx.textLayout.formats.ITabStopFormat",1,function($$private){;return[ 
  /**
   * The tab alignment for this tab stop.
   * <p>Legal values are flash.text.engine.TabAlignment.START, flash.text.engine.TabAlignment.CENTER, flash.text.engine.TabAlignment.END, flash.text.engine.TabAlignment.DECIMAL, flashx.textLayout.formats.FormatValue.INHERIT.</p>
   * <p>Default value is undefined indicating not set.</p>
   * <p>If undefined during the cascade this property will have a value of START.</p>
   * @throws RangeError when set value is not within range for this property
   *
   * @see FormatValue#INHERIT
   * @see flash.text.engine.TabAlignment
   *
   */
  "public function get alignment",function alignment$get()/*:**/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set alignment",function alignment$set(value/*:**/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The alignment token to be used if the alignment is DECIMAL.
   * <p>Default value is undefined indicating not set.</p>
   * <p>If undefined during the cascade this property will have a value of null.</p>
   * @throws RangeError when set value is not within range for this property
   *
   */
  "public function get decimalAlignmentToken",function decimalAlignmentToken$get()/*:**/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set decimalAlignmentToken",function decimalAlignmentToken$set(value/*:**/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Returns a TabStopFormat object with default settings. This function always returns the same object.
   */
  "public static function get defaultFormat",function defaultFormat$get()/*:ITabStopFormat*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The position of the tab stop, in pixels, relative to the start of the line.
   * <p>Legal values are numbers from 0 to 10000 and flashx.textLayout.formats.FormatValue.INHERIT.</p>
   * <p>Default value is undefined indicating not set.</p>
   * <p>If undefined during the cascade this property will have a value of 0.</p>
   * @throws RangeError when set value is not within range for this property
   *
   * @see FormatValue#INHERIT
   *
   */
  "public function get position",function position$get()/*:**/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set position",function position$set(value/*:**/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a new TabStopFormat object. All settings are empty or, optionally, are initialized from the supplied <code>initialValues</code> object.
   * @param initialValues optional instance from which to copy initial values.
   *
   * @see #defaultFormat
   *
   */
  "public function TabStopFormat",function TabStopFormat$(initialValues/*:ITabStopFormat = null*/) {if(arguments.length<1){initialValues = null;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Replaces property values in this TabStopFormat object with the values of properties that are set in the <code>incoming</code> ITabStopFormat instance. Properties that are <code>undefined</code> in the <code>incoming</code> ITabStopFormat instance are not changed in this object.
   * @param incoming instance whose property values are applied to this TabStopFormat object.
   *
   */
  "public function apply",function apply(incoming/*:ITabStopFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Concatenates the values of properties in the <code>incoming</code> ITabStopFormat instance with the values of this TabStopFormat object. In this (the receiving) TabStopFormat object, properties whose values are <code>FormatValue.INHERIT</code>, and inheriting properties whose values are <code>undefined</code> will get new values from the <code>incoming</code> object. Non-inheriting properties whose values are <code>undefined</code> will get their default values. All other property values will remain unmodified.
   * @param incoming instance from which values are concatenated.
   *
   * @see FormatValue#INHERIT
   *
   */
  "public function concat",function concat(incoming/*:ITabStopFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Concatenates the values of properties in the <code>incoming</code> ITabStopFormat instance with the values of this TabStopFormat object. In this (the receiving) TabStopFormat object, properties whose values are <code>FormatValue.INHERIT</code>, and inheriting properties whose values are <code>undefined</code> will get new values from the <code>incoming</code> object. All other property values will remain unmodified.
   * @param incoming instance from which values are concatenated.
   *
   * @see FormatValue#INHERIT
   *
   */
  "public function concatInheritOnly",function concatInheritOnly(incoming/*:ITabStopFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Copies TabStopFormat settings from the <code>values</code> ITabStopFormat instance into this TabStopFormat object. If <code>values</code> is <code>null</code>, this TabStopFormat object is initialized with undefined values for all properties.
   * @param values optional instance from which to copy values.
   *
   */
  "public function copy",function copy(values/*:ITabStopFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Compares properties in ITabStopFormat instance <code>p1</code> with properties in ITabStopFormat instance <code>p2</code> and returns <code>true</code> if all properties match.
   * @param p1 instance to compare to <code>p2</code>.
   * @param p2 instance to compare to <code>p1</code>.
   *
   * @return true if all properties match, false otherwise.
   *
   */
  "public static function isEqual",function isEqual(p1/*:ITabStopFormat*/, p2/*:ITabStopFormat*/)/*:Boolean*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets properties in this TabStopFormat object to <code>undefined</code> if they do not match those in the <code>incoming</code> ITabStopFormat instance.
   * @param incoming instance against which to compare this TabStopFormat object's property values.
   *
   */
  "public function removeClashing",function removeClashing(incoming/*:ITabStopFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Sets properties in this TabStopFormat object to <code>undefined</code> if they match those in the <code>incoming</code> ITabStopFormat instance.
   * @param incoming instance against which to compare this TabStopFormat object's property values.
   *
   */
  "public function removeMatching",function removeMatching(incoming/*:ITabStopFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},["defaultFormat","isEqual"],["flashx.textLayout.formats.ITabStopFormat","Error"], "0.8.0", "0.9.6"
);