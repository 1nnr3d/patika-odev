import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { searchTodo } from '../../../app/features/note/noteSlice';

export default function Search() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(searchTodo(text))
  }, [text])

  return (
    <>
      <input className="form-control w-25 mx-auto" name="search" placeholder="Search.." onChange={(e) => setText(e.target.value)} />
    </>
  )
}
