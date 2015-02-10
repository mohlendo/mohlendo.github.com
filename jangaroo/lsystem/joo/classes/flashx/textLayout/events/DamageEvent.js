joo.classLoader.prepare("package flashx.textLayout.events",/* {
import flash.events.Event;

import flashx.textLayout.elements.TextFlow;*/

/**
 * A TextFlow instance dispatches this each time it is marked as damaged. Damage can be caused by changes to the model or changes to the layout.
 * <p><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/events/DamageEvent.html#includeExamplesSummary">View the examples</a></p>
 * @see flashx.textLayout.elements.TextFlow
 *
 */
"public class DamageEvent extends flash.events.Event",2,function($$private){;return[ 
  /**
   * Absolute start of the damage
   */
  "public function get damageAbsoluteStart",function damageAbsoluteStart$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Length of the damage
   */
  "public function get damageLength",function damageLength$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * TextFlow owning the damage
   */
  "public function get textFlow",function textFlow$get()/*:TextFlow*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Constructor
   * @param type text index of the start of the damage
   * @param bubbles length of text that was damaged
   * @param cancelable <code>cancelable:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/Boolean.html">Boolean</a></code> (default = <code>false</code>)
   * @param textFlow <code>textFlow:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/elements/TextFlow.html">flashx.textLayout.elements:TextFlow</a></code> (default = <code>null</code>)
   * @param damageAbsoluteStart <code>damageAbsoluteStart:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code> (default = <code>0</code>)
   * @param damageLength <code>damageLength:<a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/int.html">int</a></code> (default = <code>0</code>)
   *
   */
  "public function DamageEvent",function DamageEvent$(type/*:String*/, bubbles/*:Boolean = false*/, cancelable/*:Boolean = false*/, textFlow/*:TextFlow = null*/, damageAbsoluteStart/*:int = 0*/, damageLength/*:int = 0*/) {flash.events.Event.call(this);if(arguments.length<6){if(arguments.length<5){if(arguments.length<4){if(arguments.length<3){if(arguments.length<2){bubbles = false;}cancelable = false;}textFlow = null;}damageAbsoluteStart = 0;}damageLength = 0;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Event type for DamageEvent
   */
  "public static const",{ DAMAGE/*:String*/ : "damage"},
];},[],["flash.events.Event","Error"], "0.8.0", "0.9.6"
);