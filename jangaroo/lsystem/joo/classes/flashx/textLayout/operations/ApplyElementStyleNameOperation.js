joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;
import flashx.textLayout.elements.FlowElement;*/

/**
 * The ApplyElementStyleNameOperation class encapsulates a style name change.
 * @see flashx.textLayout.elements.FlowElement#styleName
 * @see flashx.textLayout.edit.EditManager
 * @see flashx.textLayout.events.FlowOperationEvent
 *
 */
"public class ApplyElementStyleNameOperation extends flashx.textLayout.operations.FlowElementOperation",4,function($$private){;return[ 
  /**
   * The style name assigned by this operation.
   */
  "public function get newStyleName",function newStyleName$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set newStyleName",function newStyleName$set(value/*:String*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a ApplyElementStyleNameOperation object.
   * <p>If the <code>relativeStart</code> and <code>relativeEnd</code> parameters are set, then the existing element is split into multiple elements, the selected portion using the new style name and the rest using the existing style name.</p>
   * @param operationState Describes the current selection.
   * @param targetElement Specifies the element to change.
   * @param newStyleName The style name to assign.
   * @param relativeStart An offset from the beginning of the target element.
   * @param relativeEnd An offset from the end of the target element.
   *
   */
  "public function ApplyElementStyleNameOperation",function ApplyElementStyleNameOperation$(operationState/*:SelectionState*/, targetElement/*:FlowElement*/, newStyleName/*:String*/, relativeStart/*:int = 0*/, relativeEnd/*:int = -1*/) {flashx.textLayout.operations.FlowElementOperation.call(this);if(arguments.length<5){if(arguments.length<4){relativeStart = 0;}relativeEnd = -1;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowElementOperation","Error"], "0.8.0", "0.9.6"
);