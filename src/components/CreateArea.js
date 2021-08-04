import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isExpanded, setExpanded] = useState(false);

  function handleInput(e) {
    let inputValue = e.target.value;
    let inputName = e.target.name;

    if (inputName === "link") {
      setLink(inputValue);
      setExpanded(true);
    } else if (inputName === "title") {
      setTitle(inputValue);
    } else if (inputName === "content") {
      setContent(inputValue);
    }
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="link"
          placeholder="Link"
          onChange={handleInput}
          value={link}
        />
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleInput}
            value={title}
          />
        )}
        {isExpanded && (
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            onChange={handleInput}
            value={content}
          />
        )}
        <Zoom in={isExpanded}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              props.addNote(title, link, content);
              setLink("");
              setTitle("");
              setContent("");
              setExpanded(false);
            }}
          >
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
