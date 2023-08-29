import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name:'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            console.log(action.payload);
        },
        toggleTodo: (state, action) => {
          const todo = state.find((item) => item.id === action.payload);
          if (todo) {
            todo.done = !todo.done;
            console.log(`Toggled 'done' property for item with ID ${action.payload}. New state:`, state);
          }
       },
       deleteTodo: (state, action) => {
         return state.filter((item) => item.id !== action.payload);
       },
     },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;