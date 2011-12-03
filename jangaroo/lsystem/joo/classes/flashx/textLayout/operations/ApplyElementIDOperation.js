joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;
import flashx.textLayout.elements.FlowElement;*/

/**
 * The ChangeElementIDOperation class encapsulates an element ID change.
 * @see flashx.textLayout.elements.FlowElement
 * @see flashx.textLayout.edit.EditManager
 * @see flashx.textLayout.events.FlowOperationEvent
 *
 */
"public class ApplyElementIDOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[ 
  /**
   * The ID assigned by this operation.
   */
  "public function get newID",function newID$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set newID",function newID$set(value/*:String*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a ChangeElementIDOperation object.
   * <p>If the <code>relativeStart</code> or <code>relativeEnd</code> parameters are set, then the existing element is split into two elements, one using the existing ID and the other using the new ID. If both parameters are set, then the existing element is split into three elements. The first and last elements of the set are both assigned the original ID.</p>
   * @param operationState Specifies the selection state before the operation
   * @param targetElement Specifies the element to change
   * @param newID The ID to assign
   * @param relativeStart An offset from the beginning of the target element.
   * @param relativeEnd An offset from the end of the target element.
   *
   */
  "public function ApplyElementIDOperation",function ApplyElementIDOperation$(operationState/*:SelectionState*/, targetElement/*:FlowElement*/, newID/*:String*/, relativeStart/*:int = 0*/, relativeEnd/*:int = -1*/) {flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<5){if(arguments.length<4){relativeStart = 0;}relativeEnd = -1;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);