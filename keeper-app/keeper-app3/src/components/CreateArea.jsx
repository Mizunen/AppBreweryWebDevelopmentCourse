import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={(event) =>{
          props.onInputChange(event);
        }} name="title" placeholder="Title" />
        <textarea onChange={(event) =>{
          props.onInputChange(event);
        }} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
