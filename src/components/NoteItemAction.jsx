function NoteItemAction() {
  return (
    <div className="note-item__action">
      <button type="click" className="note-item__delete-button">Delete</button>
      <button type="click" className="note-item__archive-button">Archive</button>
    </div>
  )
}

export default NoteItemAction;