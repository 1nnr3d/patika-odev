import React from 'react';
import style from './style.module.css';

import { useSelector } from 'react-redux';

export default function Notes() {
  const searchQuery = useSelector(state => state.note.searchText);
  let notes = useSelector(state => state.note.noteList);

  if (searchQuery.length > 0) {
    notes = notes.filter(note => note.text.includes(searchQuery));
  }

  return (
    <div className="pe-5 mt-3">
      <ul className={style.list}>

        {
          notes.map((note, index) => (
            <li className={`${style.listItem} ${style[note.color]}`} key={note.id}>
              <h4>Note {index + 1}</h4>
              <div>
                {note.text}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
