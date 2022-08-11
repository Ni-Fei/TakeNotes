import classes from "./MyNotesSidebar.module.css";
import { MdDeleteForever } from "react-icons/md";

function MyNotesSidebar({
  notes,
  onAddNote,
  onDelNode,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className={classes.appSidebar}>
      <div className={classes.appSidebarHeader}>
        <h1>NOTES</h1>

        <button className={classes.sidebarAddbutton} onClick={onAddNote}>
          ADD NEW NOTE
        </button>
      </div>

      <div className={classes.appSidebarNotes}>
        {notes.map((note) => (

          <div className={classes.appSidebarNote} 
          onClick={() => setActiveNote(note.id)}>

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
