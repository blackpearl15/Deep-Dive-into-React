import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [Items, setItems] = useState([]);

  console.log(Items);
  function addItem(note){
    setItems(prevValue =>{
        return [...prevValue,note];
    })
  }

  function deleteItem(id){
    setItems(prevValue=>{
        return (
           prevValue.filter((item,index)=>{
             return index !==id;
           })
        );
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem}/>
      {Items.map((noteitem,index)=>(
        <Note 
        id={index}
        key={index}
         title={noteitem.title} 
         content={noteitem.content} 
            onChecked={deleteItem}
         />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
