import { useEffect, useState } from "react";
import uuid from "react-uuid";

import MyNotesMain from "../components/layout/MyNotesMain";
import MyNotesSidebar from "../components/layout/MyNotesSidebar";
import classes from "../components/layout/MyNotesSidebar.module.css";

function NotesList() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);

  const [activeNote, setActiveNote] = useState(false);

  /*store in local storage*/
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      body: "",
    };

    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };

  /*looping though and removing a note*/
  const onDelNode = (idToDel) => {
    setNotes(notes.filter((note) => note.id !== idToDel));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className={classes.main}>
      <MyNotesSidebar
        notes={notes}
        onAddNote={onAddNote}
        onDelNode={onDelNode}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <MyNotesMain activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default NotesList;
