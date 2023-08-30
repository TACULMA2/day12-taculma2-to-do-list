import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
    name:'todos',
    initialState: [],
        reducers: {
      resetTodo: (state, action) => {
        state = (action.payload)
      },
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodo: (state, action) => {
          const todo = state.find((item) => item.id === action.payload);
          if (todo) {
            todo.done = !todo.done;
          }
       },
       deleteTodo: (state, action) => {
         return state.filter((item) => item.id !== action.payload);
       },
       updateTodo: (state, action) => {
        return state.put((item) => item.id == action.payload);
      },
     },
});

export const { resetTodo, addTodo, toggleTodo, deleteTodo, updateTodo } = todoReducer.actions;
export default todoReducer.reducer;