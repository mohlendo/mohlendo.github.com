joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;*/

/**
 * The DeleteTextOperation class encapsulates the deletion of a range of text.
 * @see flashx.textLayout.edit.EditManager
 * @see flashx.textLayout.events.FlowOperationEvent
 *
 */
"public class DeleteTextOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[ 
  /**
   * Indicates whether this operation can be merged with operations executed before or after it.
   * <p>Some delete operations, for example, a sequence of backspace keystrokes, can be fruitfully merged into one operation so that undoing the operation reverses the entire sequence.</p>
   */
  "public function get allowMerge",function allowMerge$get()/*:Boolean*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set allowMerge",function allowMerge$set(value/*:Boolean*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * deleteSelectionState The range of text to delete
   */
  "public function get deleteSelectionState",function deleteSelectionState$get()/*:SelectionState*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set deleteSelectionState",function deleteSelectionState$set(value/*:SelectionState*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a DeleteTextOperation operation.
   * @param operationState The original range of text.
   * @param deleteSelectionState The range of text to delete, if different from the range described by <code>operationState</code>. (Set to <code>null</code> to delete the range described by <code>operationState</code>.)
   * @param allowMerge Set to <code>true</code> if this operation can be merged with the next or previous operation.
   *
   */
  "public function DeleteTextOperation",function DeleteTextOperation$(operationState/*:SelectionState*/, deleteSelectionState/*:SelectionState = null*/, allowMerge/*:Boolean = false*/) {flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<3){if(arguments.length<2){deleteSelectionState = null;}allowMerge = false;}
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);