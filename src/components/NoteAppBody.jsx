import { getInitialData } from "../utils/data";
import NotesInput from "./NotesInput";
import NotesList from "./NotesList";
import React from "react";

class NoteAppBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData()
    }

    this.onAddEventHandler = this.onAddEventHandler.bind(this)
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
  render() {
    return (
      <div className="note-app__body">
        <NotesInput addNote={this.onAddEventHandler}/>
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes}/>
        <h2>Arsip</h2>
        {console.log(this.state.notes)}
      </div>
    )
  }
}

export default NoteAppBody;