/* eslint-disable react/prop-types */
function NoteItemAction({ onDelete, onArchive, id, isArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>Hapus</button>
      <button className="note-item__archive-button" onClick={() => onArchive(id)}>{isArchive}</button>
    </div>
  )
}

export default NoteItemAction;