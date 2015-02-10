joo.classLoader.prepare("package flashx.textLayout.operations",/* {
import flashx.textLayout.edit.SelectionState;
import flashx.textLayout.edit.TextScrap;*/

/**
 * The PasteOperation class encapsulates a paste operation.
 * <p>The specified range is replaced by the new content.</p>
 * <p><b>Note:</b> The edit manager is responsible for copying the contents of the clipboard.</p>
 * @see flashx.textLayout.edit.EditManager
 * @see flashx.textLayout.events.FlowOperationEvent
 *
 */
"public class PasteOperation extends flashx.textLayout.operations.FlowTextOperation",3,function($$private){;return[ 
  /**
   * textScrap the text being pasted
   */
  "public function get textScrap",function textScrap$get()/*:TextScrap*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * @private
   */
  "public function set textScrap",function textScrap$set(value/*:TextScrap*/)/*:void*/ {
    throw new Error('not implemented'); // TODO: implement!
  },

  /**
   * Creates a PasteOperation object.
   * @param operationState Describes the insertion point or a range of text to replace.
   * @param textScrap The content to paste into the text flow.
   *
   */
  "public function PasteOperation",function PasteOperation$(operationState/*:SelectionState*/, textScrap/*:TextScrap*/) {flashx.textLayout.operations.FlowTextOperation.call(this);
    throw new Error('not implemented'); // TODO: implement!
  },
];},[],["flashx.textLayout.operations.FlowTextOperation","Error"], "0.8.0", "0.9.6"
);