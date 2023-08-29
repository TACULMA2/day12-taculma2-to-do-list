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
          }
    }
}});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;