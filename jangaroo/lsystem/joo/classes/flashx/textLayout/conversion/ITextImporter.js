joo.classLoader.prepare("package flashx.textLayout.conversion",/* {
import flashx.textLayout.elements.TextFlow;*/

/**
 * Interface for importing text content into a TextFlow from an external source.
 * <p><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/conversion/ITextImporter.html#includeExamplesSummary">View the examples</a></p>
 */
"public interface ITextImporter",1,function($$private){;return[ /*
  /**
   * Errors encountered while parsing. This will be empty if there were no errors. Value is a vector of Strings.
   * /
  function errors():Vector$object.<String>*/,/*

  /**
   * Parsing errors during import will cause exceptions if throwOnError is <code>true</code>.
   * /
  function throwOnError():Boolean*/,/*

  /**
   * @private
   * /
  function throwOnError(value:Boolean):void*/,/*

  /**
   * Import text content from an external source and convert it into a TextFlow.
   * @param source Data to convert
   *
   * @return TextFlow created from the source.
   *
   * /
  function importToFlow(source:Object):TextFlow*/,
];},[],[], "0.8.0", "0.9.6"
);