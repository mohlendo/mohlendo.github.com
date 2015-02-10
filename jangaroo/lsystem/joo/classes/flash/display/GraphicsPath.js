joo.classLoader.prepare("package flash.display",/* {*/


/**
 * A collection of drawing commands and the coordinate parameters for those commands.
 * <p>Use a GraphicsPath object with the <code>Graphics.drawGraphicsData()</code> method. Drawing a GraphicsPath object is the equivalent of calling the <code>Graphics.drawPath()</code> method.</p>
 * <p>The GraphicsPath class also has its own set of methods (<code>curveTo()</code>, <code>lineTo()</code>, <code>moveTo()</code> <code>wideLineTo()</code> and <code>wideMoveTo()</code>) similar to those in the Graphics class for making adjustments to the <code>GraphicsPath.commands</code> and <code>GraphicsPath.data</code> vector arrays.</p>
 * @see Graphics#drawGraphicsData()
 * @see Graphics#drawPath()
 *
 */
"public final class GraphicsPath implements flash.display.IGraphicsPath, flash.display.IGraphicsData",1,function($$private){;return[ 
  /**
   * The Vector of drawing commands as integers representing the path. Each command can be one of the values defined by the GraphicsPathCommand class.
   * @see GraphicsPathCommand
   *
   */
  "public var",{ commands/*:Vector$object.<int>*/:null},
  /**
   * The Vector of Numbers containing the parameters used with the drawing commands.
   */
  "public var",{ data/*:Vector$object.<Number>*/:null},

  /**
   * Specifies the winding rule using a value defined in the GraphicsPathWinding class.
   * @see GraphicsPathWinding
   *
   */
  "public function get winding",function winding$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set winding",function winding$set(value/*:String*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a new GraphicsPath object.
   * @param commands A Vector of integers representing commands defined by the GraphicsPathCommand class.
   * @param data A Vector of Numbers where each pair of numbers is treated as a point (an x, y pair).
   * @param winding Specifies the winding rule using a value defined in the GraphicsPathWinding class.
   *
   * @see GraphicsPathCommand
   * @see GraphicsPathWinding
   *
   */
  "public function GraphicsPath",function GraphicsPath$(commands/*:Vector$object.<int> = null*/, data/*:Vector$object.<Number> = null*/, winding/*:String = "evenOdd"*/) {if(arguments.length<3){if(arguments.length<2){if(arguments.length<1){commands = null;}data = null;}winding = "evenOdd";}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Adds a new "curveTo" command to the <code>commands</code> vector and new coordinates to the <code>data</code> vector.
   * @param controlX A number that specifies the horizontal position of the control point relative to the registration point of the parent display object.
   * @param controlY A number that specifies the vertical position of the control point relative to the registration point of the parent display object.
   * @param anchorX A number that specifies the horizontal position of the next anchor point relative to the registration point of the parent display object.
   * @param anchorY A number that specifies the vertical position of the next anchor point relative to the registration point of the parent display object.
   *
   * @see GraphicsPathCommand#CURVE_TO
   * @see Graphics#curveTo()
   *
   */
  "public function curveTo",function curveTo(controlX/*:Number*/, controlY/*:Number*/, anchorX/*:Number*/, anchorY/*:Number*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Adds a new "lineTo" command to the <code>commands</code> vector and new coordinates to the <code>data</code> vector.
   * @param x The x coordinate of the destination point for the line.
   * @param y The y coordinate of the destination point for the line.
   *
   * @see GraphicsPathCommand#LINE_TO
   * @see Graphics#lineTo()
   *
   */
  "public function lineTo",function lineTo(x/*:Number*/, y/*:Number*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Adds a new "moveTo" command to the <code>commands</code> vector and new coordinates to the <code>data</code> vector.
   * @param x The x coordinate of the destination point.
   * @param y The y coordinate of the destination point.
   *
   * @see GraphicsPathCommand#MOVE_TO
   * @see Graphics#moveTo()
   *
   */
  "public function moveTo",function moveTo(x/*:Number*/, y/*:Number*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Adds a new "wideLineTo" command to the <code>commands</code> vector and new coordinates to the <code>data</code> vector.
   * @param x The x-coordinate of the destination point for the line.
   * @param y The y-coordinate of the destination point for the line.
   *
   * @see GraphicsPathCommand#WIDE_LINE_TO
   *
   */
  "public function wideLineTo",function wideLineTo(x/*:Number*/, y/*:Number*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Adds a new "wideMoveTo" command to the <code>commands</code> vector and new coordinates to the <code>data</code> vector.
   * @param x The x-coordinate of the destination point.
   * @param y The y-coordinate of the destination point.
   *
   * @see GraphicsPathCommand#WIDE_MOVE_TO
   *
   */
  "public function wideMoveTo",function wideMoveTo(x/*:Number*/, y/*:Number*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flash.display.IGraphicsPath","flash.display.IGraphicsData","Error"], "0.8.0", "0.9.6"
);