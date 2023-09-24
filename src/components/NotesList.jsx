/* eslint-disable react/prop-types */
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>
  } else {
    return (
      <div className="notes-list">
        {notes.map(note => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note} />
        ))}
      </div>
    )
  }
}

export default NotesList;