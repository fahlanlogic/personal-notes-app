import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

/* eslint-disable react/prop-types */
function NoteItem() {
  return (
    <div className="note-item">
      <NoteItemContent />
      <NoteItemAction />
    </div>
  )
}

export default NoteItem;