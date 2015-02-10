joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;
import flashx.textLayout.formats.ITextLayoutFormat;*/

/**
 * The InsertTextOperation class encapsulates a text insertion operation.
 * @see flashx.textLayout.edit.EditManager
 * @see flashx.textLayout.events.FlowOperationEvent
 *
 */
"public class InsertTextOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[ 
  /**
   * The character format applied to the inserted text.
   */
  "public function get characterFormat",function characterFormat$get()/*:ITextLayoutFormat*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set characterFormat",function characterFormat$set(value/*:ITextLayoutFormat*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * The text deleted by this operation, if any.
   * <p><code>null</code> if no text is deleted.</p>
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
   * The text inserted by this operation.
   */
  "public function get text",function text$get()/*:String*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set text",function text$set(value/*:String*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates an InsertTextOperation object.
   * @param operationState Describes the insertion point or range of text.
   * @param text The string to insert.
   * @param deleteSelectionState Describes the range of text to delete before doing insertion, if different than the range described by <code>operationState</code>.
   *
   */
  "public function InsertTextOperation",function InsertTextOperation$(operationState/*:SelectionState*/, text/*:String*/, deleteSelectionState/*:SelectionState = null*/) {flashx.textLayout.operations.FlowTextOperation.call(this);if(arguments.length<3){deleteSelectionState = null;}
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Re-executes the operation after it has been undone.
   * <p>This function is called by the edit manager, when necessary.</p>
   * @return <code><a href="http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flashx/textLayout/edit/SelectionState.html">SelectionState</a></code>
   *
   */
  "override public function redo",function redo()/*:SelectionState*/ {
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);