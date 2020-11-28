import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState("");
  const [notes, setNote] = useState([{title: "",content:""}]);
  function handleChange(event){
    const {name, text} = event.target;
    console.log(name);
    console.log(text);
    
    setInput(text);
  }
  
  function addNote(){
    setNote((prevValue) => {
      return [...prevValue, input];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onInputChange={handleChange}
        onAdd={addNote}
      />
      {notes.map((note,index) =>{
        return <Note key={index} title="Note Title" content="Note content"
        onInputChange={handleChange}
        onAdd={addNote}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
