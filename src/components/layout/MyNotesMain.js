import classes from "./MyNotesMain.module.css";
import { useState } from "react";

function MyNotesMain({ activeNote, onUpdateNote }) {
 
  const [title, setTitle] = useState("");
  const [noteContent, setnoteContent] = useState("");
  const [id, setId] = useState("");

  async function insertNote(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1140/api/insertNote", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        noteContent,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("New note has been created successfully!")
    }


  }

  return (
    <div className={classes.appMain}>
      <div className={classes.appMainNoteEdit}>
        <form onSubmit={insertNote}>
          <input
            type="text"
            id="id"
            placeholder="Note id (Unique with digits)"
            value={id}
            onChange={(e) => setId(e.target.value)}
            autoFocus
          />

          <input
            type="text"
            id="title"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <textarea
            id="noteContent"
            placeholder="Write my note here...."
            value={noteContent}
            onChange={(e) => setnoteContent(e.target.value)}
          />

          <div className={classes.buttonbox}>
            <button className={classes.button}>SAVE MY NOTE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyNotesMain;
