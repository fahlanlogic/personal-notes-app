import NoteItemAction from "./NoteItemAction";
import NoteItemContent from "./NoteItemContent";

/* eslint-disable react/prop-types */
function NoteItem({ id, title, createdAt, body, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} createdAt={createdAt} body={body} />
      <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive}/>
    </div>
  )
}

export default NoteItem;