joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;*/

/**
 * The FlowTextOperation is the base class for operations that transform a range of text.
 * @see flashx.textLayout.edit.EditManager
 *
 */
"public class FlowTextOperation extends flashx.textLayout.operations.FlowOperation",2,function($$private){;return[ 
  /**
   * The absolute end point of the range of text to which this operation is applied.
   */
  "public function get absoluteEnd",function absoluteEnd$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set absoluteEnd",function absoluteEnd$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The absolute start point of the range of text to which this operation is applied.
   */
  "public function get absoluteStart",function absoluteStart$get()/*:int*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set absoluteStart",function absoluteStart$set(value/*:int*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The selection state at the start of the operation.
   */
  "public function get originalSelectionState",function originalSelectionState$get()/*:SelectionState*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set originalSelectionState",function originalSelectionState$set(value/*:SelectionState*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates the FlowTextOperation object.
   * @param operationState Specifies the relevant selection. If relevant to the operation, the <code>operationState</code> describes the text range to which this operation applies. Otherwise, <code>operationState</code> is used to save the current selection state so that it can be restored when the operation is undone.
   *
   */
  "public function FlowTextOperation",function FlowTextOperation$(operationState/*:SelectionState*/) {flashx.textLayout.operations.FlowOperation.call(this);
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Re-executes the operation.
   * <p>This method must be overridden in derived classes. The base class method does nothing. You should not call <code>redo()</code> directly. The edit manager calls the method when it re-executes the operation.</p>
   * @return The SelectionState object passed to the operation when it was performed. This SelectionState object can be the current selection or a selection created specifically for the operation.
   *
   */
  "override public function redo",function redo()/*:SelectionState*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowOperation","Error"], "0.8.0", "0.9.6"
);