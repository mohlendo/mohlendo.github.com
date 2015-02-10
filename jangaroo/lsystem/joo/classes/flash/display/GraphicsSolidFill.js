joo.classLoader.prepare("package flash.display",/* {*/


/**
 * Defines a solid fill.
 * <p>Use a GraphicsSolidFill object with the <code>Graphics.drawGraphicsData()</code> method. Drawing a GraphicsSolidFill object is the equivalent of calling the <code>Graphics.beginFill()</code> method.</p>
 * @see Graphics#beginFill()
 * @see Graphics#drawGraphicsData()
 *
 */
"public final class GraphicsSolidFill implements flash.display.IGraphicsFill, flash.display.IGraphicsData",1,function($$private){;return[ 
  /**
   * Indicates the alpha transparency value of the fill. Valid values are 0 (fully transparent) to 1 (fully opaque). The default value is 1. Display objects with alpha set to 0 are active, even though they are invisible.
   */
  "public var",{ alpha/*:Number*/ : 1.0},
  /**
   * The color of the fill. Valid values are in the hexadecimal format 0xRRGGBB. The default value is 0xFF0000 (or the uint 0).
   */
  "public var",{ color/*:uint*/ : 0},

  /**
   * Creates a new GraphicsSolidFill object.
   * @param color The color value. Valid values are in the hexadecimal format 0xRRGGBB.
   * @param alpha The alpha transparency value. Valid values are 0 (fully transparent) to 1 (fully opaque).
   *
   */
  "public function GraphicsSolidFill",function GraphicsSolidFill$(color/*:uint = 0*/, alpha/*:Number = 1.0*/) {if(arguments.length<2){if(arguments.length<1){color = 0;}alpha = 1.0;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flash.display.IGraphicsFill","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);