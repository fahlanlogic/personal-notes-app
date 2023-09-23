/* eslint-disable react/prop-types */
function NoteItemAction({ onDelete, onArchive, id }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
      <button className="note-item__archive-button" onClick={() => onArchive(id)}>Archive</button>
    </div>
  )
}

export default NoteItemAction;