joo.classLoader.prepare("package flashx.textLayout.compose",/* {*/


/**
 * The IVerticalJustificationLine interface defines the methods and properties required to allow the vertical justification of text lines.
 */
"public interface IVerticalJustificationLine",1,function($$private){;return[ /*
  /**
   * Specifies the number of pixels from the baseline to the top of the tallest characters in the line. For a TextLine that contains only a graphic element, <code>ascent</code> is set to 0.
   * /
  function ascent():Number*/,/*

  /**
   * Specifies the number of pixels from the baseline to the bottom of the lowest-descending characters in the line. For a TextLine that contains only a graphic element, <code>descent</code> is set to 0.
   * /
  function descent():Number*/,/*

  /**
   * The height of the line in pixels.
   * /
  function height():Number*/,/*

  /**
   * The horizontal position of the line relative to its container, expressed as the offset in pixels from the left of the container.
   * @see #y
   *
   * /
  function x():Number*/,/*

  /**
   * @private
   * /
  function x(value:Number):void*/,/*

  /**
   * The vertical position of the line relative to its container, expressed as the offset in pixels from the top of the container.
   * @see #x
   *
   * /
  function y():Number*/,/*

  /**
   * @private
   * /
  function y(value:Number):void*/,
];},[],[], "0.8.0", "0.9.6"
);