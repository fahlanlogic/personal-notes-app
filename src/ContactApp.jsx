import React from "react";
import NoteAppHeader from "./components/NoteAppHeader";
import NoteAppBody from "./components/NoteAppBody";

class ContactApp extends React.Component {
  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody />
      </>
    )
  }
}

export default ContactApp;