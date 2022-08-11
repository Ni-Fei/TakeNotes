import classes from "./MyNotesMain.module.css";

function MyNotesMain({ activeNote, onUpdateNote }) {

  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote, 
      [key]: value,
    });

  };

  if(!activeNote) return <div className={classes.noActiveNote}>Select a note to proceed</div>


  return (
    <div className={classes.appMain}>
      <div className={classes.appMainNoteEdit}>
        <input type="text" id="title" 
        value={activeNote.title} 
        onChange={(e) => onEditField("title", e.target.value)}
        autoFocus />

        <textarea
          id="body"
          placeholder="Write my note here...."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>
    </div>
  );
}

export default MyNotesMain;
