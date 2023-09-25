import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

/* eslint-disable react/prop-types */
function NoteItem({ id, title, createdAt, body, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive}/>
    </div>
  )
}

export default NoteItem;