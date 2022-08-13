
import { useEffect, useState } from "react";

import Card from "../components/ui/Card";
import MyNotesMain from "../components/layout/MyNotesMain";
import MyNotesSidebar from "../components/layout/MyNotesSidebar";
import classes from "../components/layout/MyNotesSidebar.module.css";


function NotesList() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  
  /*store in local storage*/
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  

  /*looping though and removing a note*/
  const onDelNode = (idToDel) => {
    setNotes(notes.filter((note) => note.id !== idToDel));
  };

  
  return (
    <Card>
    <div className={classes.main}>
      <MyNotesSidebar
        notes={notes}
        onDelNode={onDelNode}
          />

      <MyNotesMain/>
    </div>
    </Card>
  );
}

export default NotesList;
