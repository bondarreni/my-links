import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

function Note(props) {
  const [isEditable, setIsEditable] = useState(false);

  const [noteData, setNoteData] = useState({
    key: props.id,
    title: props.title,
    link: props.link,
    content: props.content,
    category: props.category
  });

  const [prevData, setPrevData] = useState({
    key: props.id,
    title: props.title,
    link: props.link,
    content: props.content,
    category: props.category
  });

  function toggleEditable() {
    if (isEditable) {
      // Pipe icon
      setIsEditable(false);
      props.onEdit(props.id, noteData.title, noteData.link, noteData.content);
    } else {
      //pencil icon
      setIsEditable(true);
      setPrevData(noteData);
    }
  }

  function cancelEdit() {
    //clear icon
    setIsEditable(false);
    setNoteData({
      key: props.id,
      title: prevData.title,
      link: prevData.link,
      content: prevData.content,
      category: props.category,
    });
  }

  function handleEdit(e) {
    let tagName = e.target.nodeName;
    if (tagName === "H1") {
      let innerText = e.target.innerText;
      setNoteData((prevs) => {
        return {
          ...prevs,
          title: innerText
        };
      });
    } else if (tagName === "A") {
      let href = e.target.href;
      setNoteData((prevs) => {
        return {
          ...prevs,
          link: href
        };
      });
    } else if (tagName === "P") {
      let text = e.target.textContent;
      setNoteData((prevs) => {
        return {
          ...prevs,
          content: text
        };
      });
    }
  }

  return (
    <div className="note">
      <h1
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        onFocus={handleEdit}
        onBlur={handleEdit}
      >
        {noteData.title}
      </h1>
      <a
        href={noteData.link}
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        onFocus={handleEdit}
        onBlur={handleEdit}
      >
        Visit site
      </a>
      <p
        contentEditable={isEditable}
        suppressContentEditableWarning={true}
        onFocus={handleEdit}
        onBlur={handleEdit}
      >
        {noteData.content}
      </p>

      {!isEditable && (
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
        >
          <DeleteIcon />
        </button>
      )}
      {!isEditable && (
        <button onClick={toggleEditable}>
          <EditIcon />
        </button>
      )}
      {isEditable && (
        <div>
          <button onClick={toggleEditable}>
            <DoneIcon />
          </button>
          <button onClick={cancelEdit}>
            <ClearIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export { Note };
