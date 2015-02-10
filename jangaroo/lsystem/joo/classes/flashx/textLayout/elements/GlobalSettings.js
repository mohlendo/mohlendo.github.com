joo.classLoader.prepare("package flashx.textLayout.elements",/* {*/
/**
 * Configuration that applies to all TextFlow objects.
 */
"public class GlobalSettings",1,function($$private){;return[ 
  /**
   * Controls whether the text will be visible to a search engine indexer. Defaults to <code>true</code>.
   */
  "public static function get enableSearch",function enableSearch$get()/*:Boolean*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public static function set enableSearch",function enableSearch$set(value/*:Boolean*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Specifies the callback used for font mapping. The callback takes a <code>flash.text.engine.FontDescription</code> object and updates it as needed. After setting a new font mapping callback, or changing the behavior of the exisiting font mapping callback, the client must explicitly call <code>flashx.textLayout.elements.TextFlow.invalidateAllFormats</code> for each impacted text flow. This ensures that whenever a leaf element in the text flow is next recomposed, the FontDescription applied to it is recalculated, and the the callback is invoked.
   * @see flash.text.engine.FontDescription
   *
   */
  "public static function get fontMapperFunction",function fontMapperFunction$get()/*:Function*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public static function set fontMapperFunction",function fontMapperFunction$set(value/*:Function*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Specifies the callback used for changing the FontLookup based on swfcontext. The function will be called each time an ElementFormat is computed. It gives the client the opportunity to modify the FontLookup setting. The function is called with two parameters an ISWFContext and an ITextLayoutFormat. It must return a valid FontLookup.
   * @see flashx.textLayout.compose.ISWFContext
   * @see flashx.textLayout.formats.ITextLayoutFormat
   * @see flash.text.engine.ElementFormat
   * @see flash.text.engine.FontLookup
   *
   */
  "public static function get resolveFontLookupFunction",function resolveFontLookupFunction$get()/*:Function*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public static function set resolveFontLookupFunction",function resolveFontLookupFunction$set(value/*:Function*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Function that takes two parameters, a resource id and an optional array of parameters to substitute into the string. The string is of form "Content {0} more content {1}". The parameters are read from the optional array and substituted for the bracketed substrings TLF provides a default implementation with default strings. Clients may replace this function with their own implementation for localization.
   */
  "public static function get resourceStringFunction",function resourceStringFunction$get()/*:Function*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public static function set resourceStringFunction",function resourceStringFunction$set(value/*:Function*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},["enableSearch","fontMapperFunction","resolveFontLookupFunction","resourceStringFunction"],["Error"], "0.8.0", "0.9.6"
);