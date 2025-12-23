import React, { useState } from "react";
import Add from "./Add";
import Notecard from "./Notecard";

const App = () => {
  const [notes, addNotes] = useState([]);
  const [note, setNote] = useState("");

  const notesAdd = () => {
    const newnote = {
        id:Date.now(),
        text: note,
        complete:false
    }
    addNotes([...notes, newnote]);
    setNote("");
  };

  const toggleComplete = (id)=>{
    addNotes(
        notes.map((n)=>{
            return n.id===id ? {...n, complete:!n.complete} : n
        })
    )
  }

  console.log(note);
  console.log(notes);

  return (
    <div>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note..."
      />
      <Add addNote={notesAdd} />
      <div>
        <h1>
            Notes Area
        </h1>
        {notes.map((n)=>{
            return <Notecard key={n.id} note={n}  toggleComplete={() => toggleComplete(n.id)}/>
            })
        }
      </div>
    </div>
  );
};

export default App;
