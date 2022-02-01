import { createSlice, nanoid } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
  name: 'note',
  initialState: {
    noteList: JSON.parse(localStorage.getItem("todos")) || [{
      id: 1,
      color: "yellow",
      text: "This is a note!"
    },
    {
      id: 2,
      color: "blue",
      text: "This is a note!"
    },
    {
      id: 3,
      color: "green",
      text: "This is a note!"
    }],
    searchText: ""
  },
  reducers: {
    addTodo: (state, action) => {
      const todoObj = {
        id: nanoid(),
        color: action.payload.color,
        text: action.payload.text
      }
      state.noteList.push(todoObj);
      localStorage.setItem("todos", JSON.stringify(state.noteList))
    },
    searchTodo: (state, action) => {
      state.searchText = action.payload;
    },
  }
});

export const { addTodo, searchTodo } = noteSlice.actions;

export default noteSlice.reducer;