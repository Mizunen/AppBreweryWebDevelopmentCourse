import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";
function App() {
  return (
    <div>
      <Header />
      {Notes.map(noteItem => (<Note
      key={noteItem.key}
      id={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
       />))}
      <Footer />
    </div>
  );
}

export default App;
