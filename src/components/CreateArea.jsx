import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title:"",
    content:""
  });

  function handleevent(event){
    const {name , value} = event.target;

    setnote(prevValue =>{
        return {
            ...prevValue,
            [name]:value
        }
    })
  }

  function submitNote(event){
    props.onAdd(note);
    setnote({title:"",content:""});
   // console.log("isme");
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
        onChange={handleevent} 
        name="title" 
        placeholder="Title" 
        value={note.title}/>

        <textarea name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value={note.content} 
        onChange={handleevent}
        />

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
