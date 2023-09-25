/* eslint-disable react/prop-types */
import React from "react";

class NotesInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      titleChar: 50,
      body: '',
    }

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onTitleChange(event) {
    if (this.state.titleChar >= 0 && event.target.value.length <= 50) {
      this.setState(() => {
        return {
          title: event.target.value,
          titleChar: 50 - event.target.value.length
        }
      })
    } else {
      alert('Tidak boleh melebihi 50 karakter')
    }
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
          <p className="note-input__title__char-limit">Sisa karakter: {this.state.titleChar}</p>
          <input type="text" placeholder="Ketik judul" value={this.state.title} onChange={this.onTitleChange} required/>
          <textarea cols="30" rows="10" placeholder="Ketik catatan" value={this.state.body} onChange={this.onBodyChange}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    )
  }
}

export default NotesInput;