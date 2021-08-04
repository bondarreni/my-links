import React, { useState } from "react";
import CreateArea from "./CreateArea";
import { Footer } from "./Footer";
import { Note } from "./Note";
import notes from "../notes";

function LinkPage() {
  const [noteList, setNoteList] = useState(notes);
  const [counter, setCounter] = useState(notes.length);

  function addNote(title, link, content) {
    setNoteList((prevNotes) => {
      return [
        ...prevNotes,
        {
          key: counter,
          link: link,
          title: title,
          content: content
        }
      ];
    });
    setCounter(counter + 1);
  }

  function deleteNote(nodeKey) {
    setNoteList((prevNotes) => {
      return prevNotes.filter((node) => {
        return node.key !== nodeKey;
      });
    });
  }

  function editNote(nodeKey, title, link, content) {
    setNoteList((prevNotes) => {
      return prevNotes.map((node) => {
        if (node.key === nodeKey) {
          node.title = title;
          node.link = link;
          node.content = content;
        }
        return node;
      });
    });
    console.log(noteList);
  }

  return (
    <div>
      <CreateArea addNote={addNote} />
      {noteList.map((note) => {
        return (
          <Note
            key={note.key}
            id={note.key}
            title={note.title}
            link={note.link}
            content={note.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export { LinkPage };
