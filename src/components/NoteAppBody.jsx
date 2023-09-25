import { getInitialData } from "../utils/data";
import NotesInput from "./NotesInput";
import React from "react";
import NotesList from "./NotesList";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData()
    }

    this.onAddEventHandler = this.onAddEventHandler.bind(this)
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this)
  }

  onAddEventHandler({ title, body }) {
    this.setState((previousNote) => {
      return {
        notes: [
          ...previousNote.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toDateString(),
            archived: false
          }
        ]
      }
    })
  }

  onDeleteEventHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    this.setState({
      notes
    })
  }

  onArchivedEventHandler(id) {
    const updateNotes = this.state.notes.filter(note => note.id === id).map(note => {
      note.archived = !note.archived
    })
    this.setState({
      updateNotes
    })
  }
  render() {
    let activeNotes = this.state.notes.filter(note => note.archived === false)
    let archiveNotes = this.state.notes.filter(note => note.archived === true)

    return (
      <div className="note-app__body">
        <NotesInput addNote={this.onAddEventHandler}/>
        <h2>Catatan Aktif</h2>
        <NotesList key={activeNotes.id} notes={activeNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchivedEventHandler} isArchive="Arsip" />
        <h2>Arsip</h2>
        <NotesList key={archiveNotes.id} notes={archiveNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchivedEventHandler} isArchive="Aktif" />
      </div>
    )
  }
}

export default NoteAppBody;