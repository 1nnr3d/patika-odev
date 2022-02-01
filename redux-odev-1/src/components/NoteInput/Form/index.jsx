import { useState } from 'react';
import style from './style.module.css';

import { addTodo } from '../../../app/features/note/noteSlice';

import { useDispatch } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    color: null,
    text: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.text.length > 0) return alert("Please write a note!");
    else if (note.color === null) return alert("Please choose is a color.");

    dispatch(addTodo(note));
    setNote({ color: null, text: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group w-50 mx-auto">
        <div className="input-group">
          <textarea className="form-control"
            style={{ minHeight: '180px', resize: "none" }}
            placeholder="Enter your note here..."
            value={note.text}
            onChange={(e) => setNote({ ...note, text: e.target.value })} />
          <button type="submit" className="btn btn-success">Add</button>
        </div>
        <div className="mt-2">
          <div className="d-flex">
            <input className={`me-2 form-control ${style.radioBtn}`} type="radio" name="color" value="pink"
              checked={note.color === "pink"}
              onChange={(e) => setNote({ ...note, color: e.target.value })} />
            <input className={`me-2 form-control ${style.radioBtn}`} type="radio" name="color" value="purple"
              checked={note.color === "purple"}
              onChange={(e) => setNote({ ...note, color: e.target.value })} />
            <input className={`me-2 form-control ${style.radioBtn}`} type="radio" name="color" value="yellow"
              checked={note.color === "yellow"}
              onChange={(e) => setNote({ ...note, color: e.target.value })} />
            <input className={`me-2 form-control ${style.radioBtn}`} type="radio" name="color" value="blue"
              checked={note.color === "blue"}
              onChange={(e) => setNote({ ...note, color: e.target.value })} />
            <input className={`me-2 form-control ${style.radioBtn}`} type="radio" name="color" value="green"
              checked={note.color === "green"}
              onChange={(e) => setNote({ ...note, color: e.target.value })} />
          </div>
        </div>
      </div>
    </form>
  )
}
