import React from "react";

class NotesInput extends React.Component {
  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form className="note-input">
          <input type="text" placeholder="Ketik judul"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Ketik catatan"></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NotesInput;