import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [pressed, setpressed] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function dikhao(){
    setpressed(true);
  }

  return (
    <div>
      <form className="create-note">
        {pressed && <input
          name="title"
          onChange={handleChange}
          
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={dikhao}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={pressed ? 3 : 1}
        />
        <Zoom in={pressed}>
        <button onClick={submitNote}><AddIcon/></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
