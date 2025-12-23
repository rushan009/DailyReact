import React from "react";

const Notecard = ({ note, toggleComplete }) => {
  return (
    <div style={{ border: "1px solid black", margin: "5px", padding: "5px" }}>
      <div>{note.text}</div>
      <div>
        {!note.complete && (
          <button onClick={toggleComplete}>Complete</button>
        )}
      </div>
    </div>
  );
};

export default Notecard;
