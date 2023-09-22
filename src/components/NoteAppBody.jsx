import NotesInput from "./NotesInput";
import NotesList from "./NotesList";

function NoteAppBody() {
  return (
    <div className="note-app__body">
      <NotesInput />
      <h2>Catatan Aktif</h2>
      <NotesList />
      <h2>Arsip</h2>
    </div>
  )
}

export default NoteAppBody;