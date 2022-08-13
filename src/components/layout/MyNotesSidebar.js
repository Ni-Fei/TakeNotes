import classes from "./MyNotesSidebar.module.css";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

function MyNotesSidebar({ notes, onDelNode }) {
  const [title, setTitle] = useState("");

  async function populateNotes() {
    const req = await fetch("http://localhost:1140/api/retrieveNote")
    
    const data = req.json()
    if(data.status === "ok"){
      setTitle(data.title)
    }
    else{
      alert(data.error)
    }
  }

  return (
    <div className={classes.appSidebar}>
      <div className={classes.appSidebarHeader}>
        <h1> MY NOTES</h1>
      </div>

      <div className={classes.appSidebarNotes}>
        {notes.map((note) => (
          <div className={classes.appSidebarNote}>
            <div className={classes.sidebarNoteTitle}>
              <strong>{note.title}</strong>

              <button
                className={classes.sidebarDelbutton}
                onClick={() => onDelNode(note.id)}
              >
                <MdDeleteForever size="18px" />
              </button>
            </div>

            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyNotesSidebar;
