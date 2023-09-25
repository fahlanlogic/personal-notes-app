/* eslint-disable react/prop-types */
function NoteAppHeader({ searching, onSearch }) {
    return (
      <div className="note-app__header">
        <h1>Notes App</h1>
        <input type="text" value={searching} className="input_search" placeholder="Cari judul" onChange={onSearch}/>
      </div>
    )
}

export default NoteAppHeader;