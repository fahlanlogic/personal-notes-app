/* eslint-disable react/prop-types */
import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  onBodyChange(event) {
    this.setState({
      body: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state)
  }
  
  
  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="Ketik judul" value={this.state.title} onChange={this.onTitleChange} required/>
          <textarea cols="30" rows="10" placeholder="Ketik catatan" value={this.state.body} onChange={this.onBodyChange}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NotesInput;