import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todos',
    initialState: [],
    reducers: {
    //   resetTodo: (state, action) => {
    //     state = (action.payload)
    //   },
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
     },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;