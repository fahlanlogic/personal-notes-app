import { getInitialData } from "../utils/data";
import NotesInput from "./NotesInput";
import React from "react";
import NotesList from "./NotesList";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchNotes: ''
    }

    this.onAddEventHandler = this.onAddEventHandler.bind(this)
    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this)
    this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this)
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this)
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

  onSearchEventHandler(event) {
    this.setState({
      searchNotes: event.target.value
    })
  }
  
  render() {
    const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.searchNotes.toLowerCase()))
    let activeNotes = notes.filter(note => note.archived === false)
    let archiveNotes = notes.filter(note => note.archived === true)

    return (
      <>
        <NoteAppHeader searching={this.state.searchNotes} onSearch={this.onSearchEventHandler}/>
        <div className="note-app__body">
          <NotesInput addNote={this.onAddEventHandler}/>
          <h2>Catatan Aktif</h2>
          <NotesList key={activeNotes.id} notes={activeNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchivedEventHandler} isArchive="Arsip" />
          <h2>Arsip</h2>
          <NotesList key={archiveNotes.id} notes={archiveNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchivedEventHandler} isArchive="Aktif" />
        </div>
      </>
    )
  }
}

export default NoteApp;