joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;
import flashx.textLayout.elements.FlowElement;*/

/**
 * The FlowElementOperation class is the base class for operations that transform a FlowElement.
 * @see flashx.textLayout.formats.TextLayoutFormat
 * @see flashx.textLayout.edit.EditManager
 * @see flashx.textLayout.events.FlowOperationEvent
 *
 */
"public class FlowElementOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[ 
  /**
   * An offset from the start of the <code>targetElement</code>.
   */
  "public function get relativeEnd",function relativeEnd$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set relativeEnd",function relativeEnd$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * An offset from the beginning of the <code>targetElement</code>.
   */
  "public function get relativeStart",function relativeStart$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set relativeStart",function relativeStart$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Specifies the element this operation modifies.
   */
  "public function get targetElement",function targetElement$get()/*:FlowElement*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set targetElement",function targetElement$set(value/*:FlowElement*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a FlowElementOperation object.
   * @param operationState Specifies the TextFlow object this operation acts upon.
   * @param targetElement Specifies the element this operation modifies.
   * @param relativeStart An offset from the beginning of the <code>targetElement</code>.
   * @param relativeEnd An offset from the end of the <code>targetElement</code>.
   *
   */
  "public function FlowElementOperation",function FlowElementOperation$(operationState/*:SelectionState*/, targetElement/*:FlowElement*/, relativeStart/*:int = 0*/, relativeEnd/*:int = -1*/) {flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<4){if(arguments.length<3){relativeStart = 0;}relativeEnd = -1;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);