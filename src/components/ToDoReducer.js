import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
    name:'todos',
    initialState: {
      todos:[],
    },
    reducers: {
      resetTodo: (state, action) => {
        state.todos = (action.payload)
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
        const todoToUpdate = state.find(item => item.id === action.payload.id);
        if (todoToUpdate) {
            todoToUpdate.text = action.payload.text;
        }
     },
}});

export const { resetTodo, addTodo, toggleTodo, deleteTodo, updateTodo } = todoReducer.actions;
export default todoReducer.reducer;